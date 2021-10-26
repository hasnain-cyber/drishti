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
    }, {
        imageUrl: 'assets/organization/bhupesh.jpg',
        imageTitle: 'Dr.Bhupesh Kumar Lad',
        imageText: 'Project Director &amp; Member Secretary, IITI DRISHTI CPS Foundation, Indian Institute of Technology Indore.'
    }, {
        imageUrl: 'assets/organization/uday.jpg',
        imageTitle: 'Prof.Uday Shanker Dixit',
        imageText: 'Indian Institute of Technology Guwahati: Academic Representative.'
    }, {
        imageUrl: 'assets/organization/darpe.jpg',
        imageTitle: 'Prof.A.K.Darpe',
        imageText: 'Indian Institute of Technology Delhi: Academic Representative.'
    }, {
        imageUrl: 'assets/organization/asim.jpg',
        imageTitle: 'Prof.Asim Tewari',
        imageText: 'Indian Institute of Technology Bombay: Academic Representative.'
    }, {
        imageUrl: 'assets/organization/arnab.jpg',
        imageTitle: 'Prof.Arnab Bhattacharya',
        imageText: 'Indian Institute of Technology Kanpur: Academic Representative.'
    }, {
        imageUrl: 'assets/organization/amit.jpg',
        imageTitle: 'Mr.Amit Agrawal',
        imageText: 'Founder and Chief Operations, Sixth Sense Consultancy LLP &amp;; MD, Cyber Infrastructure (P) Ltd.Indore: Industry Representative.'
    }, {
        imageUrl: 'assets/organization/maitrayee.jpg',
        imageTitle: 'Dr.Maitrayee Nanda',
        imageText: 'Ex Secretary, AR &amp; DB, DRDO, Ministry of Defence: Govt/PSUs Representative.'
    }, {
        imageUrl: 'assets/organization/murali.jpg',
        imageTitle: 'Mr.K.R.Murali Mohan',
        imageText: 'Mission Director, Mission Office, DST &amp;; Scientist-G &amp; Head, Frontier &amp; Futuristic Technologies Division, Department of Science &amp; Technology, Ministry of Science &amp; Technology, Delhi.'
    }, {
        imageUrl: 'assets/organization/sunil.jpg',
        imageTitle: 'Dr.Sunil Dutta',
        imageText: 'Chief Executive Officer, IITI DRISHTI CPS Foundation, Indian Institute of Technology Indore.'
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
                   gap: 1,
               }}>
            <img src={cardDetails.imageUrl} alt={cardDetails.imageTitle} width={'90%'}
                 style={{border: '2px solid black'}}/>
            <Typography variant={'h6'} textAlign={'center'} fontFamily={'Oswald'}>{cardDetails.imageTitle}</Typography>
            <Typography textAlign={'center'} sx={{fontSize: 14}}>{cardDetails.imageText}</Typography>
        </Paper>
    )
}

const GoverningBody = () => {
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
                HUB GOVERNING BODY
            </Typography>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} gap={5}>
                {Card(cardDetailsList[0])}
                {Card(cardDetailsList[1])}
                {Card(cardDetailsList[2])}
                {Card(cardDetailsList[3])}
                {Card(cardDetailsList[4])}
                {Card(cardDetailsList[5])}
                {Card(cardDetailsList[6])}
                {Card(cardDetailsList[7])}
                {Card(cardDetailsList[8])}
                {Card(cardDetailsList[9])}
                {Card(cardDetailsList[10])}
            </Box>
        </Box>
    )
}
export default GoverningBody
