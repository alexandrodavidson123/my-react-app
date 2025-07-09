
import React, { useEffect } from "react";
import styles from "../../assets/styles/Preloader.module.css";

const Preloader: React.FC= () => {
  useEffect(() => {
    document.body.classList.add(styles.loaded_hiding);
    
    const timer = setTimeout(() => {
      document.body.classList.add(styles.loaded);
      document.body.classList.remove(styles.loaded_hiding);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove(styles.loaded, styles.loaded_hiding);
    };
  }, []);

  return (
    <div className={styles.preloader}>
      <svg className={styles.preloader__image} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor"
          d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
        </path>
      </svg>
    </div>
  );
};

export default Preloader;