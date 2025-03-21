import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {


  return (
    <>
      <header className="persistent-header">
        <h1>Selina Mena</h1>
        <nav className="main-nav">
          <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
          
        </nav>
      </header>
      <main className="main-content-2">
        <h2>Former Marketing professional aspiring Software Developer</h2>
        <section className="section-content">
          <h3>Passionate, Driven, Hardworking</h3>
          <hr />
          <div>
            <img src="./img/Personal photo.jpg" alt="Selina Mena" width="300" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ipsum obcaecati quaerat repudiandae atque ullam officia? Nostrum in
              obcaecati, eveniet maxime reprehenderit ut soluta sunt beatae
              dignissimos minus distinctio quod!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              explicabo delectus, ab quas fugiat, nisi accusantium suscipit quae
              dolorem eum unde aliquam, nulla doloribus atque at dolor iure
              voluptatem eaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              explicabo delectus, ab quas fugiat, nisi accusantium suscipit quae
              dolorem eum unde aliquam, nulla doloribus atque at dolor iure
              voluptatem eaque.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
