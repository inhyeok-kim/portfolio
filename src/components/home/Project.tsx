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
    disable? : boolean
}
export default function Project({
    direction='right',
    title,
    link,
    imgSrc,
    content,
    disable=false
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
                <Grid item xs={2} paddingRight="20px">
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
            <Grid item xs={10} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} 
                sx={{
                    height : '250px','&:hover':{transform:"scale(1.05)"}, transition:'transform 0.5s',
                    background: disable ? `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${imgSrc})` : `url(${imgSrc})`,
                    backgroundSize: 'cover',
                }}
                
            >
                {disable ? 
                    <Grid container height={'100%'} alignItems='center' justifyContent={'center'}>
                        <Typography variant="h4" color="white" textAlign={'center'}>Comming Soon</Typography>
                    </Grid>
                    :
                    ''
                }
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