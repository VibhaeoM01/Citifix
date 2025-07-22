import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './AdminRegister.module.scss';

const departments = [
  'Sanitation',
  'Water',
  'Roads',
  'Electricity',
  'Other'
];

const AdminRegister = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    department: departments[0]
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const secret = location.state?.secret || '';

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, secret })
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Registration successful! Redirecting...');
        setTimeout(() => navigate(`/admin/${form.department}`), 1500);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h2>Admin/Staff Registration</h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <select name="department" value={form.department} onChange={handleChange} required>
          {departments.map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
        <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}
      </form>
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <span>Already registered? </span>
        <button
          type="button"
          className="btn btn-link"
          style={{ color: '#667eea', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
          onClick={() => navigate('/admin/login')}
        >
          Go to Admin Login
        </button>
      </div>
    </div>
  );
};

export default AdminRegister;
