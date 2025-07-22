import styles from './Blog.module.scss';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How Smart Cities Are Transforming Urban Living',
      excerpt: 'Discover how technology is revolutionizing the way we live in cities and how citizens can contribute to this transformation.',
      date: '2024-01-15',
      author: 'City Innovation Team',
      category: 'Smart Cities'
    },
    {
      id: 2,
      title: 'The Power of Citizen Engagement in Urban Development',
      excerpt: 'Learn about the importance of citizen participation in building better, more sustainable cities for everyone.',
      date: '2024-01-10',
      author: 'Urban Planning Department',
      category: 'Citizen Engagement'
    },
    {
      id: 3,
      title: 'AI and Machine Learning in Municipal Services',
      excerpt: 'Explore how artificial intelligence is being used to improve municipal services and citizen satisfaction.',
      date: '2024-01-05',
      author: 'Technology Division',
      category: 'Technology'
    }
  ];

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Smart City Blog</h1>
        <p className={styles.blogSubtitle}>
          Stay updated with the latest news and insights about smart city initiatives
        </p>
      </div>

      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.blogCardHeader}>
              <span className={styles.blogCategory}>{post.category}</span>
              <span className={styles.blogDate}>{post.date}</span>
            </div>
            <h2 className={styles.blogCardTitle}>{post.title}</h2>
            <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
            <div className={styles.blogCardFooter}>
              <span className={styles.blogAuthor}>By {post.author}</span>
              <button className={styles.readMoreBtn}>Read More</button>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.blogCta}>
        <h2>Want to Contribute?</h2>
        <p>Share your ideas and experiences about smart city development</p>
        <button className="btn btn-primary">Submit Article</button>
      </div>
    </div>
  );
};

export default Blog; 