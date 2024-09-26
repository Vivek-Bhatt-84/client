import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import SIDEBAR_DATA from "../config/sidebar.config";

const ComposeButton = styled(Button)({
  background: "#e2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
});
function SidebarContent() {
  return (
    <Box>
      <ComposeButton>
        <CreateOutlined />
        Compose
      </ComposeButton>
          <List>
              {
                  SIDEBAR_DATA.map(data => (
                      <ListItem>
                          {data.title}
                      </ListItem>
                  ))
              }
      </List>
    </Box>
  );
}

export default SidebarContent;
