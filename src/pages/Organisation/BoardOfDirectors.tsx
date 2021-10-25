import {Box, Paper, Typography} from '@mui/material'
import React from 'react'

const cardDetailsList = [
    {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/409f6ea2337a78584191c9b5a6c11693.jpg',
        imageTitle: 'Prof.Neelesh Kumar Jain',
        imageText: 'Director (Officiating), Indian Institute of Technology Indore.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/4e05e5a1f2122aca428a6da933b29492.jpg',
        imageTitle: 'Dr.Anand Iyamperumal Palani',
        imageText: 'Dean R&amp; D, Indian Institute of Technology Indore.'
    },
]

const Card = (cardDetails: { imageUrl: string, imageTitle: string, imageText: string }) => {
    return (
        <Paper elevation={5}
               sx={{
                   width: 300,
                   height: 500,
                   padding: 2,
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   alignItems: 'center',
                   gap: 2
               }}>
            <img src={cardDetails.imageUrl} alt={cardDetails.imageTitle} width={'90%'}
                 style={{border: '2px solid black'}}/>
            <Typography variant={'h6'} textAlign={'center'} fontFamily={'Oswald'}>{cardDetails.imageTitle}</Typography>
            <Typography textAlign={'center'} sx={{fontSize: 14}}>{cardDetails.imageText}</Typography>
        </Paper>
    )
}

const BoardOfDirectors = () => {
    return (
        <Box>
            <Typography
                variant="h6"
                textAlign={"center"}
                fontFamily={"Prompt"}
                fontWeight={"bold"}
                color={"secondary.dark"}
                marginY={5}
                sx={{textDecoration: 'underline'}}
            >
                BOARD OF DIRECTORS
            </Typography>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} gap={5}>
                {Card(cardDetailsList[0])}
                {Card(cardDetailsList[1])}
            </Box>
        </Box>
    )
}

export default BoardOfDirectors
