import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
// import logoDev from '@/assets/dev.svg'
import logoDev from '@/assets/dev-icon.png'
// import logoMusic from '@/assets/music.svg'
import logoMusic from '@/assets/music-icon.png'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
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
        <meta name="description" content="Developer. Designer. Musician. Composer. More." />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:url" content="https://franciscoliveira.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Francisco Oliveira" />
        <meta property="og:description" content="Developer. Designer. Musician. Composer. More." />
        <meta property="og:image" content="/banner.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="franciscoliveira.com/" />
        <meta property="twitter:url" content="https://franciscoliveira.com/" />
        <meta name="twitter:title" content="Francisco Oliveira" />
        <meta name="twitter:description" content="Developer. Designer. Musician. Composer. More." />
        <meta name="twitter:image" content="/banner.png" />

        <meta name="viewport" content="width=ice-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.zone + ' fadeUp'} onClick={() => router.push('/dev')}>
            <div>
              <Image src={logoDev} alt='' className={styles.img} />
            </div>
            <h1>Developer Zone</h1>
            <p>My portfolio as a designer/developer</p>
          </div>
          <div className={styles.divider + ' fade'}><span></span></div>
          <div className={styles.zone + ' fadeDown'} onClick={() => router.push('/music')}>
            <div>
              <Image src={logoMusic} alt='' className={styles.img} />
            </div>
            <h1>Music Zone</h1>
            <p>My portfolio as a musician, producer and composer</p>
          </div>
        </div>
      </main>
    </>
  )
}
