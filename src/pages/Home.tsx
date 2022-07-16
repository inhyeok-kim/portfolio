import { Card, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";

export default function Home(){
    // const isMobile = useMediaQuery('(min-width:800px)');

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>

                {/* 헤더영역 */}
                <Grid item xs={12} bgcolor={blue[500]}>
                    <Grid container zIndex={3} sx={{position:'fixed',top:'30px'}} justifyContent="center">
                        <Grid item xs={10} sx={{backdropFilter:'blur(10px)'}} bgcolor="rgba(255, 255, 255, 0.8)" borderRadius={"15px"} height={'50px'}>
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
                <Grid item xs={12} bgcolor={grey[100]}>
                    <Card sx={{height : '100%', boxShadow: '0px 10px 30px -5px lightgrey',borderRadius:'50px',transform:'translateY(-50px)'}}>
                        <CardContent sx={{height : '100%'}}>
                            <Grid container justifyContent={"center"}>
                                <Grid item xs={10}>

                                    <Grid margin="100px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'Silom'}
                                            variant="h4">
                                            The Client Side Developer
                                        </Typography>
                                        <Typography>디자인 센스는 부족하지만, 여러가지 기술을 활용하여 다양한 기능과 서비스를 만들고 싶은 개발자</Typography>
                                    </Grid>

                                    <Grid margin="100px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'Silom'}
                                            variant="h4">
                                            Collection Of Components
                                        </Typography>
                                        <Typography>직접 제작한 다양한 기능의 컴포넌트 모음</Typography>
                                        
                                        <Grid container marginTop={'50px'}>
                                            <Grid item xs={3}>
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
                                                <Grid container columnSpacing={4}>
                                                    <Grid item xs={4}>
                                                        <Grid item xs={12} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '200px'}}>
                                                        
                                                        </Grid>
                                                        <Typography marginTop={"10px"}>설명</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Grid item xs={12} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '200px'}}>
                                                        
                                                        </Grid>
                                                        <Typography marginTop={"10px"}>설명</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Grid item xs={12} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '200px'}}>
                                                        
                                                        </Grid>
                                                        <Typography marginTop={"10px"}>설명</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container marginTop={'50px'}>
                                            <Grid item xs={3} sx={{height : '100%'}}>
                                                <Typography 
                                                    position={'sticky'}
                                                    sx={{top:'0'}}
                                                    color={blueGrey[700]}
                                                    fontWeight="bold"
                                                    fontFamily={'Silom'}
                                                    fontSize={'2rem'}
                                                    variant="h4">
                                                        Function Components
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9}>
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
                                        
                                        <Grid container marginTop={'50px'}>
                                            
                                            <Grid item xs={12}>
                                                <Grid container columnSpacing={4} rowSpacing={4}>
                                                    <Grid item xs={6}>
                                                        <Grid container>
                                                            <Grid item xs={3}>
                                                                <Typography marginTop={"10px"}>IOT</Typography>
                                                            </Grid>
                                                            <Grid item xs={9} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '300px'}}>
                                                            
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Grid container>
                                                            <Grid item xs={9} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '300px'}}>
                                                            
                                                            </Grid>
                                                            <Grid item xs={3}>
                                                                <Typography textAlign={"right"} marginTop={"10px"}>동시편집</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Grid container>
                                                            <Grid item xs={3}>
                                                                <Typography marginTop={"10px"}>PMA</Typography>
                                                            </Grid>
                                                            <Grid item xs={9} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '300px'}}>
                                                            
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Grid container>
                                                            <Grid item xs={9} boxShadow={'0px 5px 10px -5px grey'} borderRadius={'15px'} sx={{height : '300px'}}>
                                                            
                                                            </Grid>
                                                            <Grid item xs={3}>
                                                                <Typography textAlign={"right"} marginTop={"10px"}>가계부</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
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
                        <Grid item xs={8} sx={{height:'300px'}}>
                            
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>
        </Grid>
    )
}