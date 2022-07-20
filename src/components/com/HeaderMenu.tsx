import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeaderMenu(){
    const navigate = useNavigate();

    const [projectEl, setProjectEl] = useState<HTMLElement | null>(null);
    const handleProjectOpen = (event: React.MouseEvent<HTMLElement>) => {
        setProjectEl(event.currentTarget);
    };
    const handleProjectClose = () => {
        setProjectEl(null);
    };
    const projectOpen = Boolean(projectEl);


    return (
        <Grid container sx={{height : '100%'}} alignItems={'center'}>
            <Grid item xs={6} paddingLeft={'30px'}>
                <Typography sx={{cursor:'pointer'}} onClick={()=>{navigate('/')}} fontWeight={'bold'} color={blueGrey[700]}>Inhyeok.Kim</Typography>
            </Grid>
            <Grid item xs={6}>
                <Grid container justifyContent={"space-evenly"}>
                    <Grid>
                        <Tooltip 
                            arrow
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: 'common.white',
                                        '& .MuiTooltip-arrow': {
                                            color: 'common.white',
                                        },
                                        boxShadow : '0px 1px 5px 0px lightgrey'
                                    },
                                },
                            }}
                            title={
                                <List>
                                    <ListItemButton color={blueGrey[700]} onClick={()=>{navigate(`/projects/iot`);}}>
                                        <ListItemText primary="IOT Project" primaryTypographyProps={{fontWeight:'bold', fontSize:'0.8rem',color:blueGrey[700] }} />
                                    </ListItemButton>
                                    <ListItemButton color={blueGrey[700]} onClick={()=>{navigate(`/projects/pma`);}}>
                                        <ListItemText primary="Project Manager App" primaryTypographyProps={{fontWeight:'bold', fontSize:'0.8rem',color:blueGrey[700] }} />
                                    </ListItemButton>
                                    <ListItemButton color={blueGrey[700]} onClick={()=>{navigate(`/projects/editor`);}}>
                                        <ListItemText primary="co-Text Editor" primaryTypographyProps={{fontWeight:'bold', fontSize:'0.8rem',color:blueGrey[700] }} />
                                    </ListItemButton>
                                    <ListItemButton color={blueGrey[700]} onClick={()=>{navigate(`/projects/acobook`);}}>
                                        <ListItemText primary="Account Book App" primaryTypographyProps={{fontWeight:'bold', fontSize:'0.8rem',color:blueGrey[700] }} />
                                    </ListItemButton>
                                </List>
                        }>
                            <Grid  sx={{cursor:'pointer'}} container alignItems={"center"} color={blueGrey[600]}>
                                <AccountTreeOutlinedIcon fontSize="small" />
                                <Typography fontSize={'0.9rem'} margin={'0px 5px'} color={blueGrey[600]}>Projects</Typography>
                                <ExpandMoreIcon fontSize="small" />
                            </Grid>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <Tooltip 
                            arrow
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: 'common.white',
                                        '& .MuiTooltip-arrow': {
                                            color: 'common.white',
                                        },
                                        boxShadow : '0px 1px 5px 0px lightgrey'
                                    },
                                },
                            }}
                            title={
                                <Grid color="black">
                                    <List>
                                        <Tooltip 
                                            placement="right-start"
                                            componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        bgcolor: 'common.white',
                                                        '& .MuiTooltip-arrow': {
                                                            color: 'common.white',
                                                        },
                                                        boxShadow : '0px 1px 5px 0px lightgrey'
                                                    },
                                                },
                                            }}
                                            title={
                                                <List>
                                                    <ListItemButton onClick={()=>{navigate('/components/switch')}} sx={{height: '2rem'}}>
                                                        <ListItemText primary="Switch" primaryTypographyProps={{fontSize:'0.8rem',color:blueGrey[700]}} />
                                                    </ListItemButton>
                                                    <ListItemButton  sx={{height: '2rem'}}>
                                                        <ListItemText primary="Page Stack" primaryTypographyProps={{fontSize:'0.8rem',color:blueGrey[700] }} />
                                                    </ListItemButton>
                                                </List>
                                            }>
                                                <ListItemButton color={blueGrey[700]}>
                                                        <ListItemText primary="UI Components" primaryTypographyProps={{fontWeight:'bold', fontSize:'0.8rem',color:blueGrey[700] }} />
                                                        <NavigateNextIcon color="disabled" fontSize="small" />
                                                </ListItemButton>
                                        </Tooltip>
                                        <Tooltip 
                                            placement="right-start"
                                            componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        bgcolor: 'common.white',
                                                        '& .MuiTooltip-arrow': {
                                                            color: 'common.white',
                                                        },
                                                        boxShadow : '0px 1px 5px 0px lightgrey'
                                                    },
                                                },
                                            }}
                                            title={
                                                <List>
                                                    <ListItemButton sx={{height: '2rem'}}>
                                                        <ListItemText primary="Calculator" primaryTypographyProps={{fontSize:'0.8rem',color:blueGrey[700] }} />
                                                    </ListItemButton>
                                                </List>
                                            }>
                                                <ListItemButton>
                                                    <ListItemText primary="Function Components" primaryTypographyProps={{fontWeight:'bold', fontSize:'0.8rem',color:blueGrey[700] }} />
                                                    <NavigateNextIcon color="disabled" fontSize="small" />
                                                </ListItemButton>
                                            </Tooltip>
                                    </List>
                                </Grid>
                            }
                            
                        >
                            <Grid sx={{cursor:'pointer'}} container alignItems={"center"} color={blueGrey[600]}
                                onMouseEnter={handleProjectOpen}
                                onMouseLeave={handleProjectClose}
                                >
                                <GridViewIcon fontSize="small" />
                                <Typography fontSize={'0.9rem'} margin={'0px 5px'} color={blueGrey[600]}>Components</Typography>
                                <ExpandMoreIcon fontSize="small" />
                            </Grid>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <Grid sx={{cursor:'pointer'}} container alignItems={"center"} color={blueGrey[600]}>
                            <PermIdentityOutlinedIcon fontSize="small" />
                            <Typography fontSize={'0.9rem'} margin={'0px 5px'} color={blueGrey[600]}>About Me</Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid sx={{cursor:'pointer'}} container alignItems={"center"} color={blueGrey[600]}>
                            <GitHubIcon fontSize="small" />
                            <Typography onClick={()=>{window.open('https://github.com/inhyeok-kim')}} fontSize={'0.9rem'} margin={'0px 5px'} color={blueGrey[600]}>Github</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
