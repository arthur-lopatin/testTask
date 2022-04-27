import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          style={{ width: '40px', height: '40px' }}
          src='./img/logo1.png'
          alt='Logo'
        />
        <h3>Dog Facts</h3>
      </div>
      <img src='./img/heart.svg' alt='Favorites' />
    </header>
  );
};

export default Header;
