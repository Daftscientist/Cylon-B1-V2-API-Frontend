const StatisticBoxOuter = tw.div`
    pr-2 w-full md:w-1/4 flex
`
const StatisticBoxInner = tw.div`
    mt-2 pr-10 pl-5 pb-5 pt-5 
    w-80 md:w-full bg-neutral-850 
    shadow-md rounded-md resize-none
`
const StatisticBoxTitle = tw.div`
`
const StatisticBoxIconContainer = tw.div`
    mr-3 float-left flex flex-shrink-0
    items-center justify-center h-16 w-16 
    rounded
`
const StatisticBoxIcon = tw.div`
    fill-current text-white
`

return (
<div className="flex flex-wrap w-full">
    <StatisticBoxOuter>
        <StatisticBoxInner>
            <StatisticBoxIconContainer style={{backgroundColor: '#4299e1'}}>
                <StatisticBoxIcon><div style={{fontSize: '2em'}}/></StatisticBoxIcon>
            </StatisticBoxIconContainer>
            <h2 css={tw`text-white`}>Restricted IPs</h2>
            <h2 css={tw`text-lg text-white`}>0/5</h2>
        </StatisticBoxInner>
    </StatisticBoxOuter>
    <StatisticBoxOuter>
        <StatisticBoxInner>
            <StatisticBoxIconContainer style={{backgroundColor: '#48bb78'}}>
                <StatisticBoxIcon><div style={{fontSize: '2em'}}/></StatisticBoxIcon>
            </StatisticBoxIconContainer>
            <h2 css={tw`text-white`}>Today's Requests</h2>
            <h2 css={tw`text-lg text-white`}>0/250</h2>
        </StatisticBoxInner>
    </StatisticBoxOuter>
    <StatisticBoxOuter>
        <StatisticBoxInner>
            <StatisticBoxIconContainer style={{backgroundColor: '#f56565'}}>
                <StatisticBoxIcon><div style={{fontSize: '2em'}}/></StatisticBoxIcon>
            </StatisticBoxIconContainer>
            <h2 css={tw`text-white`}>Requests Used</h2>
            <h2 css={tw`text-lg text-white`}>100/1000</h2>
        </StatisticBoxInner>
    </StatisticBoxOuter>
    <StatisticBoxOuter>
        <StatisticBoxInner>
            <StatisticBoxIconContainer style={{backgroundColor: '#9f7aea'}}>
                <StatisticBoxIcon><div style={{fontSize: '2em'}}/></StatisticBoxIcon>
            </StatisticBoxIconContainer>
            <h2 css={tw`text-white`}>Tokens Created</h2>
            <h2 css={tw`text-lg text-white`}>0/3</h2>
        </StatisticBoxInner>
    </StatisticBoxOuter>
</div>
)