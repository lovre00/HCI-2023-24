import Navbar from '../components/Navbar';
import UploadButton from '../components/UploadButton';
import Footer from '../components/Footer';
import ExcaliburComponent from '@/components/Logo';
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-fit flex flex-col items-center justify-center mx-auto">
      <div className="place-self-cente">
          <ExcaliburComponent/>
        </div>
        <div className="bg-stone-100 rounded-lg shadow-md p-4 place-self-center">
          <UploadButton />
        </div>
        <p className="text-gray-500 text-xs mt-4 max-w-xs sm:max-w-md text-center lg:m-7">
          By uploading data, you acknowledge and agree to our Terms of Service and Privacy Policy. You also consent to sharing your submission with the broader security community. Please refrain from submitting personal data; we do not take responsibility for the contents of submissions.
        </p>
      </div>
    </div>
  );
};

export default Home;
