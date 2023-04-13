import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Music.module.scss'
import heroImg from '@/assets/music_hero.png'
import aboutImg from '@/assets/aboutMusic.jpg'
import logo from '@/assets/logo_music.png'
import { useEffect } from 'react'

export default function Music() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    document.querySelectorAll('.fadeLeft').forEach((el) => observer.observe(el));
    document.querySelectorAll('.fadeRight').forEach((el) => observer.observe(el));
    document.querySelectorAll('.fadeUp').forEach((el) => observer.observe(el));
    document.querySelectorAll('.fadeDown').forEach((el) => observer.observe(el));
    document.querySelectorAll('.fade').forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Head>
        <title>Francisco Oliveira</title>
        <meta name="description" content="Developer. Designer. Musician. Student. More." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_music.png" />
      </Head>
      <main className={styles.main}>
        {/* <header id="header">
          <nav id="nav" className="row fadeUp">
            <a href="#home"><Image src={logo} alt="" className="logo" /></a>
            <ul className="list-items">
              <a href="#aboutme"><li className="list-item fadeRight">About</li></a>
              <a href="#aboutme"><li className="list-item fadeRight">Experience</li></a>
              <a href="#portfolio"><li className="list-item fadeRight">Work</li></a>
              <a href="#contact"><li className="list-item fadeRight">Contact</li></a>
            </ul>


          </nav>
          <div className="open-mobile-nav"><i className="fa-solid fa-bars" id="open-nav"></i></div>
        </header>

        <div className="navigation-mobile">
          <ul className="list-items-mobile">
            <a href="#aboutme"><li className="list-item">About</li></a>
            <a href="#aboutme"><li className="list-item">Experience</li></a>
            <a href="#portfolio"><li className="list-item">Work</li></a>
            <a href="#contact"><li className="list-item">Contact</li></a>
            <div className="close-mobile-nav"><i className="fa-solid fa-xmark" id="close-nav"></i></div>
          </ul>
        </div> */}
        <section id="home" className={styles.home}>
          <div className='container'>
            <div className={styles.heroText + ' fadeUp'}>
              <span>Hi, my name is</span>
              <h1 className={styles.name + " fadeRight"}>Francisco Oliveira</h1>
              <h2 className={styles.name + ' ' + styles.secondP}>Musician. Producer. Composer.</h2>
              <p className={styles.descriptionP + " fadeLeft"}>Welcome to my official website, where you can find unique and engaging sounds that inspire and move people. So take a look around, listen to some of my work, and join me on this musical journey!</p>
              <a href="#aboutme" className="btnMusic fadeLeft">Explore more about me</a>
            </div>
          </div>
        </section>

        <section id="aboutme" className="container fadeUp">
          <h2 className={"section-h2 " + styles.headerLineDecoration}>About Me</h2>
          <div className="row">
            <div className={styles.aboutmeText + " fadeRight"}>
              <p className={styles.aboutmeP}>Greetings, I&apos;m Michael Oliviera, a seasoned producer, musician, and composer. My passion for music has driven me to excel in my craft, and I bring a wealth of experience to every project I undertake.</p>
              <p className={styles.aboutmeP}>As a producer, I&apos;ve honed my skills in crafting beats, manipulating sounds, and producing chart-topping tracks. My unique blend of creativity and technical expertise has allowed me to create music that stands out in a crowded industry.</p>
              <p className={styles.aboutmeP}>As a musician, I&apos;m equally comfortable with writing and performing my own material, as well as lending my talents to others. My musical prowess has been honed over [number] years of experimentation with a variety of genres and styles.</p>
              <p className={styles.aboutmeP}>I approach each project with a dedication to excellence, and my ultimate goal is to create music that moves and inspires others. I invite you to explore my website and experience the power of my music.</p>
            </div>
            <div>
              <Image src={aboutImg} alt="" className={styles.aboutmeImg + ' fadeLeft'} />
            </div>
          </div>
        </section>




        <section id="portfolio">
          <div className="container">
            <h2 className="section-h2 header-line-decoration">My Work</h2>
            <div className="fadeup">
              <p>Welcome to my portfolio section, where I&apos;m excited to share some of my latest musical creations. As a producer, musician, and composer, I take pride in crafting songs that move and inspire listeners.</p>
              <p>In this section, you&apos;ll find a selection of my latest tracks, each with its own unique sound and story. I love exploring different genres and pushing my creative boundaries.</p>
              <p>Thank you for considering my work, and I hope you enjoy the journey.</p>
            </div>
          </div>
        </section>


        <section id="contact" className="container row">
          <div className="contact-text-box fadeRight">
            <h2 className="header-line-decoration">CONTACT</h2>
            <p>Thanks for visiting my website and exploring my music. If you have any questions, comments, or feedback, I would love to hear from you.</p>
            <p>Please feel free to use the contact form below to reach out to me, and I&apos;ll do my best to respond as soon as possible. You can also follow me on social media to stay up-to-date with my latest music and projects.</p>
            <p>I look forward to hearing from you and thank you for your interest in my music.</p>
          </div>
          <div className="contact-form fadeLeft">
            <form action="mailto">
              <h2>CONTACT FORM</h2>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Telephone" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Message" /><br />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>

        <div className="socialFlex fadeUp">
          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=100091631861736" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://instagram.com/franciscooliveira.music" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com/@franciscooliveira_music" target="_blank"><i className="fa-brands fa-youtube"></i></a>
          </div>
          <div className="line"><span></span></div>
        </div>

        <div className="emailFlex fadeUp">
          <a href='mailto:franciscomgomesoliveira@gmail.com' target='_blank'>franciscomgomesoliveira@gmail.com</a>
          <div className="line"><span></span></div>
        </div>

      </main>
    </>
  )
}
