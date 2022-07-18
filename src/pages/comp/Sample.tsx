import { Card, CardContent, CardHeader, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import React, { useState } from "react";
import HeaderMenu from "../../components/com/HeaderMenu";

export default function Sample(){
    const [tab, setTab] = useState<'p'|'c'>('p');
    function handleChange(e : React.MouseEvent, newValue:'p'|'c'){
        setTab(newValue)
    }

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>
                
                <Grid container zIndex={3} sx={{position:'fixed',top:'0px'}} justifyContent="center">
                    <Grid item xs={12} boxShadow={'0px 5px 10px -2px lightgrey'} bgcolor="white" height={'70px'}>
                        <HeaderMenu />
                    </Grid>
                </Grid>

                {/* 바디영역 */}
                <Grid item xs={12} bgcolor={grey[50]}>
                    <Grid container justifyContent="center" >
                        <Grid item xs={10} sx={{marginTop:'150px'}}>
                            <Typography variant="h5" fontSize={'1.8rem'} color={blueGrey[700]} marginBottom={"30px"} fontWeight="bold">Component Name</Typography>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardHeader title="Components Name"
                                    action={
                                        <ToggleButtonGroup
                                        sx={{margin:'0px 10px'}}
                                        color="standard"
                                        exclusive
                                        value={tab}
                                        onChange={handleChange}
                                        >
                                            <ToggleButton value="p">Preview</ToggleButton>
                                            <ToggleButton value="c">Code</ToggleButton>
                                        </ToggleButtonGroup>
                                    }
                                />
                                <CardContent>
                                    <Grid item xs={12} minHeight="400px" bgcolor={blueGrey[50]}>

                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                {/* 푸터 영역 */}
                <Grid item xs={12} bgcolor={grey[50]}> 
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={8} sx={{height:'300px'}}>
                            
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>
        </Grid>
    )
}