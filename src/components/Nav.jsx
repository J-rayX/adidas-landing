import { headerLogo } from "../assets/icons"
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x w-full">
        <nav className="flex justify-evenly items-center">
          
          <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden text-white">
            <li className="leading-normal text-lg text-slate-200">MEN</li>
            <li className="leading-normal text-lg text-slate-200">WOMEN</li>
            <li className="leading-normal text-lg text-slate-200">KIDS</li>
            <li>
            <a href="/">
            <img src={ headerLogo } alt="Logo"
            width={70}
            height={29} 
            />
          </a>
            </li>
            <li className="leading-normal text-lg text-slate-200">NEW IN</li>
            <li className="leading-normal text-lg text-slate-200">LIMITED</li>
            <li className="leading-normal text-lg text-slate-200">SALE</li>
          </ul>
        </nav>
    </header>
  )
}

export default Nav



// import { hamburger } from "../assets/icons"
// // import { navLinks } from "../constants"

// const Nav = () => {
//   return (
//     <header className="padding-x py-8 absolute z-10 w-full">
//         <nav className="flex justify-between items-center max-container">
//             <a href="/">
//                 {/* <img 
//                     src={headerLogo} 
//                     alt="Logo"
//                     width={130}
//                     height={29} /> */}
//             </a>
//             {/* <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
//                 {navLinks.map((item) => (
//                     <li key={item.label}>
//                         <a href={item.href}
//                         className="font-montserrat leading-normal text-lg text-slate-gray">
//                             {item.label}
//                         </a>
//                     </li>
//                 ))}
//             </ul> */}
//             <div className="hidden max-lg:block">
//                 <img 
//                     src={hamburger} 
//                     alt="Hamburger"
//                     width={25}
//                     height={25} />
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Nav