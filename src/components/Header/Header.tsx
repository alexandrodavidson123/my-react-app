import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/Header.module.css";

interface User {
  nickname: string;
}

interface HeaderProps {
  onSignup: () => void;
  onLogin: () => void;
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignup, onLogin, user, onLogout }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h4>Superjob</h4>
        </Link>
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.forRecruiters}>
         Для рекрутеров
        </a>

        {user ? (
          <>
            <span className={styles.greeting}>Привет, {user.nickname}</span>
            <a
              href="#"
              className={styles.logout}
              onClick={(e) => {
                e.preventDefault();
                onLogout();
              }}
            >
              Выход
            </a>
          </>
        ) : (
          <>
            <a
              href="#"
              className={styles.buttonjoin}
              onClick={(e) => {
                e.preventDefault();
                onSignup();
              }}
            >
             Регистрация
            </a>
            <a
              href="#"
              className={styles.login}
              onClick={(e) => {
                e.preventDefault();
                onLogin();
              }}
            >
              Вход
            </a>
          </>
        )}
      </nav>
    </div>
  </header>
);

export default Header;