import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)({
  background: "#f5f5f5",
});

const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0  15px",
  },
});

const OptionsWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > svg': {
        marginLeft : 20
    }
    
});

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" />
        <img
          src={gmailLogo}
          alt="logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SearchWrapper>
          <Search color="action" />
          <InputBase placeholder="Search Mail" />
          <Tune color="action" />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
