import Navbar from '../components/Navbar';
import UploadButton from '../components/UploadButton'
import Footer from '../components/Footer'
import Image from 'next/image'
import logo from '../assets/logo.png'
import ExcaliburComponent from '@/components/Logo';
import CollapsiblePanel from '@/components/Panel';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-fit flex flex-col items-center justify-center mx-auto;">
       <ExcaliburComponent/>
       <div className="bg-stone-100 rounded-lg shadow-md p-4 place-self-center ">
        <UploadButton />
        </div>
      </div>
    </div>
  );
};

export default Home;