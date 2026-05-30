import "./contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="postcard">

          <h2>Let's Build Something Amazing Together.</h2>

          <p>
            Interested in working together, discussing a
            project, or just saying hello?
          </p>

          <div className="contact-info">

            <div className="contact-card">
              <h3>Email</h3>
              <a href="mailto:parigothi22@gmail.com">
                parigothi22@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <h3>GitHub</h3>
              <a
                href="https://https://github.com/Parii22/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>

            <div className="contact-card">
              <h3>LinkedIn</h3>
              <a
                href="https://https://github.com/Parii22/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="contact-card">
              <h3>Location</h3>
              <p>Mumbai, India</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;