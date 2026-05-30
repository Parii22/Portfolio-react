import { useEffect, useState } from "react";
import "./skills.css";

function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <section className="skills" id="skills">

      <div className="container">

        <h2 className="section-title">
          Skills & Tools
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
            >
              <h3>{skill.name}</h3>

              <span>
                {skill.category}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;