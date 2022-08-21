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
    const [data, setData] = useState({})

    useEffect(function () {
        setData(JSON.parse(localStorage.getItem('sessionUser')))
    }, [])

    return (
        <>
            <div className="hidden md:block">
                <StatBoxes userData={data} />
            </div>
            <TokenTable/>
        </>
    )
}