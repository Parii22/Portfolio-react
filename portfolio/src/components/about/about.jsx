import "./about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-content">

          <div className="paper-card">
            <h2>About Me</h2>

            <p>
              I'm a Frontend Developer passionate about
              creating modern and interactive web
              experiences using React.js and JavaScript.
            </p>

            <p>
              I enjoy building projects, learning new
              technologies, solving problems and
              continuously improving my skills.
            </p>

            <div className="skills-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C++</span>
              <span>Git</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;