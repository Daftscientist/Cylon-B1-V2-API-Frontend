import Image from "next/image"
import { Menu } from 'react-feather';
import { useEffect, useState } from "react";
import { Home, User, BarChart2, ShoppingCart, Key, Activity } from 'react-feather';
import SidebarItem from "./navigation/sidebarItem";
import ActiveOrNot from "./navigation/activeOrNot";
import { useRouter } from "next/router";
import GetTextPath from "./navigation/textPath";
import Breadcrumb from "./breadcrumb";

export default function Nav(props) {
    const [isActive, setActive] = useState(true);
    const [data, setData] = useState({})

    useEffect(function () {
        setData(JSON.parse(localStorage.getItem('sessionUser')))
    }, [])

    const toggleClass = () => {
        setActive(!isActive);
    };

    const router = useRouter()
    const path = router.pathname

    return (
        <>
            <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <a className="block py-2 pr-4 text-gray-200 border-b border-gray-100 md:border-0">{GetTextPath(path)}</a>
                                </li>
                            </ul>
                        </div>
                        <button onClick={toggleClass} className="pl-4 md:hidden text-gray-400">
                            <Menu/>
                        </button>
                    </div>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            {!data.avatar == "None"? (
                                <Image src={`/api/imageProxy?url=${encodeURIComponent(data.avatar)}`} className="rounded-full" width={40} height={40} />
                            ):(
                                <Image src={`/api/imageProxy?url=${process.env.DEFAULT_PROFILE_PICTURE}`} className="rounded-full" width={40} height={40} />
                            )}
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
                            <SidebarItem 
                                link="/dashboard" active={ActiveOrNot(path, "Dashboard")}
                                title="Dashboard" icon={Home}
                            />
                            <SidebarItem 
                                link="/dashboard/account" active={ActiveOrNot(path, "Manage Account")}
                                title="Manage Account" icon={User}
                            />
                            <SidebarItem
                                link="/dashboard/account/activity" active={ActiveOrNot(path, "Account Activity")}
                                title="Account Activity" icon={BarChart2}
                            />
                            <SidebarItem
                                link="/dashboard/tokens" active={ActiveOrNot(path, "API Tokens")}
                                title="API Tokens" icon={Key}
                            />
                            <SidebarItem
                                link="/dashboard/store" active={ActiveOrNot(path, "Store")}
                                title="Store" icon={ShoppingCart}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

