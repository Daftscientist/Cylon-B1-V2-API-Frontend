import tw from "tailwind-styled-components"
import { Home, User, BarChart2, ShoppingCart, Key, Activity } from 'react-feather';
import Nav from "../../components/navigationBar.jsx";
import Link from "next/link";
import StatBoxes from "../../components/statisticBoxes.jsx";
import TokenTable from "../../components/tokenTable.jsx";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading.jsx";
import FetchError from "../../components/fetchError.jsx";

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


export default function DashboardTokens(props) {
    const [userData, setUserData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loadingError, setLoadingError] = useState(false)

    useEffect(() => {
        async function fetchUserData() {
            setLoading(true)
            try {
                const res = await fetch('https://raw.githubusercontent.com/Daftscientist/DisHook/main/hi.json');
                const data = await res.json();
                setUserData(data)
                setLoading(false)
            } catch (error) {
                setLoadingError(true)                
                setLoading(false)
            }
        }
        fetchUserData();
    }, []);

    if (isLoading) return <Loading/>
    if (!userData) return <Loading/>
    if (loadingError) return <FetchError/>
    return (
      <section className="bg-gray-900 w-screen h-screen">
        <nav className="w-64 h-full p-2 fixed invisible md:visible" aria-label="Sidebar">
            <div className="py-4 h-full px-3 rounded-md bg-gray-800">
                <div className="text-white font-bold text-xl text-center pb-2">
                    Cylon.wtf
                </div>
                <ul className="space-y-2">
                    <li>
                        <Link href="/dashboard">
                            <NavItem>
                                <NavItemIcon>
                                    <Home/>
                                </NavItemIcon>
                                <NavItemText>Dashboard</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/account">
                            <NavItem>
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
                            <NavItem>
                                <NavItemIcon>
                                    <BarChart2/>
                                </NavItemIcon>
                                <NavItemText>Account Activity</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/tokens">
                            <NavItem className="bg-gray-700">
                                <NavItemIcon>
                                    <Key/>
                                </NavItemIcon>
                                <NavItemText>API Tokens</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/store">
                            <NavItem>
                                <NavItemIcon>
                                    <ShoppingCart/>
                                </NavItemIcon>
                                <NavItemText>Store</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <main className="flex flex-col flex-1 pl-2 pr-2 w-full  md:pl-64 pt-2">
            <Nav path="Dashboard → Tokens" page="tokens" avatarImg={userData['avatar']}/>
            <div className="hidden md:block">
                <StatBoxes/>
            </div>
            <TokenTable/>
        </main>
      </section>
    )
}