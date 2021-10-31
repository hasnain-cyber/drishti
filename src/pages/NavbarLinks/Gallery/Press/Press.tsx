import { Box, Paper } from "@mui/material";
import './Press.scss'

const cardArray = [
    {
        imagePath: 'assets/gallery/Press1.jpg',
    },
    {
        imagePath: 'assets/gallery/press2.jpg',
    },
    {
        imagePath: 'assets/gallery/press3.jpg',
    },

]

const Card = (cardObject: { imagePath: string }) => {
    return (
        <Paper elevation={5}
            sx={{ display: 'flex', flexDirection: 'column', gap: 5, width: 300, height: 300, overflow: 'hidden' }}>
            <img src={cardObject.imagePath} alt={""} style={{ maxHeight: '100%' }} className={'infrastructure-card-image'} />
        </Paper>
    )
}

const Press = () => {
    return (
        <Box display={'flex'} gap={5} flexWrap={'wrap'} padding={'3%'} justifyContent={'center'}>
            {cardArray.map(element => <Card imagePath={element.imagePath} />)}
        </Box>
    )
}

export default Press
