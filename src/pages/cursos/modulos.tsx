import { useParams } from 'react-router-dom';
import { initial_cursos } from './components/cursosDados';

function ModuloPage() {
  const { assinatura, moduloId } = useParams<{ assinatura: string; moduloId: string }>();

  const curso = initial_cursos[assinatura ?? ''];
  const modulo = curso?.find((mod) => mod.id === Number(moduloId));

  if (!modulo) {
    return <div>Módulo não encontrado.</div>;
  }

  console.log(modulo);
  
  return (
    <div>
      <h1>{modulo.template.titulo}</h1>
      <p>{modulo.template.descricao}</p>
      {/* Renderize outras partes do módulo como atividades, introducao, videoAulas etc */}
    </div>
  );
}

export default ModuloPage;