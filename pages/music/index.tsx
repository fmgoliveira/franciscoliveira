import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Music.module.scss'
import aboutImg from '@/assets/aboutMusic.jpg'
import logo from '@/assets/icon_music.png'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import music1 from '@/assets/music1.jpg'
import music3 from '@/assets/music3.jpg'
import music5 from '@/assets/music5.jpg'
import music6 from '@/assets/music6.jpg'
import music9 from '@/assets/music9.jpg'
import music10 from '@/assets/music10.jpg'
import music11 from '@/assets/music11.jpg'
import music12 from '@/assets/music12.jpg'

export default function Music() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [music, setMusic] = useState<{ id: string, name: string, image: string, url: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/music')
      .then((response) => response.json())
      .then((data) => {
        setMusic(data)
      })
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
                <a href="#music"><li className="list-item music fadeRight">My Music</li></a>
                <a href="#contact"><li className="list-item music fadeRight">Contact</li></a>
              </ul>
            </nav>
            <div className="open-mobile-nav" onClick={() => setMenuOpen(true)}><i className="fa-solid fa-bars" id="open-nav"></i></div>
          </div>
        </header>

        <div className="navigation-mobile">
          <ul className={"list-items-mobile" + (menuOpen ? ' active' : '')}>
            <a href="#aboutme"><li className="list-item music">About</li></a>
            <a href="#music"><li className="list-item music">My Music</li></a>
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
              <a href="#aboutme" className="btnMusic fadeRight">Explore more about me</a>
              <a href="#music" className="btnLink fadeLeft">
                <i className="fa-solid fa-music"></i>
                <span>Listen to my music...</span>
              </a>
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

        <div className={styles.photos + ' container'}>
          <Image src={music9} alt="" className={styles.photo + ' fadeUp'} />
          <Image src={music5} alt="" className={styles.photo + ' fadeDown'} />
          <Image src={music1} alt="" className={styles.photo + ' fadeUp'} />
          <Image src={music3} alt="" className={styles.photo + ' fadeDown'} />
        </div>

        <section id="music" className="container fadeUp">
          <div>
            <h2 className={styles.headerLineDecoration}>My Music</h2>
            <div className={styles.portfolioContainer}>
              {
                music.length === 0 &&
                <div className={styles.box + " fadeDown"} onClick={() => window.open('https://open.spotify.com/artist/4yBQABhPKupyNjFAUrQjkh', '_blank')}>
                  <div className={styles.boxImg}>
                    <Image src={logo} className={styles.imgImg} alt="" width={100} height={100} />
                    <div className={styles.boxImgOverlay}>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </div>
                  <div className={styles.boxText}>
                    <p className={styles.boxTextP}>Loading...</p>
                  </div>
                </div>
              }
              {
                music.map((a: any) => (
                  <div className={styles.box + " fadeDown"} key={a.id} onClick={() => window.open(a.url, '_blank')}>
                    <div className={styles.boxImg}>
                      <Image src={a.image} className={styles.imgImg} alt="" width={100} height={100} />
                      <div className={styles.boxImgOverlay}>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </div>
                    </div>
                    <div className={styles.boxText}>
                      <p className={styles.boxTextP}>{a.name}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <div className={'container ' + styles.photos + ' ' + styles.alt}>
          <Image src={music11} alt="" className={styles.photo + ' fadeDown'} />
          <Image src={music6} alt="" className={styles.photo + ' fadeUp'} />
          <Image src={music10} alt="" className={styles.photo + ' fadeDown'} />
          <Image src={music12} alt="" className={styles.photo + ' fadeUp'} />
        </div>

        <section id="contact" className={"container fadeUp " + styles.contact}>
          <span className={styles.span}>What&apos;s next?</span>
          <p className={styles.name}>Get In Touch</p>
          <p className={styles.descriptionP}>Whether you have a question or just want to say hi, I&quot;ll try my best to get back to you!</p>
          <a href="mailto:franciscomgomesoliveira@gmail.com" className={styles.contactBtn + ' btnMusic'}>Say Hello</a>
        </section >

        <div className={styles.copyright}>
          <small>&copy; {new Date().getFullYear()} Francisco Oliveira</small>
        </div>


        <div className="socialFlex fadeUp">
          <div className="socials">
            <a href="https://open.spotify.com/artist/4yBQABhPKupyNjFAUrQjkh" target="_blank"><i className="fa-brands fa-spotify"></i></a>
            <a href="https://youtube.com/@franciscooliveira_music" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://instagram.com/franciscooliveira.music" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100091631861736" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          </div>
          <div className="line"><span></span></div>
        </div>

        <div className="emailFlex fadeUp">
          <a href='mailto:franciscomgomesoliveira@gmail.com' target='_blank'>franciscomgomesoliveira@gmail.com</a>
          <div className="line"><span></span></div>
        </div>

      </main >
    </>
  )
}
