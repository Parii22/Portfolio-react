import { useEffect, useState } from "react";
import "./journey.css";

function Journey() {

  const [journey, setJourney] = useState([]);

  useEffect(() => {
    fetch("/data/journey.json")
      .then((res) => res.json())
      .then((data) => setJourney(data));
  }, []);

  return (
    <section className="journey" id="journey">

      <div className="container">

        <h2 className="section-title">
          My Journey
        </h2>

        <div className="timeline">

          {journey.map((item, index) => (
            <div
              className="timeline-card"
              key={index}
            >
              <span>{item.year}</span>
              <h3>{item.title}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;