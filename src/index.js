import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const dataSkills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  const info = {
    imgSrc: "ahmad.jpg",
    title: "Ahmad Almasri",
    dscription: `je suis une développeur web junior à la recherche d'un emploi en télétravail
  au sein d'une agence web.J'apprends activement de nouvelles technologies.`,
  };

  return (
    <div className="card">
      <Avatar photo={info.imgSrc} name="avatar" />
      <div className="data">
        <Intro title={info.title} discription={info.dscription} />
        {dataSkills.map((skill) => (
          <Skills skillObj={skill} key={skill.skill} />
        ))}
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img src={props.photo} className="avatar" alt={props.name} />;
}
function Intro(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.discription}</p>
    </div>
  );
}
function Skills({ skillObj }) {
  const level = {
    advanced: "💪",
    intermediate: "👍",
  };

  return (
    <div>
      <ul className="skill-list">
        <li className="skill" style={{ backgroundColor: skillObj.color }}>
          {skillObj.skill}
          {level?.[skillObj?.level] || "👶"}
        </li>
      </ul>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
