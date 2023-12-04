import '../styles/about.css'
import yoAbout from "./img/yo-about.jpg";

export const AboutScrees = () => {
  return (
    <>
        <section className='content-about'>
          <h1 className='content-about-h1'>About Me</h1>
          <img src={yoAbout} alt="Yo" className='content-about-info-yo' />
          <div className='content-about-info'>
            <h2 className='content-about-info-h2'>An enthusiast Web Developer</h2>
            <p>
              I am a front-end developer. I am on a quest for a horizon where I can contribute with my knowledge and continue learning and growing. I am a student of Computer Engineering and a teacher in the introductory area of the Faculty of Exact and Technological Sciences at the National University of Tucuman. Self-taught and proactive.
            </p>
          </div>
        </section>
    </>
  )
}
