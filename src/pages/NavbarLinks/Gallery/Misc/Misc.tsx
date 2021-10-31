import { Box, Paper, Typography } from "@mui/material";
import './Misc.scss'

const cardArray = [
    {
        imagePath: 'assets/gallery/misc.jpeg',
        text: 'Ecosystem of Cyber Physical Systems: IITI Drishti CPS Foundation'
    }
]

const Card = (cardObject: { imagePath: string, text: string }) => {
    return (
        <Paper elevation={5}
            sx={{ display: 'flex', flexDirection: 'column', gap: 5, width: 300, height: 300, overflow: 'hidden' }}>
            <img src={cardObject.imagePath} alt={cardObject.text} style={{ maxHeight: '60%' }} className={'infrastructure-card-image'} />
            <Typography textAlign={'center'} padding={1} fontFamily={'Prompt'}>{cardObject.text}</Typography>
        </Paper>
    )
}

const Misc = () => {
    return (
        <Box display={'flex'} gap={5} flexWrap={'wrap'} padding={'3%'} justifyContent={'center'}>
            {cardArray.map(element => <Card imagePath={element.imagePath} text={element.text} />)}
        </Box>
    )
}

export default Misc
