import {Box, Drawer, List, ListItemButton, ListItemText} from '@mui/material';
import {useRouter} from 'next/router';
import React from 'react';

const drawerWidth = 200;

export type LinkItem = {
  name: string;
  link: string;
};

type Props = {
  linkItems: LinkItem[];
};

const SideBar: React.FC<Props> = ({linkItems}) => {
  const router = useRouter();

  return (
    <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
      <Drawer variant="permanent" anchor="left" open={true}>
        <List sx={{width: drawerWidth}}>
          {linkItems.map(linkItem => (
            <ListItemButton
              selected={router.pathname === `${linkItem.link}`}
              key={linkItem.link}
              onClick={() => router.push(`${linkItem.link}`)}>
              <ListItemText primary={linkItem.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
