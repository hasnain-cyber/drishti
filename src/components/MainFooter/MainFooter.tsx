import {Box, Typography} from "@mui/material";
import Facebook from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../index.scss'
import './MainFooter.scss'
import {Instagram, LinkedIn} from "@material-ui/icons";

const LinkText = (props: { linkPath: string, linkText: string }) => {
    return (
        <a className={'main-footer-quick-links'} href={props.linkPath} rel="noreferrer"
           target={'_blank'}>{props.linkText}</a>
    )
}

const MainFooter = () => {
    return (
        <Box padding={'2%'} bgcolor={'secondary.light'} display={'flex'} className={'main-footer'}>
            <Box display={'flex'} flexDirection={'column'} flex={1}>
                <Typography variant={'h4'} fontFamily={'Oswald'} color={'primary.dark'} marginBottom={1}
                            sx={{textDecoration: 'underline'}}>Contact Us</Typography>
                <Typography>IITI Drishti CPS Foundation<br/>
                    IIT Indore Campus,<br/>
                    Khandwa Road, Simrol,<br/>
                    Indore 453552, INDIA</Typography>
                <Typography>Email : officedrishti [at] iiti.ac.in</Typography>
                <Typography>Phone : +91-731-660 3372(Extn- 3372)</Typography>
                <Typography>Website : drishticps.iiti.ac.in</Typography>
                <Box display={'flex'} gap={2} paddingY={'1%'}>
                    <a className={'footer-facebook-icon'} href={'/'}><Facebook fontSize={'large'}/></a>
                    <a className={'footer-twitter-icon'} href={'/'}><TwitterIcon fontSize={'large'}/></a>
                    <a className={'footer-instagram-icon'} href={'/'}><Instagram fontSize={'large'}/></a>
                    <a className={'footer-linkedIn-icon'} href={'/'}><LinkedIn fontSize={'large'}/></a>
                </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} flex={1}>
                <Typography variant={'h4'} fontFamily={'Oswald'} color={'primary.dark'} marginBottom={1}
                            sx={{textDecoration: 'underline'}}>Quick Links</Typography>
                <LinkText linkPath={'https://iiti.ac.in/'} linkText={'IIT Indore'}/>
                <LinkText linkPath={'https://nmicps.gov.in/'} linkText={'NM-ICPS'}/>
                <LinkText linkPath={'http://ciieir.iiti.ac.in/'} linkText={'CIIEIR'}/>
                <LinkText linkPath={''} linkText={'Tenders'}/>
            </Box>
            <Box>
                <Typography variant={'h4'} fontFamily={'Oswald'} color={'primary.dark'} marginBottom={1}
                            sx={{textDecoration: 'underline'}}>Locate Us</Typography>
                <iframe
                    title={'iit_indore_location'}
                    style={{border: '2px solid black'}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.56856793072!2d75.9185344147471!3d22.520364640561816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIIT%20Indore!5e0!3m2!1sen!2sin!4v1635057115224!5m2!1sen!2sin"/>
            </Box>
        </Box>
    )
}

export default MainFooter
