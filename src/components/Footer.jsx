const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <img src="logo.png" alt="Kerl Logo" className="w-12 h-12" />
            <p className="mt-2">© 2024 All Rights Reserved</p>
          </div>
          <div>
            <h4 className="text-lg">Subscribe to our newsletter</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 px-4 py-2 rounded"
            />
            <button className="ml-2 px-4 py-2 bg-green-600 rounded hover:bg-green-700">
              Subscribe
            </button>
          </div>
          <div>
            <p>Contact Us: +91 6969696969</p>
            <p>Follow Us:</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://instagram.com" className="hover:text-gray-400">
                Instagram
              </a>
              <a href="https://facebook.com" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  