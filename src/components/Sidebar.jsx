import { Drawer, styled } from "@mui/material";
import SidebarContent from "./SidebarContent";
function Sidebar() {
  return (
    <Drawer
      anchor="left"
      open={true}
      hideBackdrop={true}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          background: "#F5F5F5",
              borderRight: "none",
          height : 'cacl(100vh - 64px)'
        }
      }}
    >
      <SidebarContent/>
    </Drawer>
  );
}

export default Sidebar;
