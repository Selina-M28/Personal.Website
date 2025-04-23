import React from 'react';
import Header from '../Components/Header';
import imageSrc from '../photos/personal photo.jpg';
import Footer from '../Components/Footer';

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
            <img
              src={imageSrc}
              alt="Selina Mena"
              className="intro-image"
            />
            <div className="intro-text">
              <p>
                Software Engineer with expertise in front and back end web development and 8 years of prior experience in digital advertising. Skilled in collaborating with cross-functional teams, data-driven decision-making, and adapting quickly to new challenges. Passionate about learning and using marketing insights to solve technical problems in innovative ways.
              </p>
              <p>
                <strong>Languages & Tools:</strong> JavaScript | HTML | CSS | PostgreSQL | Express | Node.js | React | Git | REST APIs | GitHub | SQL
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
