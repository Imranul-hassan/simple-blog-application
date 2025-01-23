
const Navbar = () => {
    return (
      <header className="bg-blue-500 text-white py-4">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          
          <h1 className="text-xl font-bold ">My Blog</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:underline">
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  