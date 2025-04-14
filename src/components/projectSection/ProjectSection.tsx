import {
  ProjectWrepper,
  ProjectName,
  PictureProject,
  ProjectFrame,
  ProjectText,
  ProjectTextFrame,
  ProjectTitle,
} from "./styles";
import { CenterContentOnScreen } from "../CenterContentOnScreen";
import image1 from "/img/projetoArq.png";
import image2 from "/img/projetoProd.png";
import image3 from "/img/projetoTemp.png";
import LikeButton from "../like/LikeButton";

const ProjectSection = () => {
  return (
    <CenterContentOnScreen>
      <ProjectWrepper>
        <ProjectName>Projetos</ProjectName>
        <ProjectFrame>
          <PictureProject src={image1} alt="" />
          <ProjectTextFrame>
            <ProjectTitle>Projeto De Arquitetura</ProjectTitle>
            <ProjectText>
              Nós realizamos desde 2002 projetos e gerenciamento de obras.{" "}
              <br /> Com mais de 800 projetos e 2.000.000 de m² construídos,
              tendo como principal proposta transformar em realidade os sonhos
              de seus clientes, criando projetos personalizados, unindo a
              tradição e a modernidade em nossos projetos.
            </ProjectText>
            <LikeButton name={"chave1"} />
          </ProjectTextFrame>
        </ProjectFrame>
        <ProjectFrame>
          <PictureProject src={image2} alt="" />
          <ProjectTextFrame>
            <ProjectTitle>Transformando em produtos digitais</ProjectTitle>
            <ProjectText>
              Para que nossos clientes mantenham altos níveis de qualidade,
              oferecemos serviços de gestão de projetos e análise de negócios
              com nossa equipe especializada em diversos setores.
            </ProjectText>
            <LikeButton name={"chave2"} />
          </ProjectTextFrame>
        </ProjectFrame>
        <ProjectFrame>
          <PictureProject src={image3} alt="" />
          <ProjectTextFrame>
            <ProjectTitle>DncWeather</ProjectTitle>
            <ProjectText>
              Descubra Mais com Precisão: <br /> Previsões do Tempo e endereços em
              tempo real.
            </ProjectText>
            <LikeButton name={"chave3"} />
          </ProjectTextFrame>
        </ProjectFrame>
      </ProjectWrepper>
    </CenterContentOnScreen>
  );
};

export default ProjectSection;
