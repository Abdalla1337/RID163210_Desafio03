import {
  BlogFrame,
  BlogName,
  BlogText,
  BlogTitle,
  BlogDiv,
  BlogSubtitle,
  BlogBackground,
  BlogSubtitleSecond,
  SectionSubtitle
} from "./styles";
import { CenterContentOnScreen } from "../CenterContentOnScreen";

const Blog = () => {
  return (
    <div style={{position: "relative"}}>
    <BlogBackground />
      <CenterContentOnScreen>
        <BlogFrame>
          <BlogName>Blog</BlogName>
          <BlogDiv>
            <BlogTitle>Começando do zero com HTML.</BlogTitle>
            <SectionSubtitle>
            <BlogSubtitle>10 Abr 2025</BlogSubtitle>
            <BlogSubtitleSecond>Desenvolvedor</BlogSubtitleSecond>
            </SectionSubtitle>
            <BlogText>
            HTML (HyperText Markup Language) é a linguagem usada para criar páginas da web. Ele estrutura o conteúdo da página com tags. <br />
            Você precisa de um editor de texto (como VS Code, Sublime Text, ou até o Bloco de Notas).
            </BlogText>
          </BlogDiv>

          <BlogDiv>
            <BlogTitle>Como estilizar com CSS.</BlogTitle>
            <SectionSubtitle>
            <BlogSubtitle>10 Abr 2025</BlogSubtitle>
            <BlogSubtitleSecond>Desenvolvedor</BlogSubtitleSecond>
            </SectionSubtitle>
            <BlogText>
            Estilizar com CSS (Cascading Style Sheets) <br /> é a forma padrão de deixar um site bonito! <br /> Com ele, você controla cores, fontes, espaçamentos, <br /> tamanhos, posicionamento de elementos e muito <br /> mais. Quer um resumo rápido de como começar?
            </BlogText>
          </BlogDiv>
        </BlogFrame>
      </CenterContentOnScreen>
      </div>
  );
};

export default Blog;
