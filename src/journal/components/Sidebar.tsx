import { TurnedInNot } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem, ListItemButton, Toolbar, Typography, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'

export const Sidebar = ({drawerWidth}:any) => {
  return (
    <Box
    component='nav'
    sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}
    >
        <Drawer
        variant='permanent'
        open
        sx={{
            display:{xs:'block'},
            '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
        }}
        >

        <Toolbar>
                <Typography variant='h6' noWrap component='div'></Typography>
                Josue Almanza
        </Toolbar>
        <Divider/>

        <List>
          {
            ['Enero','Febrero','Marzo','Abril'].map(text =>(
              <ListItem key={text} disablePadding>
                  <ListItemButton>
                      <ListItemIcon>
                          <TurnedInNot/>
                      </ListItemIcon>
                      <Grid container>
                          <ListItemText primary={text}/>
                          <ListItemText secondary={'LoremLoremLoremLoremm '}/>

                      </Grid>
                  </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        </Drawer>
    </Box>
  )
}
