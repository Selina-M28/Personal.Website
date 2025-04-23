import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Portfolio() {
  return (
    <div>
      <Header/>
      <main className="main-content-2">
              <h2>My Projects</h2>
              <section className="section-content">
              <div className="capstone-container">

      <div className="capstone-text">
        <h2 className="capstone-title">💡 Capstone Project: <span className="highlight">Shenanigram</span></h2>
        <p className="capstone-description">
          A full-stack social media app where users can securely create, edit, and manage text and image-based posts.
        </p>

        <div className="capstone-section">
          <h3>🔧 Key Features</h3>
          <ul>
            <li>Secure authentication (JWT & Bcrypt)</li>
            <li>Create/edit/delete posts with image uploads</li>
            <li>Personal image library</li>
            <li>Admin content moderation</li>
          </ul>
        </div>

        <div className="capstone-section">
          <h3>🛠 Tech Stack</h3>
          <p>React • Vite • Node.js • Express • PostgreSQL • Tailwind CSS • Multer</p>
        </div>

        <div className="capstone-section">
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
    </div> 
                  </section>
                  <section className="section-content">
                <h3>Puppy Bowl</h3>
                <hr />
                <div>
                  <p>
                 
                  </p>
              
                  
                </div>
              </section>
            </main>
      <Footer/>
      </div>
  )
}

export default Portfolio