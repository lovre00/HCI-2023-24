import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-base mb-2">Category 1</h1>
            <Link href="/category1">
              <h1 className="hover:text-blue-500 transition duration-300 cursor-pointer text-sm">Page 1</h1>
            </Link>
            <Link href="/category1/page2">
              <h1 className="hover:text-blue-500 transition duration-300 cursor-pointer text-sm">Page 2</h1>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-base mb-2">Category 2</h1>
            <Link href="/category2">
              <h1 className="hover:text-blue-500 transition duration-300 cursor-pointer text-sm">Page 1</h1>
            </Link>
            <Link href="/category2/page2">
              <h1 className="hover:text-blue-500 transition duration-300 cursor-pointer text-sm">Page 2</h1>
            </Link>
          </div>
          {/* Add more categories and links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
