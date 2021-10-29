import {Box, Paper, Typography} from '@mui/material'
import React from 'react'

const cardDetailsList = [
    {
        imageUrl: 'assets/organization/neelesh.jpg',
        imageTitle: 'Prof.Neelesh Kumar Jain',
        imageText: 'Director (Officiating), Indian Institute of Technology Indore.'
    }, {
        imageUrl: 'assets/organization/anand.jpg',
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
        <Box paddingBottom={5}>
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
