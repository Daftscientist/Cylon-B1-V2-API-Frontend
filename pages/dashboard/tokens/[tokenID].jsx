import { useRouter } from 'next/router'
import tw from "tailwind-styled-components"
import { Home, User, BarChart2, ShoppingCart, Key, Activity, Trash, PenTool, Edit } from 'react-feather';
import Nav from '../../../components/navigationBar.jsx';
import Link from "next/link";
import StatBoxes from "../../../components/statisticBoxes.jsx";
import TokenTable from "../../../components/tokenTable.jsx";
import Box from '../../../components/box.jsx';
import ChangeApiKeyName from '../../../components/forms/changeApiKeyName.jsx';
import ChangeApiKeyReqLimit from '../../../components/forms/changeApiKeyReqLimit.jsx';
import ToggleKey from '../../../components/forms/enableOrDisableApiKey.jsx';
import { useState, useEffect } from 'react';
import Loading from '../../../components/Loading.jsx';
import FetchError from '../../../components/fetchError.jsx';
import Image from 'next/image';

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

export default function DashboardTokens() {
    useEffect(() => {
    
    }, []);

    const data = JSON.parse(localStorage.getItem('sessionUser'))

    //////////////////////////////////////////////////////////////////////////
    const router = useRouter()
    const { tokenID } = router.query
    if (!tokenID) {
      return <p>No token ID provided</p>
    }
    if (tokenID in ['1', '2', '3']) {
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
            {data.avatar == "None"? (
                <Nav path={`Dashboard → Tokens → ${tokenID}`} page="tokens" avatarImg={"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}/>
            ) : (
                <Nav path={`Dashboard → Tokens → ${tokenID}`} page="tokens" avatarImg={data.avatar}/>
            )}
            <div className="hidden md:block">
            <StatBoxes userData={data} />
            </div>
            <div className="flex flex-wrap w-page">
              <Box outerCss="md:pr-2 md:w-1/4" title="Modify Key Name">
                <ChangeApiKeyName keyName="Example Key" />
              </Box>
              <Box outerCss="md:pr-2 md:w-1/4" title="Modify Key Request Limit">
                <ChangeApiKeyReqLimit/>
              </Box>
              <Box outerCss="md:pr-2 md:w-1/4" title="Disable/Enable Key">
                <ToggleKey/>
              </Box>
              <Box outerCss=" md:w-1/4 text-gray-300" title="Key Infomation">
                <text className="font-bold">Name: </text>test key
                <br/>
                <text className="font-bold">Created At: </text>32/07/22, 21:41
                <br/>
                <text className="font-bold">Last Updated At: </text>32/07/22, 21:41
                <br/>
                <text className="font-bold">Owner: </text>leo@kraata.com
              </Box>
            </div>
            <div className="flex flex-wrap w-page">
              <Box outerCss="md:pr-2 md:w-1/2" title="Network Access">
              </Box>
              <Box outerCss="md:w-1/2" title="Subusers">
                <div className="flex rounded no-underline text-gray-300 items-center bg-gray-700 p-4 border border-transparent transition-colors duration-150 overflow-hidden">
                    <div className="w-10 h-10 rounded-full overflow-hidden hidden md:block">
                        <Image className="w-full h-full" width={'100%'} height={'100%'} src={`/api/imageProxy?url=${encodeURIComponent(userData['avatar'])}`} />
                    </div>
                    <div className="ml-4 flex-1 overflow-hidden">
                        <p className="truncate">leo@kraata.com</p>
                    </div>
                    <button type="button" aria-label="Delete subuser" className="block text-sm p-1 md:p-2 text-gray-200 "><Edit/></button>
                    <button type="button" aria-label="Delete subuser" className="block text-sm p-2 text-red-500"><Trash/></button>
                </div>
                <button type="submit" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add User</button>
              </Box>
            </div>
        </main>
      </section>
    )
  } else {
    return (
      <>
      no</>
    )
  }
}