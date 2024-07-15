import { headerLogo } from "../assets/icons"
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x w-full">
        <nav className="flex justify-evenly items-center">
          
          <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden text-white">
            <li className="leading-normal text-slate-200">MEN</li>
            <li className="leading-normal text-slate-200">WOMEN</li>
            <li className="leading-normal text-slate-200">KIDS</li>
            <li>
              <a href="/">
                <img src={ headerLogo } alt="Logo"
                width={70}
                height={29} 
                />
              </a>
            </li>
            <li className="leading-normal text-slate-200">NEW IN</li>
            <li className="leading-normal text-slate-200">LIMITED</li>
            <li className="leading-normal text-slate-200">SALE</li>
          </ul>
          <div className="hidden max-lg:block w-full ">
          <div className="flex flex-1 justify-between items-center gap-16 pt-10">
          <div>
              <a href="/">
                <img src={ headerLogo } alt="Logo"
                  width={49}
                  height={40} 
                />
              </a>
          </div>
          
            <div>
              <img className="" src={hamburger} alt="hamburger" width={32} height={32} />
            </div>
            
            
            </div>

          </div>
        </nav>
    </header>
  )
}

export default Nav
