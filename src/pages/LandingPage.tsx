import {Box, Paper, Typography} from "@mui/material"
import Carousel from "react-material-ui-carousel"
import Navbar from "../components/Navbar"

const buildCard = (cardDetailsObject: { title: String, text: String }) => {
    return (
        <Paper elevation={5}>
            <Box padding={5} width={400}>
                <Typography variant="h3" textAlign={'center'} fontFamily={'Oswald'}
                            sx={{
                                textDecoration: 'underline',
                                marginBottom: 5
                            }}>{cardDetailsObject.title}</Typography>
                <Typography variant="body1" textAlign={'center'}
                            fontFamily={'Prompt'}>{cardDetailsObject.text}</Typography>
            </Box>
        </Paper>
    )
}

const LandingPage = () => {
    return (
        <Box>
            <Navbar/>
            {/* 1st section */}
            <Box padding={10} marginX={'auto'} width={'100%'} maxWidth={1200}>
                <Paper elevation={5}>
                    <Box padding={10}>
                        <Typography variant="h2" textAlign={'center'} fontFamily={'Oswald'}
                                    marginBottom={5}
                                    sx={{textDecoration: 'underline'}}>Welcome to Drishti
                            CPS</Typography>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>The Technology Innovation
                            Hub (TIH) falls under
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
            <Box padding={10} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={5}>
                {buildCard({
                    title: 'VISION', text: 'To become a pioneering center in simulation, modelling and\n' +
                        '                        visualization of cyber physical systems that will bolster Indian manufacturing via\n' +
                        '                        development and commercialization of state-of-the-art products and creation of skilled human\n' +
                        '                        resource (at all levels from researchers and entrepreneurs) and become a key enabler in\n' +
                        '                        catalyzing “Industry 4.0” to realize the vision of “Digital India”.'
                })}
                {buildCard({
                    title: 'MISSION', text: 'To develop a seamless platform by synchronizing and integrating\n' +
                        '                        various entities, making a fountainhead of knowledge, Skill enhancement, Research,\n' +
                        '                        Technology and Product Development, by innovation and commercialization for effecting\n' +
                        '                        resource optimization and sustainability.'
                })}
                {buildCard({
                    title: 'THRUST AREAS',
                    text: 'Modelling, simulation and decision making in cyber physical Industrial systems\n' +
                        'Modeling and performance optimization of Energy systems\n' +
                        'CPS-based Prognostics and health management (PHM)\n' +
                        'Enabling precise and sustainable agriculture using CPS\n' +
                        'Modeling and simulation for Biological and healthcare systems\n' +
                        'Environmental systems modeling\n' +
                        'Dynamical systems modeling and simulation\n' +
                        'Modeling and simulation of material behavior\n' +
                        'Social behavior modeling and simulation '
                })}
            </Box>

            {/* 3rd section - carousel */}
            <Box paddingX={5} height={'inherit'}>
                <Typography variant="h3" textAlign={'center'} fontFamily={'Oswald'}
                            sx={{
                                textDecoration: 'underline',
                                marginBottom: 2
                            }}>
                    Announcements
                </Typography>
                <Carousel autoPlay={false} animation={'slide'}>
                    <Paper variant={'outlined'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={5} gap={5}
                             height={'inherit'}>
                            <img src={"/assets/carousel_pic1.jpg"} alt="carousel_pic1" width={500}
                                 style={{maxWidth: '90vw'}}/>
                            <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Foundation stone being
                                unveiled by Dr B Phatak, Chairman, and
                                Board of governors.</Typography>
                        </Box>
                    </Paper>
                    <Paper variant={'outlined'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={5} gap={5}
                             height={'inherit'}>
                            <img src={"/assets/carousel_pic2.jpg"} alt="carousel_pic1" width={500}
                                 style={{maxWidth: '90vw'}}/>
                            <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Auspicious Inaugural
                                ribbon being cut by Dr B Phatak and Dr NK
                                Jain: 12 Aug 21</Typography>
                        </Box>
                    </Paper>
                    <Paper variant={'outlined'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={5} gap={5}
                             height={'inherit'}>
                            <img src={"/assets/drishti_logo.png"} alt="carousel_pic1" width={400}
                                 style={{maxWidth: '90vw'}}/>
                            <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Advertisement for the
                                post of finance manager.</Typography>
                            <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'} fontStyle={'italic'}
                                        fontWeight={'bold'}>Last Date to apply: 21st September,
                                2021</Typography>
                        </Box>
                    </Paper>
                    <Paper variant={'outlined'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingY={5} gap={5}
                             height={'inherit'}>
                            <img src={"/assets/drishti_logo.png"} alt="carousel_pic1" width={400}
                                 style={{maxWidth: '90vw'}}/>
                            <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>Newsletter</Typography>
                        </Box>
                    </Paper>
                </Carousel>
            </Box>

            {/* 4th section */}
            <Box padding={10} marginX={'auto'} width={'100%'} maxWidth={1200}>
                <Paper elevation={5}>
                    <Box padding={10}>
                        <Typography variant="h2" textAlign={'center'} fontFamily={'Oswald'}
                                    marginBottom={5}
                                    sx={{textDecoration: 'underline'}}>ACTIVITIES</Typography>
                        <Typography variant="h6" textAlign={'center'} fontFamily={'Prompt'}>The TIH will work with the
                            intent to nurture a culture of entrepreneurship
                            not just within the institute but across Central India. There would be a thrust towards
                            skill
                            development, incubating start-ups, R&D activities, industry engagement, and serving the
                            rural and
                            underprivileged populace. While engaged in such activity, the TIH would work towards the
                            important
                            goal of self-sustainability.</Typography>
                    </Box>
                </Paper>
            </Box>

            {/*5th section*/}
            <Box padding={10} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={5}>
                {buildCard({
                    title: 'TECHNOLOGY DEVELOPMENT',
                    text: 'One of the core hub activities is aimed towards technology development through various researches. The budget for technology development includes support for R&D projects, prototype development, patenting, and commercialization. It is considered that the budget will comprise of both recurring expenses and non-recurring expenses; however, the actual break-up can vary, based on the sanctioned amount. '
                })}
                {buildCard({
                    title: 'ENTREPRENEURS',
                    text: 'The hub activity, Innovation, Entrepreneurship & Start-ups Ecosystem, will cover EIR, start-up incubation, pre-incubation and other entrepreneurship related activities like investors summit, incubation facilities. Budget for the hub activity accounts for the expenses required in the promotion, incubation, operation and development of start-ups and other entrepreneurial ventures in the domain of the CPS. '
                })}
                {buildCard({
                    title: 'HRD AND SKILL DEVELOPMENT',
                    text: 'Hub activity, HRD & Skill Development, is aimed towards training and development of skilled professionals through fellowships and skill development workshops. Budget for HRD & Skill Development includes fellowship for UG, PG, Doctoral, Faculties and Chair professors, apart from development funds to support UG and PG internships and professional skill development workshops. '
                })}
                {buildCard({
                    title: 'CENTRE OF EXCELLENCE',
                    text: 'A Centre of Excellence (CoE) for System Simulation, Modelling and Visualization will be developed as a part of TIH. The primary focus of the CoE will be translational research, i.e., converting the academic research into industry-oriented technology. The CoE will serve as a common unit for different activities and will facilitate interdisciplinary researches in the field of CPS. '
                })}
                {buildCard({
                    title: 'INTERNATIONAL COLLABORATIONS',
                    text: 'International collaboration serves as a two-way bridge for exchange of information at international platform. Collaborations will introduce state of the art international practices in the field of CPS in technology development in India and provide a platform for show casing the developed technology. In this activity bilateral technology development will be encouraged.  '
                })}
            </Box>

        </Box>
    )
}

export default LandingPage
