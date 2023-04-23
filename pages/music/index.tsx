import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Music.module.scss'
import heroImg from '@/assets/music_hero.png'
import aboutImg from '@/assets/aboutMusic.jpg'
import logo from '@/assets/icon_music.png'
import { useEffect, useState } from 'react'

export default function Music() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <header id="header">
          <div>
            <nav id="nav" className="row fadeUp">
              <a href="#home" className='logo-container'><Image src={logo} alt="" className="logo" /></a>
              <ul className="list-items">
                <a href="#aboutme"><li className="list-item music fadeRight">About</li></a>
                <a href="#aboutme"><li className="list-item music fadeRight">Experience</li></a>
                <a href="#portfolio"><li className="list-item music fadeRight">Work</li></a>
                <a href="#contact"><li className="list-item music fadeRight">Contact</li></a>
              </ul>
            </nav>
            <div className="open-mobile-nav" onClick={() => setMenuOpen(true)}><i className="fa-solid fa-bars" id="open-nav"></i></div>
          </div>
        </header>

        <div className="navigation-mobile">
          <ul className={"list-items-mobile" + (menuOpen ? ' active' : '')}>
            <a href="#aboutme"><li className="list-item music">About</li></a>
            <a href="#aboutme"><li className="list-item music">Experience</li></a>
            <a href="#portfolio"><li className="list-item music">Work</li></a>
            <a href="#contact"><li className="list-item music">Contact</li></a>
            <div className="close-mobile-nav" onClick={() => setMenuOpen(false)}><i className="fa-solid fa-xmark" id="close-nav"></i></div>
          </ul>
        </div>

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
          <div>
            <h2 className={"section-h2 " + styles.headerLineDecoration}>About Me</h2>
            <div className="row">
              <div className={styles.aboutmeText + " fadeRight"}>
                <p className={styles.aboutmeP}>Francisco Oliveira is a musician and composer with a passion for creating music that captivates and inspires. With years of experience playing the trumpet (since he was 7) and piano, Francisco has developed a unique style that blends classical and contemporary influences.</p>
                <p className={styles.aboutmeP}>As a teenager, Francisco began exploring his own compositional voice, starting with pop music and instrumental tracks that showcased his impressive technical ability and melodic sensibility. It wasn&apos;t long before he found his true passion in writing music for band and orchestra, crafting complex and emotionally rich scores that have drawn comparisons to the greatest film composers of all time.</p>
                <p className={styles.aboutmeP}>Francisco&apos;s music has sweeping melodies, lush harmonies, and dynamic shifts in tone and mood that transport listeners to another world. He draws inspiration from a wide range of sources. The result is a sound that is uniquely his own, a sound that moves and inspires others.</p>
              </div>
              <div>
                <Image src={aboutImg} alt="" className={styles.aboutmeImg + ' fadeLeft'} />
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="container fadeUp">
          <div>
            <h2 className={styles.headerLineDecoration}>My Work</h2>
            <div className="fadeUp">
              <p>Welcome to my portfolio section, where I&apos;m excited to share some of my latest musical creations. As a producer, musician, and composer, I take pride in crafting songs that move and inspire listeners.</p>
              <p>In this section, you&apos;ll find a selection of my latest tracks, each with its own unique sound and story. I love exploring different genres and pushing my creative boundaries.</p>
            </div>
            <div className="portfoilo-container">
              <div className={styles.portfolioBox + " row"}>
                <div className={styles.portfolioBox + " fadeRight"}>
                  <span>Fetaured Project</span>
                  <p className={styles.projectName}>E-commerce</p>
                  <div className={styles.projectDescriptionBox}>
                    This e-commerce website was designed and developed by me using HTML, CSS, and JavaScript.The website is optimized for all devices and screen sizes, and it&apos;s easy to navigate through.
                  </div>
                  <div className={styles.techOfProjects}>
                    <p>VS Code</p>
                    <p>JavaScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                  </div>
                  <div className={'row ' + styles.linkOfProjects}>
                    <a href="https://github.com/LedBajrami/boshop" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://boshopp.netlify.app/" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <div className={styles.projectImg + " fadeLeft"}>
                  {/* <img src="img/boshop.jpg" alt=""> */}
                  <div className={styles.projectImgOverlay}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container fadeUp">
          <span className="span">What&apos;s next?</span>
          <p className="home-page-name">Get In Touch</p>
          <p className="description-p">I&quot;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&quot;ll try my best to get back to you!</p>
          <a href="mailto:ledibajrami8@gmail.com"><button className="resume-btn contact-btn">Say Hello</button></a>
          <p className="builtby-p">Designed & Built by Led Bajrami</p>
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
