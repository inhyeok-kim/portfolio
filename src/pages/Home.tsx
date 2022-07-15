import { Card, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";

export default function Home(){
    // const isMobile = useMediaQuery('(min-width:800px)');

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>

                {/* 헤더영역 */}
                <Grid item xs={12} bgcolor={blue[500]}>
                    <Grid container  sx={{position:'fixed'}} justifyContent="center">
                        <Grid item xs={10}>
                            헤더 nav
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{height : '600px'}}>
                        <Grid container sx={{height:'calc(100% - 50px)'}} justifyContent={'center'} alignItems="center" flexDirection={'column'}>
                            <Typography fontFamily={"serif"} color={'white'} variant="h3" fontWeight={'bold'}>IN HYEOK _ kim</Typography>
                            <Typography color={'white'} variant="h4">The Client Side Developer</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* 바디영역 */}
                <Grid item xs={12} sx={{height:'5000px'}} bgcolor={grey[100]}>
                    <Card sx={{height : '100%', borderRadius:'30px',transform:'translateY(-50px)'}}>
                        <CardContent sx={{height : '100%'}}>
                            <Grid container justifyContent={"center"}>
                                <Grid item xs={10}>

                                    <Grid margin="100px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'Silom'}
                                            variant="h4">
                                            Collection Of Components
                                        </Typography>
                                        <Typography>직접 제작한 다양한 기능의 컴포넌트 모음</Typography>
                                        <Grid container>
                                            <Grid item xs={3} sx={{height : '600px'}}>
                                                <Typography 
                                                    position={'sticky'}
                                                    sx={{top:'0'}}
                                                    color={blueGrey[700]}
                                                    fontWeight="bold"
                                                    fontFamily={'Silom'}
                                                    fontSize={'2rem'}
                                                    variant="h4">
                                                        UI Components
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9} sx={{height : '600px'}}>
                                                리스트리스트
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid margin="100px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography variant="h4" color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'Silom'}>
                                            Collection Of Projects
                                        </Typography>
                                        <Typography>다양한 기술로 만들어진 프로젝트</Typography>
                                        <Grid container  sx={{height : '600px'}}>
                                            <Grid item xs={3} sx={{height : '100%'}}>
                                                <Typography 
                                                    position={'sticky'}
                                                    sx={{top:'0'}}
                                                    color={blueGrey[700]}
                                                    fontWeight="bold"
                                                    fontFamily={'Silom'}
                                                    fontSize={'2rem'}
                                                    variant="h4">
                                                        UI Components
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                리스트리스트
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                {/* 푸터 영역 */}
                <Grid item xs={12} bgcolor={grey[100]}> 
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={8} border="1px solid black" sx={{height:'300px'}}>
                            
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>
        </Grid>
    )
}