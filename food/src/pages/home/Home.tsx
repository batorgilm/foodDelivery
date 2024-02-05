import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Hero from "@/component/Hero";
import { Stack } from "@mui/material";

function HomeScreen() {
    return(
        <Stack       sx={{
            direction: 'row',
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <Navbar/>
            <Hero/>
            <Footer/>
        </Stack>
    )
}

export default HomeScreen;