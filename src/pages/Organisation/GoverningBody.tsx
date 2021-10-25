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
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/2ddc24440c773527b2a3e84425e4e6b1.jpg',
        imageTitle: 'Dr.Bhupesh Kumar Lad',
        imageText: 'Project Director &amp; Member Secretary, IITI DRISHTI CPS Foundation, Indian Institute of Technology Indore.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/b9638ce8312a37b7b8ae296b1bfe2e21.jpg',
        imageTitle: 'Prof.Uday Shanker Dixit',
        imageText: 'Indian Institute of Technology Guwahati: Academic Representative.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/8e8a61d47430149d9de5218c95e4d9ee.jpg',
        imageTitle: 'Prof.A.K.Darpe',
        imageText: 'Indian Institute of Technology Delhi: Academic Representative.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/a5d0f32249cff28b6cedbd3da6c7085c.jpg',
        imageTitle: 'Prof.Asim Tewari',
        imageText: 'Indian Institute of Technology Bombay: Academic Representative.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/3bd9775772f1d7bd2cdfe99460f2440d.jpg',
        imageTitle: 'Prof.Arnab Bhattacharya',
        imageText: 'Indian Institute of Technology Kanpur: Academic Representative.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/2ba53e4fe4527d35cdec6a7c3fb4ecb6.jpg',
        imageTitle: 'Mr.Amit Agrawal',
        imageText: 'Founder and Chief Operations, Sixth Sense Consultancy LLP &amp;; MD, Cyber Infrastructure (P) Ltd.Indore: Industry Representative.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/3ef8d10aea741fb6a351cf2b0dca28b4.jpeg',
        imageTitle: 'Dr.Maitrayee Nanda',
        imageText: 'Ex Secretary, AR &amp; DB, DRDO, Ministry of Defence: Govt/PSUs Representative.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/b3ef3acb10e8af08c37164f3f095e78e.jpg',
        imageTitle: 'Mr.K.R.Murali Mohan',
        imageText: 'Mission Director, Mission Office, DST &amp;; Scientist-G &amp; Head, Frontier &amp; Futuristic Technologies Division, Department of Science &amp; Technology, Ministry of Science &amp; Technology, Delhi.'
    }, {
        imageUrl: 'http://drishticps.iiti.ac.in/files_upload/faculty_images/12de5a928bcaf2b3cafbfd588af593bc.jpg',
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
                   gap: 2
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
