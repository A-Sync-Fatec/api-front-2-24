import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import '../styles/PortalTransparencia.css';
import { Projeto } from "../Type/Projeto";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const PortalTransparencia = () => {
    const navigate = useNavigate();
    const [projetos, setProjetos] = useState<Projeto[]>([]);
    const [projetosFiltrados, setProjetosFiltrados] = useState<Projeto[]>([]);
    const [referenciaProjeto, setReferenciaProjeto] = useState('');
    const [coordenador, setCoordenador] = useState('');
    const [valorProjeto, setValorProjeto] = useState('');
    const [valorMinimoProjeto, setValorMinimoProjeto] = useState('');
    const [valorMaximoProjeto, setValorMaximoProjeto] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataTermino, setDataTermino] = useState('');

    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/projeto/listar');
                setProjetos(response.data);
                setProjetosFiltrados(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjetos();
    }, []);

    const formatarDataParaComparacao = (dataArray: number[]) => {
        if (Array.isArray(dataArray) && dataArray.length === 3) {
            const [ano, mes, dia] = dataArray.map(num => String(num).padStart(2, '0'));
            return `${ano}-${mes}-${dia}`;
        }
        return '';
    };

    const formatarDataParaVisualizacao = (dataArray: number[]) => {
        if (Array.isArray(dataArray) && dataArray.length === 3) {
            const [ano, mes, dia] = dataArray.map(num => String(num).padStart(2, '0'));
            return `${dia}/${mes}/${ano}`;
        }
        return '';
    };

    const aplicarFiltro = () => {
        const projetosFiltrados = projetos.filter((projeto) => {
            const referenciaProjetoMatch = referenciaProjeto ? projeto.referenciaProjeto.toLowerCase().includes(referenciaProjeto.toLowerCase()) : true;
            const coordenadorMatch = coordenador ? projeto.coordenador.toLowerCase().includes(coordenador.toLowerCase()) : true;
            const valorProjetoMatch = valorProjeto ? projeto.valor == valorProjeto : true;

            const valorMinimoProjetoMatch = valorMinimoProjeto ? projeto.valor >= valorMinimoProjeto : true;
            const valorMaximoProjetoMatch = valorMaximoProjeto ? projeto.valor <= valorMaximoProjeto : true;

            const dataInicioFormatada = formatarDataParaComparacao(projeto.dataInicio);
            const dataTerminoFormatada = formatarDataParaComparacao(projeto.dataTermino);

            const dataInicioFiltro = dataInicio.split('/').reverse().join('-');
            const dataTerminoFiltro = dataTermino.split('/').reverse().join('-');

            const dataInicioMatch = dataInicio ? dataInicioFormatada >= dataInicioFiltro : true;
            const dataTerminoMatch = dataTermino ? dataTerminoFormatada <= dataTerminoFiltro : true;

            return referenciaProjetoMatch && coordenadorMatch && valorProjetoMatch && valorMinimoProjetoMatch && valorMaximoProjetoMatch && dataInicioMatch && dataTerminoMatch;
        });

        setProjetosFiltrados(projetosFiltrados);
    };

    return (
        <div className="container-principal">
            <Sidebar />
            <div className="container-texto">
                <h1>Fundação de Apoio à Pesquisa de Pós-Graduandos (FAPG)</h1>
                <p>A Fundação vem com o objetivo de trazer transformações importantes para o meio acadêmico, e busca conseguir isso com a obstinação dos seus dirigentes <br /> e funcionários no sentido de torná-la sempre mais ágil e precisa.</p>
                <br />
                <div className="filtros">
                    <form onSubmit={(e) => { e.preventDefault(); aplicarFiltro(); }}>
                        <input
                            type="text"
                            placeholder="Referência do projeto"
                            value={referenciaProjeto}
                            onChange={(e) => setReferenciaProjeto(e.target.value)}
                            className="input-filtrar-projetos"
                        />
                        <input
                            type="text"
                            placeholder="Coordenador"
                            value={coordenador}
                            onChange={(e) => setCoordenador(e.target.value)}
                            className="input-filtrar-projetos"
                        />
                        <input
                            type="text"
                            placeholder="Valor do projeto"
                            value={valorProjeto}
                            onChange={(e) => setValorProjeto(e.target.value)}
                            className="input-filtrar-projetos"
                        />
                        <input
                            type="text"
                            placeholder="Valor mínimo"
                            value={valorMinimoProjeto}
                            onChange={(e) => setValorMinimoProjeto(e.target.value)}
                            className="input-filtrar-projetos"
                        />
                        <input
                            type="text"
                            placeholder="Valor máximo"
                            value={valorMaximoProjeto}
                            onChange={(e) => setValorMaximoProjeto(e.target.value)}
                            className="input-filtrar-projetos"
                        />
                        <input
                            type="date"
                            placeholder="Data de início"
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                            className="input-filtrar-projetos"
                        />
                        <input
                            type="date"
                            placeholder="Data de término"
                            value={dataTermino}
                            onChange={(e) => setDataTermino(e.target.value)}
                            className="input-filtrar-projetos"
                        />
                        <button type="submit" className="botao-filtrar-projetos">Aplicar Filtros</button>
                    </form>
                </div>
                <br />
                {projetosFiltrados.length > 0 ? (
                    <>
                        <p>Abaixo estão todos os projetos desenvolvidos.</p>
                        <br />
                        <div className="container-projetos-externo">
                            <div>
                                {projetosFiltrados.map((projeto) => (
                                    <div className="container-projeto" key={projeto.id}>
                                        <div className="itens-esquerda">
                                            <p><strong>Referência do projeto:</strong> {projeto.referenciaProjeto}</p>
                                            <p><strong>Coordenador:</strong> {projeto.coordenador}</p>
                                            <p><strong>Valor:</strong> R$:{projeto.valor}</p>
                                        </div>
                                        <div className="itens-meio">
                                            <p><strong>Início:</strong> {formatarDataParaVisualizacao(projeto.dataInicio)}</p>
                                            <p><strong>Término:</strong> {formatarDataParaVisualizacao(projeto.dataTermino)}</p>
                                        </div>
                                        <div className="itens-direita cursor-pointer" onClick={() => navigate(`/projeto/${projeto.id}`, { state: projeto })}>
                                            <i className="bi bi-file-earmark-text"></i>
                                            <p><strong>Detalhes</strong></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No momento ainda não há projetos.</p>
                )}
            </div>
        </div>
    );
};

export default PortalTransparencia;
