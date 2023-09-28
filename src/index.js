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
    description: `je suis une développeur web junior à la recherche d'un emploi en télétravail
  au sein d'une agence web.J'apprends activement de nouvelles technologies.`,
  };

  return (
    <Card>
      <Avatar photo={info.imgSrc} name="avatar" />
      <CardData>
        <Intro title={info.title} description={info.description} />
        <List>
          {dataSkills.map((skill) => (
            <Skills skillObj={skill} key={skill.skill} />
          ))}
        </List>
      </CardData>
    </Card>
  );
}
function Avatar({ photo, name }) {
  return <img src={photo} className="avatar" alt={name} />;
}
function Intro({ title, description }) {
  return (
    <CardIntro>
      <h1>{title}</h1>
      <p>{description}</p>
    </CardIntro>
  );
}
function Skills({ skillObj }) {
  const level = {
    advanced: "💪",
    intermediate: "👍",
  };

  return (
    <Item style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      {level?.[skillObj?.level] || "👶"}
    </Item>
  );
}
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function CardData({ children }) {
  return <div className="data">{children}</div>;
}
function CardIntro({ children }) {
  return <div>{children}</div>;
}
function List({ children }) {
  return <ul className="skill-list">{children}</ul>;
}
function Item({ children, style }) {
  return (
    <li className="skill" style={style}>
      {children}
    </li>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
