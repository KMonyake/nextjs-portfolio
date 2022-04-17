import Link from "next/link";
import styles from "../styles/Navbar.module.css";


export default function Navbar() {
    const { container, navLink } = styles;

    return (
        <nav className={container}>
            <Link href="/">
                <a className={navLink}>Home</a>
            </Link>
            <Link href="/about">
                <a className={navLink}>About</a>
            </Link>
            <Link href="/projects">
                <a className={navLink} >Projects</a>
            </Link>
            <Link href="/contact">
                <a className={navLink}>Contact</a>
            </Link>
        </nav>
    )
}