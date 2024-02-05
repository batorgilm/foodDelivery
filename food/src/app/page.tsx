import HomeScreen from "@/pages/home/Home";
import { Box } from "@mui/material";



function HOme() {
  return (
    <Box
      sx={{
        direction: 'row',
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <HomeScreen/>
    </Box>
  );
}

export default HOme;
