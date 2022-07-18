import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"

interface propType {
    direction? : 'right'|'left'
    title? : string
}
export default function Project({
    direction='right',
    title
}:propType){
    const navigate = useNavigate();

    return (
        <Grid container onClick={()=>{navigate('/projects/sample')}} sx={{cursor:'pointer'}}>
            {
                direction==='left' ?
                <Grid item xs={3}>
                    <Typography marginTop={"10px"}>{title}</Typography>
                </Grid>
                :
                ''
            }
            <Grid item xs={9} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '300px','&:hover':{transform:"scale(1.05)"}, transition:'transform 0.5s'}}>
            
            </Grid>
            {
                direction==='right' ?
                <Grid item xs={3}>
                    <Typography textAlign={"right"} marginTop={"10px"}>{title}</Typography>
                </Grid>
                :
                ''
            }
        </Grid>
    )
}