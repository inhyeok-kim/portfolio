import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"

export default function Component(){
    const navigate = useNavigate();

    return (
        <Grid item xs={12} sx={{cursor:'pointer'}} onClick={()=>{navigate('/components/sample')}}>
            <Grid  item xs={12} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '200px','&:hover':{transform:"scale(1.05)"}, transition:'transform 0.5s'}}>
                
            </Grid>
            <Typography marginTop={"10px"}>설명</Typography>
        </Grid>
    )
}