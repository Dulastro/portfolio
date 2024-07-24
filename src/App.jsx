import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Header
        mySkills={"My Skills"}
        about={"About"}
        contact={"Contact"}
        projects={"Projects"}
        hrefLinkedin={
          "https://www.linkedin.com/in/pedro-dulastro-e-silva-219715235/"
        }
        hrefGit={"https://github.com/Dulastro"}
        hrefInstagran={"https://www.instagram.com/pedrodulastro"}
      />
      <Main
        eu={"I'M"}
        name={"Pedro Dulastro"}
        profissao={"Front-end web development"}
        altAvatar={"Avatar"}
        id={"home"}
        srcAvatar={
          "https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775234_960_720.png"
        }
      />
      <About
        about={"About"}
        aboutDescription={
          "Sou Pedro Dulastro, um desenvolvedor web de 25 anos, e atualmente curso Análise e Desenvolvimento de Sistemas. Tenho experiência em criação e manutenção de sites e aplicativos web. Tenho um forte entendimento das tecnologias de front-end, como HTML, CSS, e JavaScript, e sou especializado em frameworks modernos, como React. Meu portfólio inclui projetos diversos que demonstram minha habilidade em design responsivo, acessibilidade e otimização de desempenho. Tenho um compromisso com a melhoria contínua e a aprendizagem, sempre buscando novas técnicas e ferramentas para aperfeiçoar meu trabalho. Quando não estou codificando, gosto de explorar novos conceitos em tecnologia e colaborar em projetos open-source. Estou sempre em busca de desafios que possam expandir meus conhecimentos e contribuir de maneira significativa para a comunidade de desenvolvimento."
        }
        id={"about"}
      />
      <Skills titleSection={"My Skills"} id={"mySkills"} />
      <Projects title={"Projects"} id={"projects"} />
      <Contact title={"Contact"} id={"contact"} />
      <Footer />
    </div>
  );
}

export default App;
