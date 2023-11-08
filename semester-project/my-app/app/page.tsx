import Navbar from '../components/Navbar';
import UploadButton from '../components/UploadButton'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <UploadButton />
      </div>
      <Footer />
      </div>
  );
};

export default Home;