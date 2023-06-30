import AboutMe from "../components/Home/AboutMe/AboutMe";
import Contacts from "../components/Home/Contacts/Contacts";
import Main from "../components/Home/Main/Main";
import Project from "../components/Home/Projects/Projects";
import Skills from "../components/Home/Skills/Skills";

function Home() {
  return (
    <div className="main">
      <Main />
      <Project />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}
export default Home;
