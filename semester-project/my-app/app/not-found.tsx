import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.oopsText}>Oops!</h1>
        <p style={styles.descriptionText}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" passHref>
          <button style={styles.button}>Return to Home</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    height: '100vh',
    overflow: 'hidden', // Prevents scrolling
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 60px)', // Adjusts for the Navbar height
    textAlign: 'center' as 'center',
    padding: '0 20px',
    backgroundColor: '#fff',
  },
  oopsText: {
    fontSize: '72px',
    color: '#0070f3',
    margin: '0',
  },
  descriptionText: {
    fontSize: '24px',
    color: '#555',
    marginTop: '20px',
    marginBottom: '40px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
