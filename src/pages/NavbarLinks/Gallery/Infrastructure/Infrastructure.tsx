import {Box, Paper, Typography} from "@mui/material";
import './Infrastructure.scss'

const cardArray = [
    {
        imagePath: 'assets/gallery/1.bmp',
        text: 'Dr B Phatak along with Dr NK Jain taken to the inaugural site by Dr Sunil Dutta, CEO IITI Drishti CPS Foundation.'
    },
    {
        imagePath: 'assets/gallery/2.bmp',
        text: 'Foundation stone being unveiled by Dr B Phatak Chairman Board of Governors.'
    },
    {
        imagePath: 'assets/gallery/3.bmp',
        text: 'Auspicious Inaugural ribbon being cut by Dr B Phatak and Dr NK Jain: 12 Aug 21.'
    },
    {
        imagePath: 'assets/gallery/4.bmp',
        text: 'Dr B Phatak Chairman Board of Governors being briefed by Dr Sunil Dutta CEO IITI Drishti CPS Foundation.'
    },
    {
        imagePath: 'assets/gallery/5.bmp',
        text: 'Team Drishti with Dr B Phatak and Staff Members of IIT Indore.'
    }
]

const Card = (cardObject: { imagePath: string, text: string }) => {
    return (
        <Paper elevation={5}
               sx={{display: 'flex', flexDirection: 'column', gap: 5, width: 300, height: 400, overflow: 'hidden'}}>
            <img src={cardObject.imagePath} alt={cardObject.text} style={{maxHeight: '60%'}} className={'infrastructure-card-image'}/>
            <Typography textAlign={'center'} padding={1} fontFamily={'Prompt'}>{cardObject.text}</Typography>
        </Paper>
    )
}

const Infrastructure = () => {
    return (
        <Box display={'flex'} gap={5} flexWrap={'wrap'} padding={'3%'} justifyContent={'center'}>
            {cardArray.map(element => <Card imagePath={element.imagePath} text={element.text}/>)}
        </Box>
    )
}

export default Infrastructure
