import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus
        reprehenderit amet vitae delectus illum, qui magnam. Assumenda atque,
        eligendi totam et consectetur provident minima deserunt. Accusantium
        voluptates fugit dolore.
      </p>

      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus
        reprehenderit amet vitae delectus illum, qui magnam. Assumenda atque,
        eligendi totam et consectetur provident minima deserunt. Accusantium
        voluptates fugit dolore.
      </p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing{" "}
      </Link>
    </div>
  );
}
