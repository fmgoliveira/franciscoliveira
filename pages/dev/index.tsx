import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Dev.module.scss'
import aboutImg from '@/assets/aboutMusic.jpg'
import logo from '@/assets/dev-icon.png'
import { useEffect, useState } from 'react'
import { client } from '../../sanityClient';

import music1 from '@/assets/music1.jpg'
import music3 from '@/assets/music3.jpg'
import music5 from '@/assets/music5.jpg'
import music6 from '@/assets/music6.jpg'
import music9 from '@/assets/music9.jpg'
import music10 from '@/assets/music10.jpg'
import music11 from '@/assets/music11.jpg'
import music12 from '@/assets/music12.jpg'
import { urlFor } from '@/sanityClient'
import Link from 'next/link'

export default function Music() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [abouts, setAbouts] = useState([]);
  const [skills, setSkills] = useState([]);
  const [works, setWorks] = useState([]);
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterWork, setFilterWork] = useState([]);
  const [tags, setTags] = useState<any[]>([]);

  useEffect(() => {
    const aboutQuery = '*[_type == "abouts"]';
    client.fetch(aboutQuery).then((data) => setAbouts(data));
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(skillsQuery).then((data) => setSkills(data));
    const worksQuery = '*[_type == "works"]';
    client.fetch(worksQuery).then((data) => { setWorks(data); setFilterWork(data); });
  }, []);

  useEffect(() => {
    const _tags = new Set(works.map((w: any) => w.tags).flat());
    setTags(['All', ...Array.from(_tags)]);
  }, [works]);

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
  }, [abouts, skills, works, filterWork]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setTimeout(() => {
      if (item === 'All') setFilterWork(works);
      else setFilterWork(works.filter((work: any) => work.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Francisco Oliveira</title>
        <meta name="description" content="Developer. Designer. More." />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:url" content="https://franciscoliveira.com/dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Francisco Oliveira" />
        <meta property="og:description" content="Developer. Designer. More." />
        <meta property="og:image" content="/banner-dev.png" />
        <meta name="theme-color" content="#ed6326" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="franciscoliveira.com/dev" />
        <meta property="twitter:url" content="https://franciscoliveira.com/dev" />
        <meta name="twitter:title" content="Francisco Oliveira" />
        <meta name="twitter:description" content="Developer. Designer. More." />
        <meta name="twitter:image" content="/banner-dev.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <header id="header">
          <div>
            <nav id="nav" className="row fadeUp">
              <a href="#home" className='logo-container'><Image src={logo} alt="" className="logo" /></a>
              <ul className="list-items">
                <a href="#aboutme"><li className="list-item dev fadeRight">About</li></a>
                <a href="#skills"><li className="list-item dev fadeRight">Skills</li></a>
                <a href="#work"><li className="list-item dev fadeRight">My Work</li></a>
                <a href="#contact"><li className="list-item dev fadeRight">Contact</li></a>
              </ul>
            </nav>
            <div className="open-mobile-nav" onClick={() => setMenuOpen(true)}><i className="fa-solid fa-bars" id="open-nav"></i></div>
          </div>
        </header>

        <div className="navigation-mobile">
          <ul className={"list-items-mobile" + (menuOpen ? ' active' : '')}>
            <a href="#aboutme"><li className="list-item dev">About</li></a>
            <a href="#work"><li className="list-item dev">My Music</li></a>
            <a href="#contact"><li className="list-item dev">Contact</li></a>
            <div className="close-mobile-nav" onClick={() => setMenuOpen(false)}><i className="fa-solid fa-xmark" id="close-nav"></i></div>
          </ul>
        </div>

        <section id="home" className={styles.home}>
          <div className='container'>
            <div className={styles.heroText + ' fadeUp'}>
              <span>Hi, my name is</span>
              <h1 className={styles.name + " fadeRight"}>Francisco Oliveira</h1>
              <h2 className={styles.name + ' ' + styles.secondP}>Developer. Designer. More.</h2>
              <p className={styles.descriptionP + " fadeLeft"}>&quot;Code is the poetry of machines,<br />and <b>developers are the poets</b>.&quot;</p>
              <a href="#aboutme" className="btnDev fadeRight">Explore more about me</a>
              <a href="#work" className="btnLink alt fadeLeft">
                <i className="fa-solid fa-code"></i>
                <span>Check my previous work...</span>
              </a>
            </div>
          </div>
        </section>

        <section id="aboutme" className="container fadeUp">
          <div>
            <h2 className={"section-h2 " + styles.headerLineDecoration}>About Me</h2>
            <div className={styles.aboutRow}>
              <div className={styles.aboutmeText + " fadeRight"}>
                <p className={styles.aboutmeP}><em>Hello there!</em></p>
                <p className={styles.aboutmeP}>I&apos;m a young man passionate about technology and innovation. From an early age, I was always curious and interested in how things worked, which led me to experiment with various tools and programming languages.</p>
                <p className={styles.aboutmeP}>I am currently studying in high school, while looking for ways to apply my knowledge and skills to create innovative projects. In addition, I do participate in projects related to technology and computer science, which allows me to improve my skills and knowledge.</p>
                <p className={styles.aboutmeP}>With some  years of experience in the software development field, I have expertise in a few coding languages. I always seek to improve my skills and offer the best in terms of quality and innovation.</p>
                <p className={styles.aboutmeP}>Besides being dedicated and committed, I am an entrepreneurial and innovative person. I believe that technology is fundamental for the evolution of society and is always looking for new challenges and opportunities to grow and contribute to the community.</p>
              </div>
              <div>
                <div className={styles.aboutMeImgContainer}>
                  <Image src={aboutImg} alt="" className={styles.aboutmeImg + ' fadeLeft'} />
                  <div className={styles.back}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.abouts + ' container'}>
          {
            abouts.map((a: any, i) => (
              <div className={styles.about + ' fadeUp'} key={`about-${i}`}>
                <h3 className={styles.title}>{a.title}</h3>
                <small className={styles.description}>{a.description}</small>
              </div>
            ))
          }
        </section>


        <section id="skills" className="container fadeUp">
          <div>
            <h2 className={styles.headerLineDecoration}>My Skills</h2>
            <div className={styles.skillsContainer}>
              {
                skills.map((s: any, i) => (
                  <div className={styles.skill + ' fadeUp'} key={`skill-${i}`}>
                    <div className={styles.skillIcon}>
                      <Image className={styles.img} src={urlFor(s.icon)} alt={s.name} width={64} height={64} style={{ filter: s.bgColor ? 'brightness(0) invert(.75)' : '' }} />
                    </div>
                    <small className={styles.skillName}>{s.name}</small>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section id="work" className="container fadeUp">
          <div>
            <h2 className={styles.headerLineDecoration}>Previous Work</h2>
            <div className={styles.tagsContainer}>
              {
                tags.map((t: any, i) => (
                  <span className={styles.tag + ' ' + (activeFilter === t ? styles.active : '')} onClick={() => handleWorkFilter(t)} key={`tag-${i}`}><span>{t}</span></span>
                ))
              }
            </div>
            <div className={styles.portfolioContainer}>
              {
                filterWork.map((w: any, i) => (
                  <div className={styles.box + " fadeDown"} key={`work-${i}`} onClick={() => window.open(w.link, '_blank')}>
                    <div className={styles.boxImg} style={{ backgroundImage: `url(${urlFor(w.imgUrl)})` }}>
                      <div className={styles.boxImgOverlay}>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </div>
                    </div>
                    <div className={styles.boxText}>
                      <h4 className={styles.boxTextP}>{w.title}</h4>
                      <small className={styles.tags}>
                        {w.tags.map((t: any, i: number) => (
                          <span key={`tag-${i}`}>#{t}</span>
                        ))}
                      </small>
                      <p className={styles.boxTextP}>{w.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section className={styles.socials}>
          <span></span>
          <div>
            <a href="https://discord.com/users/549619189271494676" target="_blank"><i className="fa-brands fa-discord"></i></a>
            <a href="https://github.com/dr-monocle" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="mailto:francisco@franciscoliveira.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
          </div>
          <span></span>
        </section>

        <section id="contact" className={"container fadeUp " + styles.contact}>
          <span className={styles.span}>What&apos;s next?</span>
          <p className={styles.name}>Get In Touch</p>
          <p className={styles.descriptionP}>Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
          <a href="https://t.me/olivei_f" target="_blank" className={styles.contactBtn + ' btnDev'}>Say Hello</a>
        </section >

        <div className={styles.copyright}>
          <small>&copy; {new Date().getFullYear()} Francisco Oliveira</small>
        </div>


        <div className="socialFlex dev fadeUp">
          <div className="socials">
            <a href="https://discord.com/users/549619189271494676" target="_blank"><i className="fa-brands fa-discord"></i></a>
            <a href="https://t.me/olivei_f" target="_blank"><i className="fa-brands fa-telegram"></i></a>
            <a href="https://github.com/dr-monocle" target="_blank"><i className="fa-brands fa-github"></i></a>
          </div>
          <div className="line"><span></span></div>
        </div>

        <div className="emailFlex dev fadeUp">
          <a href='mailto:francisco@franciscoliveira.com' target='_blank'>francisco@franciscoliveira.com</a>
          <div className="line"><span></span></div>
        </div>

      </main >
    </>
  )
}
