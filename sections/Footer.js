const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-8 mt-24 border-t-2 border-black dark:border-white ">
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          {" "}
          Tomas Brasca
        </span>{" "}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
