import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Home.module.scss';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: '📱',
      title: 'Easy Complaint Registration',
      description: 'Submit complaints with photos and descriptions in just a few clicks'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Analysis',
      description: 'Automatic categorization and urgency prediction using advanced ML'
    },
    {
      icon: '🗺️',
      title: 'Location Tracking',
      description: 'Precise location mapping for efficient complaint resolution'
    },
    {
      icon: '📊',
      title: 'Real-time Updates',
      description: 'Track your complaint status and get notified of progress'
    },
    {
      icon: '🏛️',
      title: 'Smart Governance',
      description: 'Data-driven insights for better city management'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is protected with industry-standard security'
    }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Smart City Complaint System
            </h1>
            <p className={styles.heroSubtitle}>
              Empowering citizens to build better cities through intelligent complaint management
            </p>
            <div className={styles.heroButtons}>
              {user ? (
                <Link to="/complaint" className={styles.ctaButton}>
                  REGISTER YOUR COMPLAINT
                </Link>
              ) : (
                <>
                  <Link to="/signup" className={styles.ctaButton}>
                    Get Started
                  </Link>
                  <Link to="/login" className={styles.secondaryButton}>
                    Login to Start
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              🏙️ Smart City
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Our Platform?</h2>
            <p className={styles.sectionSubtitle}>
              Experience the future of civic engagement with our cutting-edge features
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Make a Difference?</h2>
            <p className={styles.ctaText}>
              Join thousands of citizens who are already contributing to a better city
            </p>
            {!user && (
              <Link to="/signup" className={styles.ctaButton}>
                Start Your Journey
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 