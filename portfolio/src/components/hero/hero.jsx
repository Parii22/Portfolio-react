import "./hero.css";
import FilmStrip from "../filmStrip/filmStrip";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <div className="tape tape-1"></div>
          <div className="tape tape-2"></div>

          <FilmStrip />
        </div>

        <div className="hero-right">
          <h1>
            PARI
            <br />
            GOTHI
          </h1>

          <h2>
            React Developer
            <br />
            Creative Problem Solver
          </h2>

          <p>
            Building modern web experiences with React,
            JavaScript, Redux and clean UI design.
          </p>

          <div className="hero-buttons">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Resume</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;