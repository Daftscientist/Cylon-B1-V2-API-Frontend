import tw from "tailwind-styled-components"
import Image from "next/image.js";
import { Home, User, BarChart2, ShoppingCart, Key, Activity } from 'react-feather';
import Nav from "../components/navigationBar.jsx";
import Link from "next/link";
import StatBoxes from "../components/statisticBoxes.jsx";
import TokenTable from "../components/tokenTable.jsx";
import Box from "../components/box.jsx";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import axios from "axios";
import { useState, useEffect } from "react"
import Loading from "../components/Loading.jsx";
import FetchError from "../components/fetchError.jsx";
import makeRequest from '../helpers/requests.js'

export default function Dashboard(props) {
    useEffect(() => {
    
    }, []);

    const data = JSON.parse(localStorage.getItem('sessionUser'))
    return (
        <main className="flex flex-col flex-1 pl-2 pr-2 w-full  md:pl-64 pt-2">
            {data.avatar == "None"? (
                <Nav path="Dashboard" page="dashboard" avatarImg={"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}/>
            ) : (
                <Nav path="Dashboard" page="dashboard" avatarImg={data.avatar}/>
            )}
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
        </main>
    )
}