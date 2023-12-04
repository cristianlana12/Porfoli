import  '../styles/contact.css'
import phone from "./img/icons8-phone-50.png";
import linkedin from "./img/icons8-linkedin-50.png";
import email from "./img/icons8-email-50.png";


export const ContactScreen = () => {
  return (
    <div className='content-contact'>
      <div className='content-contact-title'>
        <h1>Contact</h1>
      </div>

      <div className='content-contact-par'>
        <p>
        If you are interested in <b>hiring</b> me, please <b>call</b>, <b>email</b>, or <b>connect</b> and chat with me via LinkedIn!
        </p>
      </div>
    
      <div className='content-contact-info'>
        <section className='content-contact-info-card'>
          <img src={phone} alt="" />
          <p><a href="https://wa.me/+543844504619">+54 9 3844504619</a></p>
        </section> 

        <section className='content-contact-info-card'>
          <img src={email} alt="" />
          <a href="mailto: cristian56cordoba@gmail.com">cristian56cordoba@gmail.com</a>
        </section>

        <section className='content-contact-info-card'>
          <img src={linkedin} alt="" />
          <a href="https://www.linkedin.com/in/cordoba-cristian-federico-160105231/">Cristian Cordoba</a>
        </section>

      </div>
    </div>
  )
}
