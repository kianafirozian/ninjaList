import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";
import { Props } from "next/script";
import internal from "stream";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/` + ninja.id} key={ninja.id}>
          <Link href={`/ninjas/` + ninja.id} className={styles.single}>
            <h3>{ninja.name}</h3>
          </Link>
        </Link>
        // ask the link from saeed
      ))}
    </div>
  );
};

export default Ninjas;
