import { Stack, Box, Typography } from "@mui/material";
import HeroBG from "@/assets/HeroBG";
import D from "../assets/Group 534.png"


export default function Hero() {

    return(
        <Stack height={'788px'} bgcolor={'#18BA51'} width={'100%'}  direction={"row"} justifyContent={"center"}>
           <Stack width={'1440px'} direction={"row"}>
            <Box sx={{paddingLeft: '120px',paddingTop:'276px', width:'384px', display:'flex', flexDirection: 'column', gap: '23px'}}>
                <Typography fontFamily={'Poppins, sans-serif'} fontSize={'55px'} fontWeight={'600'} lineHeight={'90%'} letterSpacing={'0.55px'} color={'white'}>Pinecone Food Delivery</Typography>
                <Box sx={{border: '0.3px solid white'}}></Box>
                <Typography color={'white'} fontSize={'22px'} fontFamily={'Comfortaa, sans-serif'} lineHeight={'120%'} letterSpacing={'0.22px'}>Horem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </Box>
            <Box sx={{paddingTop:'170px', paddingLeft:'230px'}}>
                <img src={D.src} width={'588px'} height={'438px'}/>
            </Box>
           </Stack>
        </Stack>
    )
}