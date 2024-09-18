import { Sidebar } from '../components/Sidebar/Sidebar';
import '../styles/Projetos.css';
import { useNavigate } from 'react-router-dom';

const Projetos = () => {
  const navigate = useNavigate();

  return (
    <div className="container-principal">
      <Sidebar />
            <div className="container-projetos-externo">
                <div className="container-projeto">
                    <div className="itens-esquerda">
                        <p><strong>Refêrencia do projeto:</strong> Capacitação na Modalidade Online em “Operações em Processos Siderúrgicos”</p>
                        <p><strong>Coordenador:</strong> João Maurício Godoy</p>
                        <p><strong>Valor:</strong> R$12345,90</p>
                    </div>
                    <div className="itens-meio">
                        <p><strong>Início:</strong> dd/mm/aaaa</p>
                        <p><strong>Término:</strong> dd/mm/aaaa</p>
                    </div>
                    <div className="itens-direita">
                        <i className="bi bi-file-earmark-text"></i>
                        <p><strong>Detalhes</strong></p>
                    </div>
                </div>

                <div className="container-projeto">
                    <div className="itens-esquerda">
                        <p><strong>Refêrencia do projeto:</strong> Capacitação na Modalidade Online em “Operações em Processos Siderúrgicos”</p>
                        <p><strong>Coordenador:</strong> João Maurício Godoy</p>
                        <p><strong>Valor:</strong> R$12345,90</p>
                    </div>
                    <div className="itens-meio">
                        <p><strong>Início:</strong> dd/mm/aaaa</p>
                        <p><strong>Término:</strong> dd/mm/aaaa</p>
                    </div>
                    <div className="itens-direita">
                        <i className="bi bi-file-earmark-text"></i>
                        <p><strong>Detalhes</strong></p>
                    </div>
                </div>

                <div className="container-projeto">
                    <div className="itens-esquerda">
                        <p><strong>Refêrencia do projeto:</strong> Capacitação na Modalidade Online em “Operações em Processos Siderúrgicos”</p>
                        <p><strong>Coordenador:</strong> João Maurício Godoy</p>
                        <p><strong>Valor:</strong> R$12345,90</p>
                    </div>
                    <div className="itens-meio">
                        <p><strong>Início:</strong> dd/mm/aaaa</p>
                        <p><strong>Término:</strong> dd/mm/aaaa</p>
                    </div>
                    <div className="itens-direita">
                        <i className="bi bi-file-earmark-text"></i>
                        <p><strong>Detalhes</strong></p>
                    </div>
                </div>
            </div>
        <div className="conteudo-projetos">
          <div className="sem-projetos">
            <p>Ainda não há projetos cadastrados</p>
            <button
              onClick={() => navigate('/adm/cadastrar-projeto')}
              className="botao-novo-projeto">
              Novo projeto
            </button>
          </div>
        </div>
    </div>
  );
};

export default Projetos;