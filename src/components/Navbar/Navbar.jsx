
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { user, admin, logout, logoutAdmin } = useAuth();
  const navigate = useNavigate();

  const isLoggedIn = !!user || !!admin;

  const handleLogout = () => {
    if (user) logout();
    if (admin) logoutAdmin();
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}><img style={{height:"90px", width:"100px", display:"flex", alignItems:"center"}} src="/public/citifix.png" alt="" /></span>
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/blog" className={styles.navLink}>Blog</Link>
          <Link to="/contact" className={styles.navLink}>Contact Us</Link>
          {user && (
            <Link to="/complaint" className={styles.navLink}>Complaint</Link>
          )}
        </div>
        <div className={styles.authSection}>
          {isLoggedIn ? (
            <div className={styles.userSection}>
              <span className={styles.userName}>
                Welcome, {user ? user.name : admin?.name}
              </span>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className={styles.loginBtn}>Login</Link>
              <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
              <Link to="/admin/secret" className={styles.signupBtn}>Admin Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;