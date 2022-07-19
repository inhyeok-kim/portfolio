import { Grid, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom"

interface propType {
    direction? : 'right'|'left'
    title? : string
    link? : string
    imgSrc? : string
    content? : string | ReactElement
}
export default function Project({
    direction='right',
    title,
    link,
    imgSrc,
    content
}:propType){
    const navigate = useNavigate();

    return (
        <Grid container 
            onClick={()=>{
                if(link){
                    navigate(`/projects/${link}`);
                }
            }} sx={{cursor:'pointer'}}>
            {
                direction==='left' ?
                <Grid item xs={1} paddingRight="20px">
                    <Typography variant="h4" 
                        color={blueGrey[700]}
                        fontWeight="bold"
                        fontFamily={'sans-serif'} 
                        marginTop={"10px"}
                        textAlign="center"
                        sx={{lineBreak:'anywhere'}}
                        
                    >
                            {title}
                    </Typography>
                    {/* <Typography
                        color={blueGrey[500]}
                        variant="body2"
                        fontFamily={'sans-serif'} 
                        marginTop={"10px"}
                    >
                        {content}
                    </Typography> */}
                </Grid>
                :
                ''
            }
            <Grid item xs={11} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} 
                sx={{
                    height : '250px','&:hover':{transform:"scale(1.05)"}, transition:'transform 0.5s',
                    backgroundImage:`url(${imgSrc})`,
                    backgroundSize: 'cover',
                }}
                
            >
                
            </Grid>
            {
                direction==='right' ?
                <Grid item xs={1} paddingLeft="20px">
                    <Typography variant="h4" 
                        color={blueGrey[700]}
                        fontWeight="bold"
                        fontFamily={'sans-serif'} 
                        marginTop={"10px"}
                        textAlign="center"
                        sx={{lineBreak:'anywhere'}}
                    >
                            {title}
                    </Typography>
                    {/* <Typography
                        color={blueGrey[500]}
                        variant="body2"
                        fontFamily={'sans-serif'} 
                        marginTop={"10px"}
                    >
                        {content}
                    </Typography> */}
                </Grid>
                :
                ''
            }
        </Grid>
    )
}