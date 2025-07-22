import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🏙️</span>
          <span className={styles.logoText}>Smart City</span>
        </Link>
        
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/blog" className={styles.navLink}>Blog</Link>
          <Link to="/contact" className={styles.navLink}>Contact Us</Link>
          
          {user && (
            <Link to="/complaint" className={styles.navLink}>Complaint</Link>
          )}
          
          {isAdmin() && (
            <Link to="/admin" className={styles.navLink}>Admin</Link>
          )}
        </div>
        
        <div className={styles.authSection}>
          {user ? (
            <div className={styles.userSection}>
              <span className={styles.userName}>Welcome, {user.name}</span>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className={styles.loginBtn}>Login</Link>
              <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 