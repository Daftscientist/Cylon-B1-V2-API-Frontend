import StatBoxes from "../../components/statisticBoxes.jsx";
import Box from "../../components/box.jsx";
import ChangeEmailForm from "../../components/forms/changeEmailForm.jsx";
import ChangePasswordForm from "../../components/forms/changePasswordForm.jsx";
import DeleteAccountForm from "../../components/forms/deleteAccountForm.jsx";
import RequestDataForm from "../../components/forms/requestDataForm.jsx";
import ChangeAvatarForm from "../../components/forms/changeAvatarForm.jsx";
import { useEffect, useState } from "react";

export default function Account(props) {
    const [data, setData] = useState({})

    useEffect(function () {
        setData(JSON.parse(localStorage.getItem('sessionUser')))
        console.log(data)
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
                    <ChangePasswordForm userData={data}/>
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