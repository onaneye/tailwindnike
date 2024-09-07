import { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";


const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

 
  function toggleNav() {
    setIsNavOpen(prevState => !prevState);
  }

  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leadding-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer" onClick={toggleNav}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
      {isNavOpen && (
        <div
          className="bg-coral-red lg:hidden mt-9 relative justify-center h-full w-full px-16 animate-fade"
        >
          <div>
            <ul className="flex-1 flex-col justify-center items-center mx-auto w-full">
              {navLinks.map(item => (
                <li key={item.label} className="w-full p-3 text-center text-white hover:bg-white  hover:text-coral-red">
                  <a
                    href={item.href}
                    className="font-montserrat leadding-normal text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
