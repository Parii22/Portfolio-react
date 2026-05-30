import { useEffect, useState } from "react";
import "./experience.css";

function Experience() {

  const [experience, setExperience] =
    useState([]);

  useEffect(() => {
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <section className="experience">

      <div className="container">

        <h2 className="section-title">
          Experience
        </h2>

        <div className="experience-grid">

          {experience.map((item, index) => (
            <div
              className="experience-card"
              key={index}
            >
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;