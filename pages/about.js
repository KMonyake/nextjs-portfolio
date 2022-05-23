import Head from "next/head";
import styles from "../styles/About.module.css";

// Components
import Navbar from "../components/Navbar";


export default function about() {
    const { main, heading, paragraph, list, listedItem } = styles;

    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <main className={main}>
                <h1 className={heading}>About</h1>
                <p className={paragraph}>
                    Hello, my name is Kutlwisiso. I have been writing code for quite some time now.Programming started as a hobby for me but I began to take is seriously as I gained some serious skills.
                </p>
                <p className={paragraph}>
                    I decided to sign up for a bootcamp in order to take my skills to the next level.</p>
                <p className={paragraph}>
                    I understand that I still have a long way to go but thats ok.I know im built to overcome any challenges that lie ahead.</p>
                <h2 className={heading}>Skills</h2>
                <ul className={list}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Firebase</li>
                    <li>Mongodb</li>
                </ul>
                <h2 className={heading}>Education</h2>
                <p className={listedItem}>HyperionDev</p>
            </main>
        </div>
    )
}