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

export default function DashboardTokens() {
    const [data, setData] = useState({})

    useEffect(function () {
        setData(JSON.parse(localStorage.getItem('sessionUser')))
    }, [])

    //////////////////////////////////////////////////////////////////////////
    const router = useRouter()
    const { tokenID } = router.query
    if (!tokenID) {
      return <p>No token ID provided</p>
    }
    if (tokenID in ['1', '2', '3']) {
      return (
        <>
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
        </>
    )
  }
}