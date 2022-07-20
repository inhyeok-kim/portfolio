import { Card, CardContent, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/com/PageHeader";

export default function Iot(){
    // const isMobile = useMediaQuery('(min-width:800px)');

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>

                {/* 헤더영역 */}
                <Grid item xs={12}
                    sx={{
                        background: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/images/project/iot/iot01.png)'
                    }}
                >
                    <PageHeader title={'IOT Project'} />
                </Grid>

                {/* 바디영역 */}
                <Grid item xs={12} bgcolor={grey[100]}>
                    <Card sx={{height : '100%', boxShadow: '0px 10px 30px -5px lightgrey',borderRadius:'50px',transform:'translateY(-50px)'}}>
                        <CardContent sx={{height : '100%'}}>
                            <Grid container justifyContent={"center"}>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* 푸터 영역 */}
                <Grid item xs={12} bgcolor={grey[100]}> 
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={8} sx={{height:'300px'}}>
                            
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>
        </Grid>
    )
}