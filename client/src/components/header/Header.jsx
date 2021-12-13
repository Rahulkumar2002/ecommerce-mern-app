
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    header: {
        background: "#2874f0",
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        marignLeft: 4,
        width: 10,
        height: 10
    },
    container: {
        display: "flex"
    },
    component: {
        marginLeft: "12%",
        lineHeight: 0
    },
    subHeading: {
        fontStyle: "italic"
    }
})

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <Toolbar >
                <Box className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography style={{ fontSize: 10 }} className={classes.subHeading}>Explore Plus</Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;