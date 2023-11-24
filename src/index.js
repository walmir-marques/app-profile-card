import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "beginner",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

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
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶🏻"}
        {skillObj.level === "intermediate" && "👶🏻"}
        {skillObj.level === "advanced" && "👶🏻"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
