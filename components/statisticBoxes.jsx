import tw from "tailwind-styled-components"
import { Wifi, UploadCloud, Upload, Key } from 'react-feather';

const StatisticBoxOuter = tw.div`
    w-full md:w-1/4 flex
`
const StatisticBoxInner = tw.div`
    mt-2 pr-10 pl-5 pb-5 pt-5 
    w-full md:w-full bg-gray-800
    shadow-md rounded-md resize-none
`
const StatisticBoxIconContainer = tw.div`
    mr-3 float-left flex flex-shrink-0
    items-center justify-center h-16 w-16 
    rounded
`
const StatisticBoxIcon = tw.div`
    fill-current text-white
`

export default function StatBoxes() {
 return (
    <div className="flex flex-wrap w-page">
        <StatisticBoxOuter className="md:pr-2">
            <StatisticBoxInner>
                <StatisticBoxIconContainer style={{backgroundColor: '#4299e1'}}>
                    <StatisticBoxIcon><Wifi style={{fontSize: '2em'}}/></StatisticBoxIcon>
                </StatisticBoxIconContainer>
                <h2 className="text-white">Restricted IPs</h2>
                <h2 className="text-lg text-white">0/5</h2>
            </StatisticBoxInner>
        </StatisticBoxOuter>
        <StatisticBoxOuter className="md:pr-2">
            <StatisticBoxInner>
                <StatisticBoxIconContainer style={{backgroundColor: '#48bb78'}}>
                    <StatisticBoxIcon><UploadCloud style={{fontSize: '2em'}}/></StatisticBoxIcon>
                </StatisticBoxIconContainer>
                <h2 className="text-white">Today's Requests</h2>
                <h2 className="text-lg text-white">0/250</h2>
            </StatisticBoxInner>
        </StatisticBoxOuter>
        <StatisticBoxOuter className="md:pr-2">
            <StatisticBoxInner>
                <StatisticBoxIconContainer style={{backgroundColor: '#f56565'}}>
                    <StatisticBoxIcon><Upload style={{fontSize: '2em'}}/></StatisticBoxIcon>
                </StatisticBoxIconContainer>
                <h2 className="text-white">Requests Used</h2>
                <h2 className="text-lg text-white">100/1000</h2>
            </StatisticBoxInner>
        </StatisticBoxOuter>
        <StatisticBoxOuter>
            <StatisticBoxInner>
                <StatisticBoxIconContainer style={{backgroundColor: '#9f7aea'}}>
                    <StatisticBoxIcon><Key style={{fontSize: '2em'}}/></StatisticBoxIcon>
                </StatisticBoxIconContainer>
                <h2 className="text-white">Tokens Created</h2>
                <h2 className="text-lg text-white">0/3</h2>
            </StatisticBoxInner>
        </StatisticBoxOuter>
    </div>
 )
};

