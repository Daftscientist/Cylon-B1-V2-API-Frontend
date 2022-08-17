import tw from "tailwind-styled-components"
import { Home, User, BarChart2, ShoppingCart, Key, Activity } from 'react-feather';
import Nav from "../../../components/navigationBar.jsx";
import Link from "next/link";
import StatBoxes from "../../../components/statisticBoxes.jsx";
import AuditTable from "../../../components/auditTable.jsx";
import { useState, useEffect } from "react";
import Loading from "../../../components/Loading.jsx";
import FetchError from "../../../components/fetchError.jsx";

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

export default function AccountActivity() {
    useEffect(() => {
    
    }, []);

    const data = JSON.parse(localStorage.getItem('sessionUser'))

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
                            <NavItem className="bg-gray-700">
                                <NavItemIcon>
                                    <BarChart2/>
                                </NavItemIcon>
                                <NavItemText>Account Activity</NavItemText>
                            </NavItem>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/tokens">
                            <NavItem>
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
            {data.avatar == "None"? (
                <Nav path="Dashboard → Account → Activity" page="activity" avatarImg={"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}/>
            ) : (
                <Nav path="Dashboard → Account → Activity" page="activity" avatarImg={data.avatar}/>
            )}
            <div className="hidden md:block">
            <StatBoxes userData={data} />
            </div>
            <AuditTable/>
        </main>
      </section>
    )
}