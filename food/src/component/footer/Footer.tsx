'use client'
import { Box, Stack, Typography } from "@mui/material";
import LogoWhite from "@/assets/LogoWhite";
import FooterMenu from "@/context/FooterMenu";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FooterBG from "@/assets/FooterBG";

function Footer() {
    return(
        <Box sx={{bgcolor:'#18BA51', height: '545px', display: 'flex', alignItems: "center", justifyContent: "center", position: 'relative', marginTop: '100px'}}>
            <Stack height={'332px'} width={'1200px'} direction={"row"} flexDirection={"column"} gap={'40px'} > 
                <Stack direction={"row"} gap={1} alignItems={"center"} justifyContent={"center"} >
                    <LogoWhite/>
                    <Typography sx={{color: 'white'}}>Food Delivery</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"} sx={{cursor:'pointer'}}>
                    <FooterMenu name="Нүүр"/>
                    <FooterMenu name="Холбоо барих"/>
                    <FooterMenu name="Хоолны цэс"/>
                    <FooterMenu name="Үйлчилгээний нөхцөл"/>
                    <FooterMenu name="Хүргэлтийн бүс"/>
                    <FooterMenu name="Нууцлалын бодлого"/>
                </Stack>
                <Stack direction={"row"} gap={'18px'} justifyContent={"center"}>
                    <FacebookOutlinedIcon sx={{color: 'white', height: '46px', width: '40px'}}/>
                    <InstagramIcon sx={{color: 'white' , height: '46px', width: '35px'}}/>
                    <TwitterIcon sx={{color: 'white' ,height: '46px', width: '40px'}}/>
                </Stack>
                <Stack border={'0.5px solid white'}></Stack>
                <Stack direction={"row"} gap={1} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
                    <Typography color={'white'} fontSize={'16px'} fontWeight={'400'} fontFamily={'arial'}>© 2024 Pinecone Foods LLC </Typography>
                    <Typography color={'white'} fontSize={'16px'} fontWeight={'400'} fontFamily={'arial'}>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
                </Stack>
            </Stack>
            <Box sx={{position: 'absolute', flexShrink: 0, width: '100%', height:' 545px'}}>
                <FooterBG/>
            </Box>
        </Box>
    )
}

export default Footer;
