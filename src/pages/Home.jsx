import React from "react";
import Header from "../Components/Header";
import imageSrc from "../photos/Personal_photo.jpg";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main className="main-content-2">
        <h2>Marketing & Technology Hybrid Professional</h2>

        <section className="section-content">
          <h3>Strategic, Creative, Tech-Savvy</h3>
          <hr />
          <div className="intro-container">
            <img src={imageSrc} alt="Selina Mena" className="intro-image" />
            <div className="intro-text">
              <p>
              Marketing professional with 8 years of experience in digital advertising, campaign execution, and cross-platform strategy now equipped with modern technical skills in full-stack web development. I specialize in translating complex ideas into compelling narratives and building bridges between technical teams and business goals.
              </p>
              <p>
              After completing an immersive software engineering bootcamp, I bring a unique blend of marketing intuition and technical fluency to roles at the intersection of product, marketing, and tech. Whether it's driving go-to-market strategies, optimizing digital operations, or supporting product adoption, I’m energized by solving problems creatively and collaboratively.
              </p> I’m currently exploring opportunities in product marketing, digital marketing operations, or solutions engineering where I can use both my marketing background and technical skills to deliver value. Let’s connect and create something impactful!
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
