import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Portfolio() {
  return (
    <div>
      <Header />
      <main className="main-content-2">
        <h2>My Projects</h2>

        <section className="section-content">
          <h2>
            <strong>Promise & Paper</strong>
          </h2>
          <p>
            A work-in-progress full-stack wedding guest management application
            designed to simplify event planning. It allows couples to manage
            their guest list, track RSVPs, organize meal preferences, and keep
            notes—all in one central place.
          </p>

          <div>
            <h3>✨ Key Features (WIP)</h3>
            <ul>
              <li>Add, edit, and delete guests</li>
              <li>Track RSVP status (Accepted, Declined, Pending)</li>
              <li>Record meal preferences and special notes</li>
              <li>View full guest list in a clean, organized table</li>
              <li>Responsive design for desktop and mobile use</li>
            </ul>
          </div>

          <div>
            <h3>🛠 Tech Stack</h3>
            <p>Frontend: React, TailwindCSS</p>
            <p>Backend: Node.js, Express</p>
            <p>Database: PostgreSQL</p>
          </div>

          <div>
            <h3>🎯 Project Goals</h3>
            <ul>
              <li>
                Practice full-stack development with real-world CRUD operations
              </li>
              <li>Improve database design and API integration skills</li>
              <li>
                Build a personal project that reflects creativity and real-life
                use cases
              </li>
              <li>
                Deliver a responsive, user-friendly experience with a polished
                UI
              </li>
            </ul>
            <a
              href="https://github.com/Selina-M28/WeddingWebsite"
              className="link-button"
            >
              🔗 Github link to WIP project
            </a>
          </div>
        </section>
        <section className="section-content">
          <div>
            <h2>
              Capstone Project: <span className="highlight">Shenanigram</span>
            </h2>
            <p>
              A full-stack social media app where users can securely create,
              edit, and manage text and image-based posts.
            </p>

            <div>
              <h3>🔧 Key Features</h3>
              <ul>
                <li>Secure authentication (JWT & Bcrypt)</li>
                <li>Create/edit/delete posts with image uploads</li>
                <li>Personal image library</li>
                <li>Admin content moderation</li>
              </ul>
            </div>

            <div>
              <h3>🛠 Tech Stack</h3>
              <p>
                React • Vite • Node.js • Express • PostgreSQL • Tailwind CSS •
                Multer
              </p>
            </div>

            <div>
              <h3>👥 Team</h3>
              <p>Darin • Kevin • Lorenzo • Selina • Tristan</p>
            </div>

            <a
              href="https://shenanigram.netlify.app/"
              className="capstone-button"
            >
              🔗 Visit Live Site
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
