import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"

interface propType {
    title : string
    imgSrc? : string
}
export default function Component({
    title, imgSrc
}:propType){
    const navigate = useNavigate();

    return (
        <Grid item xs={12} sx={{cursor:'pointer'}} onClick={()=>{navigate('/components/sample')}}>
            <Grid  item xs={12} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} 
                sx={{
                    height : '200px','&:hover':{transform:"scale(1.05)"}, transition:'transform 0.5s',
                    backgroundImage:`url(${imgSrc})`,
                    backgroundSize: 'cover',
                }}
                
            
            >
                
            </Grid>
            <Typography marginTop={"10px"}>{title}</Typography>
        </Grid>
    )
}