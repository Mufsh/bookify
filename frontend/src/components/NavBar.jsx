import icon from "../assets/stack-of-books.png";
const NavBar = () => {
  return (
    <div>
      <nav className="bg-slate-600  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={icon} className="h-10" alt="Icon" />
            <span className="self-center text-3xl font-semibold font-serif whitespace-nowrap text-white">
              Bookify
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
