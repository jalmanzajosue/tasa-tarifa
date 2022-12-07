import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar';

const drawerWidth = 240;

export const JournalLayout = ({children}:any) => {
  return (
   
    <Box sx={{display:'flex'}}>

        <Navbar  drawerWidth={drawerWidth}/>
        <Sidebar drawerWidth={drawerWidth}/>
                <Box component='main'
                    sx={{flexGrow:1,p:3}}
                >
                    <Toolbar/>
{children}

                </Box>
    </Box>

  )
}
