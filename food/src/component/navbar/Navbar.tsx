"use client";
import SearchIcon from "@mui/icons-material/Search";
import NavbarMenu from "@/context/NavbarMenu";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "@/assets/Logo";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ModalText from "@/context/Modal";
import ModalTextPass from "@/context/ModalRememberPassword";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Stack direction="row" alignItems={"center"} justifyContent={"space-between"} width="1210px" padding="8px 24px" >
        <Stack direction="row" gap={3} alignItems={"center"}>
          <Logo />
          <Stack direction="row" gap={1}>
            <NavbarMenu name="НҮҮР" />
            <NavbarMenu name="ХООЛНЫ ЦЭС" />
            <NavbarMenu name="ХҮРГЭЛТИЙН БҮС" />
          </Stack>
        </Stack>
        <Stack direction="row" gap={1} alignItems={"center"}>
          <Stack direction="row"  spacing={1}  border={"1px solid #000"}  width={"228px"} padding={"8px 16px"} borderRadius={2}  gap={1}   alignItems="center"  height="24px">
            <SearchIcon />
            <input type="text"   placeholder="Хайх" style={{ fontSize: 16, border: "none",  width: 192, outline: "none",margin: 0, }} />
          </Stack>
          <Stack direction={"row"}  alignItems="center" padding={"8px 16px"} gap={1}>
            <ShoppingBasketOutlinedIcon />
            <NavbarMenu name="Сагс" />
          </Stack>
          <Stack direction={"row"} alignItems="center" padding={"8px 16px"} gap={1}  >
            <PersonOutlinedIcon />
            <Stack>
              <Button onClick={handleOpen} style={{fontFamily: "roboto",fontSize: "14px",fontWeight: "700",color: "#000",padding: "8px 16px",margin: 0,}} >Нэвтрэх</Button>
              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={{display: "flex", justifyContent: "center", alignItems:"center"}} >
                <Box sx={{borderRadius: '16px', border: '1px solid #DADCE0', bgcolor: '#fff', width: '384px', padding: '32px',display:'flex', flexDirection:'column',  gap: '48px'}}>
                  <Typography style={{fontSize: '28px', fontWeight: 'initial', fontFamily: 'roboto', alignItems: 'center', display: 'flex', justifyContent: ' center', margin: 0}}>Нэвтрэх</Typography>
                  <Stack display={"flex"} flexDirection={"column"} gap={2}>
                    <Stack>
                       <ModalText name="Имэйл"/>
                       <input type="text" placeholder="Имэйл хаягаа оруулна уу" style={{fontSize: 16, outline: "none",height: '32px', width: '352px', padding:'8px 16px', background:'#F7F7F8', border:'1px solid #ECEDF0', justifyContent:'space-between', borderRadius: '8px', fontWeight: 'lighter'}}/>
                    </Stack>  
                    <Stack>
                        <ModalText name="Нууц үг"/>
                        <Stack direction={"row"} width={'352px'} padding={'8px 16px'} bgcolor={'#F7F7F8'} border={'1px solid #ECEDF0'} justifyContent={'space-between'} borderRadius={1} height="32px">
                            <input type="password" style={{ fontSize: 16, border: "none", outline: "none",margin: 0, background:'#F7F7F8' , fontWeight: 'lighter'}} placeholder="Нууц үг"/>
                            <VisibilityOffOutlinedIcon/>
                        </Stack>
                        <ModalTextPass  name="Нууц үгээ сэргээх"/>
                    </Stack>  
                  </Stack>
                  <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                    <button style={{background: '#18BA51', height: '48px', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px', fontSize: '16px',    cursor: 'pointer'}}>Нэвтрэх</button>
                    <button style={{background: 'white', height: '48px',  border: 'none', padding: '8px 16px', fontSize: '16px',    cursor: 'pointer'}}>Эсвэл</button>
                    <button style={{background: 'white', height: '48px',  border: '1px solid #18BA51', borderRadius: '4px', padding: '8px 16px', fontSize: '16px' ,    cursor: 'pointer'}}>Бүртгүүлэх</button>
                  </Box>
                </Box>
              </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
