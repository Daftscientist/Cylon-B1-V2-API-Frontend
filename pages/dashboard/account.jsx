import tw from "tailwind-styled-components"
import { Home, User, BarChart2, ShoppingCart, Key, Activity } from 'react-feather';
import Nav from "../../components/navigationBar.jsx";
import Link from "next/link";
import StatBoxes from "../../components/statisticBoxes.jsx";
import Box from "../../components/box.jsx";
import ChangeEmailForm from "../../components/forms/changeEmailForm.jsx";
import ChangePasswordForm from "../../components/forms/changePasswordForm.jsx";
import DeleteAccountForm from "../../components/forms/deleteAccountForm.jsx";
import RequestDataForm from "../../components/forms/requestDataForm.jsx";
import ChangeAvatarForm from "../../components/forms/changeAvatarForm.jsx";
import { useEffect, useState } from "react";
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

export default function Account(props) {
    const [data, setData] = useState({})

    useEffect(function () {
        setData(JSON.parse(localStorage.getItem('sessionUser')))
    }, [])

    return (
        <>
            <div className="hidden md:block">
                <StatBoxes userData={data} />
            </div>
            <div className="flex flex-wrap w-page">
                <Box outerCss="md:pr-2 md:w-1/2" title="Modify Email">
                    <ChangeEmailForm userData={data}/>
                </Box>
                <Box outerCss="md:w-1/2" title="Modify Password">
                    <ChangePasswordForm/>
                </Box>
            </div>
            <div className="flex flex-wrap w-page">
                <Box outerCss="md:pr-2 md:w-2/4" title="Modify Account Picture">
                    <ChangeAvatarForm/>
                </Box>
                <Box outerCss="md:w-1/4 md:pr-2 text-gray-300" title="Request Your Data">
                    By clicking "Submit" you will be contacted by an administrator reguarding your data request.
                    <RequestDataForm/>
                </Box>
                <Box outerCss="md:w-1/4 text-gray-300 mb-2 md:mb-0" title="Delete Account">
                    By clicking “Delete Account”, you understand that all your data will be permanently deleted and cannot be recovered.
                    <DeleteAccountForm/>
                </Box>
            </div>
        </>
    )
}