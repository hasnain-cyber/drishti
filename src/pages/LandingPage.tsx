import {Box, Button, Paper, Typography} from "@mui/material"
import Carousel from "react-material-ui-carousel"
import Navbar from "../components/Navbar"

const LandingPage = () => {
    return (
        <Box>
            <Navbar/>
            {/* 1st section */}
            <Box padding={10} marginX={'auto'} width={'100%'} maxWidth={800}>
                <Paper elevation={5}>
                    <Box padding={5}>
                        <Typography variant="h3" textAlign={'center'} fontFamily={'Oswald'}
                                    sx={{textDecoration: 'underline', marginBottom: 5}}>Welcome to Drishti
                            CPS</Typography>
                        <Typography variant="body1" textAlign={'center'} fontFamily={'Prompt'}>The Technology Innovation Hub (TIH) falls under
                            the
                            aegis of the
                            national mission on interdisciplinary cyber physical systems and is named IITI DRISHTI CPS
                            Foundation: Driving Innovation through Simulation Hub for Technologies in Interdisciplinary
                            Cyber Physical Systems. The overarching goal of DRISHTI-CPS is to develop an eco-system that
                            will enable knowledge generation through basic and applied research and foster an
                            interactive
                            environment where innovative products can be developed through joint efforts of industry and
                            academia.</Typography>
                    </Box>
                </Paper>
            </Box>

            {/* 2nd section */}
            <Box padding={10} display={'flex'} flexDirection={'column'} gap={10}>
                <Box display={'flex'} gap={5}>
                    <Box display={'flex'} flexDirection={'column'} flex={1} justifyContent={'center'}>
                        <Typography variant="h3">VISION</Typography>
                        <Typography variant="body1">To become a pioneering center in simulation, modelling and
                            visualization of cyber physical systems that will bolster Indian manufacturing via
                            development and commercialization of state-of-the-art products and creation of skilled human
                            resource (at all levels from researchers and entrepreneurs) and become a key enabler in
                            catalyzing “Industry 4.0” to realize the vision of “Digital India”. </Typography>
                    </Box>
                    <Box display={'flex'} flex={1} justifyContent={'center'} alignItems={'center'}>
                        <img src={'/assets/drishti_logo.png'} width={250} height={200} alt="drishti_logo"/>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} flex={1} justifyContent={'center'}>
                        <Typography variant="h3">MISSION</Typography>
                        <Typography variant="body1">To develop a seamless platform by synchronizing and integrating
                            various entities, making a fountainhead of knowledge, Skill enhancement, Research,
                            Technology and Product Development, by innovation and commercialization for effecting
                            resource optimization and sustainability. </Typography>
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography variant="h3">MISSION</Typography>
                    <Typography variant="body1" whiteSpace={'pre-line'} textAlign={'center'}>
                        {`Modelling, simulation and decision making in cyber physical Industrial systems
                        Modeling and performance optimization of Energy systems
                        CPS-based Prognostics and health management (PHM)
                        Enabling precise and sustainable agriculture using CPS
                        Modeling and simulation for Biological and healthcare systems
                        Environmental systems modeling
                        Dynamical systems modeling and simulation
                        Modeling and simulation of material behavior
                        Social behavior modeling and simulation`}
                    </Typography>
                </Box>
            </Box>

            {/* 3rd section - carousel */}
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Typography variant="h5" style={{textDecoration: 'underline'}}
                            fontWeight={'bold'}>Announcements</Typography>
                <Carousel>
                    <Paper>
                        <Box display={'flex'} bgcolor={'lightblue'}>
                            <img src={"/assets/carousel_pic1.jpg"} alt="carousel_pic1" width={100}/>
                            <Typography variant="body1">Foundation stone being unveiled by Dr B Phatak, Chairman, and
                                Board of governors.</Typography>
                        </Box>
                    </Paper>
                    <Paper>
                        <Box display={'flex'} bgcolor={'lightblue'}>
                            <img src={"/assets/carousel_pic2.jpg"} alt="carousel_pic2" width={100}/>
                            <Typography variant="body1">Auspicious Inaugural ribbon being cut by Dr B Phatak and Dr NK
                                Jain: 12 Aug 21</Typography>
                        </Box>
                    </Paper>
                    <Paper>
                        <Box display={'flex'} flexDirection={'column'} bgcolor={'lightblue'}>
                            <img src={"/assets/drishti_logo.png"} alt="drishti_logo" width={100}/>
                            <Typography variant="body1">Advertisement for the post of finance manager.</Typography>
                            <Button variant="contained">Apply online</Button>
                            <Typography variant="body1" fontStyle={'italic'}>Last Date to apply: 21st September,
                                2021</Typography>
                        </Box>
                    </Paper>
                    <Paper>
                        <Box display={'flex'} flexDirection={'column'} bgcolor={'lightblue'} alignItems={'center'}
                             minWidth={500}>
                            <img src={"/assets/drishti_logo.png"} alt="drishti_logo" width={100}/>
                            <Typography variant="body1">Newsletter</Typography>
                            <Button variant="contained">View</Button>
                        </Box>
                    </Paper>
                </Carousel>
            </Box>

            {/* 4th section */}
            <Box borderBottom={2} textAlign={'center'}>
                <Typography variant="h5">ACTIVITIES</Typography>
                <Typography variant='body1'>The TIH will work with the intent to nurture a culture of entrepreneurship
                    not just within the institute but across Central India. There would be a thrust towards skill
                    development, incubating start-ups, R&D activities, industry engagement, and serving the rural and
                    underprivileged populace. While engaged in such activity, the TIH would work towards the important
                    goal of self-sustainability.</Typography>
            </Box>
        </Box>
    )
}

export default LandingPage
