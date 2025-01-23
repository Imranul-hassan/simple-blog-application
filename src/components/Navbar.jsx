
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async() => {

  const {getUser} = getKindeServerSession();
  const user = await getUser();
    return (
      <header className="bg-blue-500 text-white py-4">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          
          <h1 className="text-xl font-bold ">My Blog</h1>
          <nav>
           {
            user? (
              <>
               <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/api/auth/logout" className="hover:underline">
                  Logout
                </Link>
              </li>
            </ul>
              </>
            ):(
              <>
               <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/api/auth/login" className="hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/api/auth/login" className="hover:underline">
                  Login
                </Link>
                
              </li>
            </ul>
              </>
            )
           }
          </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  