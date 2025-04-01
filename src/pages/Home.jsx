import React from 'react'
import Header from '../Components/Header'
import imageSrc from "../photos/personal photo.jpg"

function Home() {
  return (
    <>
    <Header/>
    <main className="main-content-2">
        <h2>Software Engineering Professional</h2>
        <section className="section-content">
          <h3>Passionate, Driven, Hardworking</h3>
          <hr />
          <div>
            <img src={imageSrc} alt ="Selina Mena" width="200"/>
            <p>
            Software Engineer professional with expertise in front and back end web development. 8 years previous experience in Digital advertising. Strong attention to detail, experience working collaboratively with cross functional teams, and data driven decision making. I have a passion for learning and gaining new skills. I'm excited to combine marketing industry insights with my technical skills to address unique challenges in software development.
            </p>
            <br/>
            <p><b>Languages & Tools: </b> Javascript | HTML | CSS | PostgreSQL | Express | Node.js | React | Git | REST APIs |  Github | SQL</p>
          </div>
        </section>
      </main>
      </>
  )
}

export default Home