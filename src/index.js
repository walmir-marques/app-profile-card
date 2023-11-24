import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="./images/WalmirMarques.jpg" alt="Minha foto" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Walmir Marques Filho</h1>
      <p>
        Me chamo Walmir Marques Filho, sou formado em Meu nome é Walmir Marques
        Filho, sou formado em ciência da computação, trabalhei na área de
        suporte de TI por cerca de 5 anos e após 2 anos morando na Irlanda,
        retornei ao Brasil e iniciei meus estudos na área de Front - End para
        mudança carreira.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="📕" color="green" />
      <Skill skill="CSS" emoji="📗" color="blue" />
      <Skill skill="Javascrip" emoji="📘" color="red" />
      <Skill skill="React" emoji="📚" color="green" />
      <Skill skill="GitHub" emoji="📙" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
