import React from "react";
import Header from "../Components/Header";
import imageSrc from "../photos/personal photo.jpg";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main className="main-content-2">
        <h2>Software Engineering Professional</h2>

        <section className="section-content">
          <h3>Passionate, Driven, Hardworking</h3>
          <hr />
          <div className="intro-container">
            <img src={imageSrc} alt="Selina Mena" className="intro-image" />
            <div className="intro-text">
              <p>
                Software Engineer with expertise in front and back end web
                development and 8 years of prior experience in digital
                advertising. Skilled in collaborating with cross-functional
                teams, data-driven decision-making, and adapting quickly to new
                challenges. Passionate about learning and using marketing
                insights to solve technical problems in innovative ways.
              </p>
              <p>
                I'm actively seeking my first opportunity in software
                engineering and am excited to bring my drive, curiosity, and
                adaptability to a dynamic team. While I may not have years of
                experience in tech, I’ve built a strong foundation through
                hands-on projects during an immersive coding bootcamp. I’m quick
                to grasp new concepts, thrive in fast-paced environments, and
                bring a positive, team-first mindset to everything I do. Most
                importantly, I have a deep passion for building, learning, and
                continuously growing in this field. Lets connect!
              </p>
              <p>
                <strong>Languages & Tools:</strong> JavaScript | HTML | CSS |
                PostgreSQL | Express | Node.js | React | Git | REST APIs |
                GitHub | SQL
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
