import { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('An error occurred while sending the message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <p className={styles.contactSubtitle}>
          Get in touch with us for any questions or feedback about our smart city initiative
        </p>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <h3>Address</h3>
                <p>City Hall, Smart City Division<br />
                123 Innovation Street<br />
                Tech District, 12345</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h3>Email</h3>
                <p>info@smartcity.gov<br />
                support@smartcity.gov</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br />
                +1 (555) 987-6543</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕒</span>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Send us a Message</h2>
          
          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 