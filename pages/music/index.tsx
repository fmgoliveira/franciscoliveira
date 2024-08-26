import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Music.module.scss";
import aboutImg from "@/assets/aboutMusic.jpg";
import logo from "@/assets/icon_music_pad.png";
import { useEffect, useState } from "react";

import music1 from "@/assets/music1.jpg";
import music3 from "@/assets/music3.jpg";
import music5 from "@/assets/music5.jpg";
import music6 from "@/assets/music6.jpg";
import music9 from "@/assets/music9.jpg";
import music10 from "@/assets/music10.jpg";
import music11 from "@/assets/music11.jpg";
import music12 from "@/assets/music12.jpg";

export default function Music() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [music, setMusic] = useState<
    { id: string; name: string; image: string; url: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/music")
      .then((response) => response.json())
      .then((data) => {
        setMusic(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    document
      .querySelectorAll(".fadeLeft")
      .forEach((el) => observer.observe(el));
    document
      .querySelectorAll(".fadeRight")
      .forEach((el) => observer.observe(el));
    document.querySelectorAll(".fadeUp").forEach((el) => observer.observe(el));
    document
      .querySelectorAll(".fadeDown")
      .forEach((el) => observer.observe(el));
    document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
  }, [music]);

  return (
    <>
      <Head>
        <title>Francisco Oliveira</title>
        <meta name="description" content="Musician. Producer. Composer." />
        <link rel="icon" href="/favicon_music.png" />

        <meta property="og:url" content="https://franciscoliveira.com/music" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Francisco Oliveira" />
        <meta
          property="og:description"
          content="Musician. Producer. Composer."
        />
        <meta property="og:image" content="/favicon_music.png" />
        <meta name="theme-color" content="#e8a93c" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="franciscoliveira.com/music" />
        <meta
          property="twitter:url"
          content="https://franciscoliveira.com/music"
        />
        <meta name="twitter:title" content="Francisco Oliveira" />
        <meta
          name="twitter:description"
          content="Musician. Producer. Composer."
        />
        <meta name="twitter:image" content="/favicon_music.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <header id="header">
          <div>
            <nav id="nav" className="row fadeUp">
              <a href="#home" className="logo-container">
                <Image src={logo} alt="" className="logo" />
              </a>
              <ul className="list-items">
                <a href="#aboutme">
                  <li className="list-item music fadeRight">About</li>
                </a>
                <a href="#music">
                  <li className="list-item music fadeRight">My Music</li>
                </a>
                <a href="#contact">
                  <li className="list-item music fadeRight">Contact</li>
                </a>
              </ul>
            </nav>
            <div className="open-mobile-nav" onClick={() => setMenuOpen(true)}>
              <i className="fa-solid fa-bars" id="open-nav"></i>
            </div>
          </div>
        </header>

        <div className="navigation-mobile">
          <ul className={"list-items-mobile" + (menuOpen ? " active" : "")}>
            <a href="#aboutme">
              <li className="list-item music">About</li>
            </a>
            <a href="#music">
              <li className="list-item music">My Music</li>
            </a>
            <a href="#contact">
              <li className="list-item music">Contact</li>
            </a>
            <div
              className="close-mobile-nav"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-xmark" id="close-nav"></i>
            </div>
          </ul>
        </div>

        <section id="home" className={styles.home}>
          <div className="container">
            <div className={styles.heroText + " fadeUp"}>
              <span>Hi, my name is</span>
              <h1 className={styles.name + " fadeRight"}>Francisco Oliveira</h1>
              <h2 className={styles.name + " " + styles.secondP}>
                Musician. Producer. Composer.
              </h2>
              <p className={styles.descriptionP + " fadeLeft"}>
                Welcome to my website, where you can find all about me. So take
                a look around, listen to some of my work, and join me on this
                musical journey!
              </p>
              <a href="#aboutme" className="btnMusic fadeRight">
                Explore more about me
              </a>
              <a href="#music" className="btnLink fadeLeft">
                <i className="fa-solid fa-music"></i>
                <span>Listen to my music...</span>
              </a>
            </div>
          </div>
        </section>

        <section id="aboutme" className="container fadeUp">
          <div>
            <h2 className={"section-h2 " + styles.headerLineDecoration}>
              About Me
            </h2>
            <div className={styles.aboutRow}>
              <div className={styles.aboutmeText + " fadeRight"}>
                <p className={styles.aboutmeP}>
                  With no musical background in the family, I started, just like
                  many others, in a philharmonic band, playing what is still
                  today my favourite instrument - the trumpet.
                </p>
                <p className={styles.aboutmeP}>
                  It was probably in this environment that I got the inspiration
                  to start composing... First listening, then reading, sometimes
                  playing (😅), I ended up trying to write what others could
                  also write. It wasn&apos;t easy to start - not even close -
                  and sometimes it&apos;s hard to continue. I started by
                  arranging pieces by other composers, until I found my own
                  music.
                </p>
                <p className={styles.aboutmeP}>
                  Today I still play the trumpet and have learnt to noodle at
                  the piano to make my work easier. Most of my music is
                  soundtracks and orchestral music, but in between are
                  compositions for concert bands and classical music (both
                  arrangements and original compositions).
                </p>
                <p className={styles.aboutmeP}>
                  I am not planning to stop now and, whether playing or
                  composing, finding the right motivation, I know I will stay
                  connected to this wonderful world that is the world of music.
                </p>
                <p className={styles.aboutmeP}>
                  <em>And what about you? Why don&apos;t you try it too?</em>
                </p>
              </div>
              <div>
                <div className={styles.aboutMeImgContainer}>
                  <Image
                    src={aboutImg}
                    alt=""
                    className={styles.aboutmeImg + " fadeLeft"}
                  />
                  <div className={styles.back}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.photos + " container"}>
          <Image src={music9} alt="" className={styles.photo + " fadeUp"} />
          <Image src={music5} alt="" className={styles.photo + " fadeDown"} />
          <Image src={music1} alt="" className={styles.photo + " fadeUp"} />
          <Image src={music3} alt="" className={styles.photo + " fadeDown"} />
        </div>

        <section id="music" className="container fadeUp">
          <div>
            <h2 className={styles.headerLineDecoration}>My Music</h2>
            <div className={styles.portfolioContainer}>
              {
                // (loading || music.length === 0) && <p className='fadeDown'>Loading...</p>
              }
              {!loading &&
                music.map((a: any, i) => (
                  <div
                    className={styles.box + " fadeDown"}
                    key={`music-${i}`}
                    onClick={() => window.open(a.url, "_blank")}
                  >
                    <div
                      className={styles.boxImg}
                      style={{ backgroundImage: `url(${a.image})` }}
                    >
                      <div className={styles.boxImgOverlay}>
                        <i className="fa-solid fa-play"></i>
                      </div>
                    </div>
                    <div className={styles.boxText}>
                      <p className={styles.boxTextP}>{a.name}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <div className={"container " + styles.photos + " " + styles.alt}>
          <Image src={music11} alt="" className={styles.photo + " fadeDown"} />
          <Image src={music6} alt="" className={styles.photo + " fadeUp"} />
          <Image src={music10} alt="" className={styles.photo + " fadeDown"} />
          <Image src={music12} alt="" className={styles.photo + " fadeUp"} />
        </div>

        <section className={styles.socials}>
          <span></span>
          <div>
            <a href="https://foliv.my.to/spotify" target="_blank">
              <i className="fa-brands fa-spotify"></i>
            </a>
            <a href="https://foliv.my.to/itunes" target="_blank">
              <i className="fa-brands fa-itunes"></i>
            </a>
            <a href="https://foliv.my.to/deezer" target="_blank">
              <i className="fa-brands fa-deezer"></i>
            </a>
            <a href="https://foliv.my.to/youtube" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://foliv.my.to/insta-music" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://foliv.my.to/fb-music" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <span></span>
        </section>

        <section id="contact" className={"container fadeUp " + styles.contact}>
          <span className={styles.span}>What&apos;s next?</span>
          <p className={styles.name}>Get In Touch</p>
          <p className={styles.descriptionP}>
            Whether you have a question or just want to say hi, I&apos;ll try my
            best to get back to you!
          </p>
          <a
            href="https://foliv.my.to/telegram"
            target="_blank"
            className={styles.contactBtn + " btnMusic"}
          >
            Say Hello
          </a>
        </section>

        <div className={styles.copyright}>
          <small>&copy; {new Date().getFullYear()} Francisco Oliveira</small>
        </div>

        <div className="socialFlex fadeUp">
          <div className="socials">
            <a href="https://foliv.my.to/spotify" target="_blank">
              <i className="fa-brands fa-spotify"></i>
            </a>
            <a href="https://foliv.my.to/youtube" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://foliv.my.to/insta-music" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://foliv.my.to/fb-music" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://foliv.my.to/telegram" target="_blank">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
          <div className="line">
            <span></span>
          </div>
        </div>

        <div className="emailFlex fadeUp">
          <a href="mailto:francisco@franciscoliveira.com" target="_blank">
            francisco@franciscoliveira.com
          </a>
          <div className="line">
            <span></span>
          </div>
        </div>
      </main>
    </>
  );
}
