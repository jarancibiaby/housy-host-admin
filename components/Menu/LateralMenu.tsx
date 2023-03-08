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
import { useSession, signIn } from "next-auth/react";

export default function LateralMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const itemsLogged = (
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
  );

  const itemsNotLogged = (
    <ListItem
      disablePadding
      sx={{ width: 250 }}
      onClick={() => signIn()}
    >
      <ListItemButton>
        <ListItemIcon>
          <InsertLink />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItemButton>
    </ListItem>
  )

  console.log({ session })

  return (
    <>
      <Button size="large">
        <Menu onClick={() => setOpen(true)} />
      </Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {session ? itemsLogged : itemsNotLogged}
        </Box>
      </Drawer>
    </>
  )
};