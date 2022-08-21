import StatBoxes from "../../../components/statisticBoxes.jsx";
import AuditTable from "../../../components/auditTable.jsx";
import { useState, useEffect } from "react";

export default function AccountActivity() {
    const [data, setData] = useState({})

    useEffect(function () {
        setData(JSON.parse(localStorage.getItem('sessionUser')))
    }, [])

    return (
        <>
            <div className="hidden md:block">
                <StatBoxes userData={data} />
            </div>
            <AuditTable/>
        </>
    )
}