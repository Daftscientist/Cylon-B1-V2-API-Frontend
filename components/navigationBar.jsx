import Image from "next/image"
import { Menu } from 'react-feather';
import { useState } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { Home, User, BarChart2, ShoppingCart, Key, Activity } from 'react-feather';


const NavItem = tw.div`
    flex items-center p-2 
    text-base font-normal 
    rounded-lg 
    text-white 
    hover:bg-gray-700
    cursor-pointer
`;
const NavItemIcon = tw.div`
    w-6 h-6 
    transition 
    duration-75 text-gray-400 
    group-hover:text-white
`;
const NavItemNotif = tw.div`
    inline-flex justify-center
    items-center p-3 ml-3 w-3
    h-3 text-sm font-medium
    rounded-full bg-blue-900
    text-blue-200
`;
const NavItemText = tw.div`
    flex-1 ml-3 whitespace-nowrap
`;

export default function Nav(props) {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
      setActive(!isActive);
    };
    var classNamesDash = null
    var classNamesAcc = null
    var classNamesActive = null
    var classNamesToken = null
    var classNamesStore = null
    if (props['page'] == 'dashboard') {
        classNamesDash = 'bg-gray-700';
    } 
    if (props['page'] == 'account') {
        classNamesAcc = 'bg-gray-700';
    } 
    if (props['page'] == 'tokens') {
        classNamesToken = 'bg-gray-700';
    } 
    if (props['page'] == 'activity') {
        classNamesActive = 'bg-gray-700';
    } 
    if (props['page'] == 'store') {
        classNamesStore = 'bg-gray-700';
    }
  return (
    <>
        <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex items-center">
                    <div className="hidden md:block">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a className="block py-2 pr-4 text-gray-200 border-b border-gray-100 md:border-0">{props['path']}</a>
                            </li>
                        </ul>
                    </div>
                    <button onClick={toggleClass} className="pl-4 md:hidden text-gray-400">
                        <Menu/>
                    </button>
                </div>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">

                        <Image src={`/api/imageProxy?url=${encodeURIComponent(props.avatarImg)}`} className="rounded-full" width={40} height={40} />
                    </button>
                </div>
                <div className="hidden justify-between w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                </div>
            </div>
        </nav>
        <div className="md:hidden ">
            <div className={isActive ? 'hidden': null}>
                <div className="mt-2 px-4 py-3 bg-gray-800 text-white text-sm rounded-md">
                <ul className="space-y-2">
                    <li>
                        <Link href="/dashboard">
                            <NavItem className={classNamesDash}>
                                <NavItemIcon>
                                    <Home/>
                                </NavItemIcon>
                                <NavItemText>Dashboard</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/account">
                        <NavItem className={classNamesAcc}>
                                <NavItemIcon>
                                    <User/>
                                </NavItemIcon>
                                <NavItemText>Manage Account</NavItemText>
                                <NavItemNotif>3</NavItemNotif>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/account/activity">
                            <NavItem className={classNamesActive}>
                                <NavItemIcon>
                                    <BarChart2/>
                                </NavItemIcon>
                                <NavItemText>Account Activity</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/tokens">
                            <NavItem className={classNamesToken}>
                                <NavItemIcon>
                                    <Key/>
                                </NavItemIcon>
                                <NavItemText>API Tokens</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/store">
                            <NavItem className={classNamesStore}>
                                <NavItemIcon>
                                    <ShoppingCart/>
                                </NavItemIcon>
                                <NavItemText>Store</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </>
  )
}

