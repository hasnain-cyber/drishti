import {Box, Paper, Typography} from "@mui/material"
import Carousel from "react-material-ui-carousel"
import Navbar from "../../components/Navbar"

const buildCard = (cardDetailsObject: { title: String, text: String }) => {
    return (
        <Paper elevation={5}
               sx={{
                   padding: 5,
                   width: 400,
                   minHeight: 500,
                   backgroundColor: 'primary.dark',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center'
               }}>
            <Typography variant="h4" textAlign={'center'} fontFamily={'Oswald'}
                        sx={{
                            textDecoration: 'underline',
                            marginBottom: 2
                        }}>{cardDetailsObject.title}</Typography>
            <Typography variant="body1" textAlign={'center'}
                        fontFamily={'Prompt'}>{cardDetailsObject.text}</Typography>
        </Paper>
    )
}

const LandingPage = () => {
    return (
        <Box bgcolor={'primary.light'}>
            <Navbar/>
            {/* 1st section */}

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                backgroundImage: 'url(/assets/campus_bg.bmp)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }} height={'100vh'}>
                <Box margin={5} maxWidth={800}>
                    <Typography variant="h2" textAlign={'center'} fontFamily={'Oswald'}
                                marginBottom={5}
                                sx={{textDecoration: 'underline'}} color={'white'}>WELCOME TO DRISHTI</Typography>
                    <Typography variant={'h6'} textAlign={'center'} fontFamily={'Prompt'} color={'white'}>Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Eum eveniet facilis fugiat, hic ipsum iste
                        laboriosam nesciunt nisi omnis quidem quo reiciendis repellat soluta tempora tenetur totam,
                        ullam</Typography>
                </Box>
            </Box>

            {/* 2nd section */}
            <Box padding={'5%'}>
                <Typography variant="h3" textAlign={'center'} fontFamily={'Oswald'}
                            marginBottom={5} sx={{textDecoration: 'underline'}}>ABOUT US</Typography>
                <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={5}>

                    {buildCard({
                        title: 'VISION', text: 'Lorem ipsum\n' +
                            '                        dolor sit amet, consectetur adipisicing elit. Eum eveniet facilis fugiat, hic ipsum iste\n' +
                            '                        laboriosam nesciunt nisi omnis quidem quo reiciendis repellat soluta tempora tenetur totam,\n' +
                            '                        ullam Lorem ipsum\n' +
                            '                        dolor sit amet, consectetur adipisicing elit. Eum eveniet facilis fugiat, hic ipsum iste\n' +
                            '                        laboriosam nesciunt nisi omnis quidem quo reiciendis repellat soluta tempora tenetur totam,\n' +
                            '                        ullam'
                    })}
                    {buildCard({
                        title: 'MISSION', text: 'Lorem ipsum\n' +
                            '                        dolor sit amet, consectetur adipisicing elit. Eum eveniet facilis fugiat, hic ipsum iste\n' +
                            '                        laboriosam nesciunt nisi omnis quidem quo reiciendis repellat soluta tempora tenetur totam,\n' +
                            '                        ullam Lorem ipsum\n' +
                            '                        dolor sit amet, consectetur adipisicing elit. Eum eveniet facilis fugiat, hic ipsum iste\n' +
                            '                        laboriosam nesciunt nisi omnis quidem quo reiciendis repellat soluta tempora tenetur totam,\n' +
                            '                        ullam'
                    })}
                    {buildCard({
                        title: 'THRUST AREAS',
                        text: 'Lorem ipsum\n' +
                            '                        dolor sit amet, consectetur adipisicing elit. Eum eveniet facilis fugiat, hic ipsum iste\n' +
                            '                        laboriosam nesciunt nisi omnis quidem quo reiciendis repellat soluta tempora tenetur totam,\n' +
                            '                        ullam Lorem ipsum\n' +
                            '                        dolor sit amet, consectetur adipisicing elit. Eum eveniet facilis fugiat, hic ipsum iste\n' +
                            '                        laboriosam nesciunt nisi omnis quidem quo reiciendis repellat soluta tempora tenetur totam,\n' +
                            '                        ullam'
                    })}
                </Box>
            </Box>

            {/* 3rd section - carousel */}
            <Box paddingX={5}>
                <Typography variant="h3" textAlign={'center'} fontFamily={'Oswald'}
                            marginBottom={5} sx={{textDecoration: 'underline'}}>ANNOUNCEMENTS</Typography>
                <Carousel autoPlay={false} animation={'fade'}>
                    <Paper variant={'outlined'}
                           sx={{
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               justifyContent: 'center',
                               gap: 5,
                               backgroundColor: 'white',
                               height: 500,
                               padding: '5%'
                           }}>
                        <img src={"/assets/carousel_pic1.jpg"} alt="carousel_pic1" width={400}
                             style={{maxWidth: '95%', border: '2px solid black'}}/>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Foundation
                            stone being
                            unveiled by Dr B Phatak, Chairman, and
                            Board of governors.</Typography>
                    </Paper>
                    <Paper variant={'outlined'}
                           sx={{
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               justifyContent: 'center',
                               gap: 5,
                               backgroundColor: 'white',
                               height: 500,
                               padding: '5%'
                           }}>
                        <img src={"/assets/carousel_pic2.jpg"} alt="carousel_pic2" width={400}
                             style={{maxWidth: '95%', border: '2px solid black'}}/>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Auspicious Inaugural
                            ribbon being cut by Dr B Phatak and Dr NK
                            Jain: 12 Aug 21</Typography>
                    </Paper>
                    <Paper variant={'outlined'}
                           sx={{
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               justifyContent: 'center',
                               gap: 5,
                               backgroundColor: 'white',
                               height: 500,
                               padding: '5%'
                           }}>
                        <img src={"/assets/drishti_logo.png"} alt="drishti_logo" width={400}
                             style={{maxWidth: '95%', border: '2px solid black'}}/>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Advertisement for the
                            post of finance manager.</Typography>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'} fontStyle={'italic'}
                                    fontWeight={'bold'}>Last Date to apply: 21st September, 2021</Typography>
                    </Paper>
                    <Paper variant={'outlined'}
                           sx={{
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               justifyContent: 'center',
                               gap: 5,
                               backgroundColor: 'white',
                               height: 500,
                               padding: '5%'
                           }}>
                        <img src={"/assets/drishti_logo.png"} alt="drishti_logo" width={400}
                             style={{maxWidth: '95%', border: '2px solid black'}}/>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Advertisement for the
                            post of finance manager.</Typography>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'} fontStyle={'italic'}
                                    fontWeight={'bold'}>Newsletter</Typography>
                    </Paper>
                </Carousel>
            </Box>

            {/*4th section*/}
            <Box paddingY={'5%'}>
                <Typography variant="h3" textAlign={'center'} fontFamily={'Oswald'}
                            sx={{textDecoration: 'underline'}}>INFRASTRUCTURE</Typography>
                <Box padding={'5%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={5}>
                    {buildCard({
                        title: 'TECHNOLOGY DEVELOPMENT',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae!'
                    })}
                    {buildCard({
                        title: 'ENTREPRENEURS',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae!'
                    })}
                    {buildCard({
                        title: 'HRD AND SKILL DEVELOPMENT',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae!'
                    })}
                    {buildCard({
                        title: 'CENTRE OF EXCELLENCE',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae!'
                    })}
                    {buildCard({
                        title: 'INTERNATIONAL COLLABORATIONS',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae culpa cumque cupiditate debitis doloremque, dolores ea error eveniet excepturi, magnam minus neque quas qui quis sunt suscipit vel vitae!'
                    })}
                </Box>
            </Box>

            {/*5th section - Footer*/}
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={5} bgcolor={'secondary.light'}
                 padding={'2%'} borderTop={2}>
                <Box maxWidth={500}>
                    <Typography variant="h4" textAlign={'center'} fontFamily={'Oswald'} marginBottom={2} sx={{
                        textDecoration: 'underline',
                    }}>CONTACT US</Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        IITI Drishti CPS Foundation
                        IIT Indore Campus,
                        Khandwa Road, Simrol,
                        Indore 453552, INDIA</Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        Email : officedrishti [at] iiti.ac.in
                    </Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        Phone : +91-731-660 3372(Extn- 3372)
                    </Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        Website : drishticps.iiti.ac.in
                    </Typography>
                </Box>
                <Box maxWidth={500}>
                    <Typography variant="h4" textAlign={'center'} fontFamily={'Oswald'} marginBottom={2} sx={{
                        textDecoration: 'underline',
                    }}>CONTACT US</Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        IITI Drishti CPS Foundation
                        IIT Indore Campus,
                        Khandwa Road, Simrol,
                        Indore 453552, INDIA</Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        Email : officedrishti [at] iiti.ac.in
                    </Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        Phone : +91-731-660 3372(Extn- 3372)
                    </Typography>
                    <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'} marginBottom={2}>
                        Website : drishticps.iiti.ac.in
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage
