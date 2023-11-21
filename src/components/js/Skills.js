import "../css/Skills.css";
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import java from '../images/java.png'
import react from '../images/react.png'
import python from '../images/python.png'
import c from '../images/c.png'
import git from '../images/git.png'
import vscode from '../images/vscode.png'



function Skills() {
  return (
    <>
      <div className="skills">
        <h1>Skills</h1>
        <h3>My skills💡</h3>
        <div class="sk">
          <div class="flex col txt-center">
            <img src={html} alt="html" class="ski"></img>
            <p>HTML 5</p>
          </div>
          <div class="flex col txt-center">
            <img src={css} alt="css" class="ski"></img>
            <p>CSS 3</p>
          </div>
          <div class="flex col txt-center">
            <img src={js} alt="js" class="ski"></img>
            <p>JavaScript</p>
          </div>
          <div class="flex col txt-center">
            <img src={react} alt="react" class="ski"></img>
            <p>React js</p>
          </div>
          <div class="flex col txt-center">
            <img src={java} alt="java" class="ski"></img>
            <p>Java</p>
          </div>
          <div class="flex col txt-center">
            <img src={python} alt="python" class="ski"></img>
            <p>Python</p>
          </div>
          <div class="flex col txt-center">
            <img src={c} alt="c" class="ski"></img>
            <p>C</p>
          </div>
          <div class="flex col txt-center">
            <img src={git} alt="git" class="ski"></img>
            <p>Git</p>
          </div>
          <div class="flex col txt-center">
            <img src={vscode} alt="vscode" class="ski"></img>
            <p>Visual Studio</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;