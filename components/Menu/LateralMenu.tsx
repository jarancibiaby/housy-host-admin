import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { InsertLink, Menu } from "@mui/icons-material";
import { useState } from "react";
import { MENU_ITEMS as menuItems } from "../../models/const/menu-items.const";
import { useRouter } from "next/router";

export default function LateralMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Button size="large">
        <Menu onClick={() => setOpen(true)} />
      </Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <List>
            {menuItems.map((item, index) => {
              return (
                <>
                  <ListItem
                    disablePadding
                    sx={{ width: 250 }}
                    onClick={() => router.push(item.link)}
                    key={index}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <InsertLink />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  )
};