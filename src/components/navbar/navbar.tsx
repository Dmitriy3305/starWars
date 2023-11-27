import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/">
        Main
      </NavLink>
      <NavLink className={styles.link} to="/controlled-component">
        Controlled component
      </NavLink>
      <NavLink className={styles.link} to="/uncontrolled-component">
        Uncontrolled component
      </NavLink>
    </nav>
  );
};

export default Navbar;
