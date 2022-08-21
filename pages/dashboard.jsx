import Nav from "../components/navigationBar.jsx";
import StatBoxes from "../components/statisticBoxes.jsx";
import TokenTable from "../components/tokenTable.jsx";
import Box from "../components/box.jsx";
import { useState, useEffect } from "react";

export default function Dashboard(props) {
    const [data, setData] = useState({})

    useEffect(function () {
        setData(JSON.parse(localStorage.getItem('sessionUser')))
        console.log(data)
    }, [])

    return (
        <>
            <StatBoxes userData={data} />
            <TokenTable/>
            <div className="flex flex-wrap w-page">
                <Box outerCss="md:pr-2 md:w-1/3" title="Requests This Week">
                </Box>
                <Box outerCss="md:pr-2 md:w-1/3" title="Requests This Month">
                </Box>
                <Box outerCss=" md:w-1/3 mb-2 md:mb-0" title="Requests This Year">
                </Box>
            </div>
        </>
    )
}