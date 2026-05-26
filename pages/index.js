import { useState } from "react";
import styles from "./styles.module.css";

function Home() {
  const [clicou, setClicou] = useState(false);
  const [clickimg, setClickimg] = useState(false);
  const [clickimg2, setClickimg2] = useState(false);

  const hadleClickSim = () => {
    setClicou(true);
  };

  const handleClickImg = () => {
    setClickimg(true);
  };

  const handleClickImg2 = () => {
    setClickimg(false);
    setClicou(false);
    setClickimg2(true);
    window.scrollTo(0, 0);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const Header = () => {
    return (
      <header className={styles.header}>
        <section className={styles.section}>
          <h1>Luiz Antonio Gomes da Silva</h1>
          <h2>Engenheiro de Software PL</h2>
          <h4>C# | .Net | SQL Server | React</h4>
          <p>
            <a href="mailto:luiz.gsilva42@gmail.com">luiz.gsilva42@gmail.com</a>{" "}
            <br />
            <a
              href="https://www.linkedin.com/in/luizantoniogomesdasilva/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            <a href="https://github.com/lulygomes" target="_blank">
              GitHub
            </a>
          </p>
        </section>
        <img
          src="/images/img1.png"
          alt="Imagem de Luiz Antonio Gomes da Silva"
          className={styles.img}
        />
      </header>
    );
  };

  const Main = () => {
    return <main className={styles.main}>olá mundo nova branchc1</main>;
  };

  const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p>Desenvolvido por Luiz Gomes</p>
        <img src="favicon.ico" />
      </footer>
    );
  };
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
