import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import logoDev from '@/assets/dev.svg'
import logoMusic from '@/assets/music.svg'
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
        <meta name="description" content="Developer. Designer. Musician. Student. More." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
