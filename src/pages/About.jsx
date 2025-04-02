import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import imageSrcTravel from "../photos/Greece.jpg";
import imageSrcFood from "../photos/Cooking.jpg";

function About() {
  return (
    <div>
      <Header/>
      <main className="main-content-2">
    <h2>Welcome To My Personal Page!</h2>
    <p className="header-p">
      Some of my passions include fitness, cooking, and traveling
    </p>
    <section className="section-content">
      <h3>Fitness</h3>
      <hr />
      <div>
        <img
          src="../img/Fitness Photo.jpg"
          alt="Person doing Yoga"
          width="155"
        />
        <p>
         In my free time I enjoy going to the gym and workout classes with friends. When the weather is nice I enjoy hiking and taking my dog for long walks. 
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo delectus, ab quas fugiat, nisi accusantium suscipit quae
          dolorem eum unde aliquam, nulla doloribus atque at dolor iure
          voluptatem eaque.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti explicabo delectus, ab quas fugiat, nisi accusantium
          suscipit quae dolorem eum unde aliquam, nulla doloribus atque at
          dolor iure voluptatem eaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo delectus, ab quas fugiat, nisi accusantium suscipit quae
          dolorem eum unde aliquam, nulla doloribus atque at dolor iure
          voluptatem eaque.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti explicabo delectus, ab quas fugiat, nisi accusantium
          suscipit quae dolorem eum unde aliquam, nulla doloribus atque at
          dolor iure voluptatem eaque.
        </p>
      </div>
    </section>
    <section className="section-content">
      <h3>Cooking</h3>
      <hr />
      <div>
      <img src={imageSrcFood} alt ="Selina Mena" width="300"/>
        <p>
          I love to cook and try new recipes. I am always on pinterest looking for new recipes or ways to elevate classic recipes. 
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo delectus, ab quas fugiat, nisi accusantium suscipit quae
          dolorem eum unde aliquam, nulla doloribus atque at dolor iure
          voluptatem eaque.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti explicabo delectus, ab quas fugiat, nisi accusantium
          suscipit quae dolorem eum unde aliquam, nulla doloribus atque at
          dolor iure voluptatem eaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo delectus, ab quas fugiat, nisi accusantium suscipit quae
          dolorem eum unde aliquam, nulla doloribus atque at dolor iure
          voluptatem eaque.
        </p>
      </div>
    </section>
    <section className="section-content">
      <h3>Traveling</h3>
      <hr />
      <div>
        <img src={imageSrcTravel} alt ="Selina Mena" width="300"/>
        <p>
        In my spare time, I love exploring the globe and uncovering new destinations. I find immense joy in immersing myself in diverse cultures, savoring authentic cuisines, and embracing local traditions. So far, I've had the privilege of visiting 13 countries, and I'm excited to discover many more along the way.
        </p>
        <p>
          
        </p>
        <p>
          
        </p>
      </div>
    </section>
  </main>
  {/* <Footer/> */}
  </div>
  )
}

export default About