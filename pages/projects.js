import Head from "next/head";
import styles from "../styles/Projects.module.css";

// Components
import Navbar from "../components/Navbar";


export default function Projects() {
    const { container, main, list, listedItem } = styles; 

    return (
        <div className={container}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={main}>
                <ul className={list}>
                    <li className={listedItem}>
                        <span>(deployed) Memory game</span>https://memory-game-01.herokuapp.com/
                    </li>
                    <li className={listedItem}>
                        <span>Netflix clone</span>https://github.com/KMonyake/Netfilx_Clone
                    </li>
                    <li className={listedItem}>
                        <span>Tiktok clone</span>https://github.com/KMonyake/TikTok_Clone
                    </li>
                    <li className={listedItem}><span>online shop</span>https://github.com/KMonyake/comfy-store</li>
                </ul>
            </main>
        </div>
    )
}