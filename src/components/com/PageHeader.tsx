import { Button, Grid, Typography } from "@mui/material"
import { blueGrey } from "@mui/material/colors"
import HeaderMenu from "./HeaderMenu"

interface propType {
    title? : string
}
export default function PageHeader({
    title
}:propType){
    
    return (
        <>
            <Grid container zIndex={3} sx={{position:'fixed',top:'30px'}} justifyContent="center">
                <Grid item xs={10} sx={{backdropFilter:'blur(10px)'}} boxShadow={'0px 2px 3px 0px lightgrey'} bgcolor="rgba(255, 255, 255, 0.8)" borderRadius={"15px"} height={'60px'}>
                    <HeaderMenu /> 
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{height : '600px'}}>
                <Grid container sx={{height:'calc(100% - 50px)'}} justifyContent={'center'} alignItems="center" flexDirection={'column'}>
                    <Typography color={'white'} variant="h3" fontWeight={'bold'}>{title}</Typography>
                    {/* <Typography color={'white'} variant="h4">{title}</Typography> */}
                </Grid>
            </Grid>
        </>
    )
}