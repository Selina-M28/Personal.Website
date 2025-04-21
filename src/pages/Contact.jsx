import React, {useState} from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "62a5ae28-0362-4d25-8c6c-1d4a201fb65c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Thank you for reaching out! 🎉I've received your message and will get back to you as soon as I can. In the meantime, feel free to explore more of my work or connect with me on LinkedIn. Talk soon!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <>
    <Header />
    <div>
    <section className="form-container">
    <form onSubmit={onSubmit} className="contact-form">
        <div className="form-text-container">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>

      {result && <div className="confirmation">{result}</div>}
    </section>
    
  </div>
    <Footer/>
    </>
)
}

export default Contact