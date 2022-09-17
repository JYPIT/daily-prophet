import styles from "./App.module.css";
import gifImage1 from "./img/harry-run.gif";
import gifImage2 from "./img/albus.gif";

function App() {
  return (
    <div className={styles.content__main}>
      <div className={styles.content__container}>
        <img className={styles.contnet__leftGif} src={gifImage1} alt="Harry" />
        <img className={styles.contnet__righttGif} src={gifImage2} alt="Albus" />
      </div>
    </div>
  );
}

export default App;
