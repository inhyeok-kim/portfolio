import { Card, CardContent, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/com/PageHeader";
import StackList from "../components/com/StackList";
import StackTooltip from "../components/com/StackTooltip";
import Component from "../components/home/Component";
import Project from "../components/home/Project";

export default function Home(){
    // const isMobile = useMediaQuery('(min-width:800px)');
    const navigate = useNavigate();

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>

                {/* 헤더영역 */}
                <Grid item xs={12} bgcolor={blue[500]}>
                    <PageHeader />
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
                                            fontFamily={'sans-serif'}
                                            variant="h4">
                                            Stack of Skills
                                        </Typography>
                                        <Grid item xs={10} marginTop={'50px'}>
                                            <StackList />
                                        </Grid>
                                        {/* <Typography>여러가지 기술을 활용하여 다양한 기능과 서비스를 만들고 싶은 개발자</Typography> */}
                                    </Grid>

                                    <Grid margin="100px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'sans-serif'}
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
                                                    fontFamily={'sans-serif'}
                                                    fontSize={'2rem'}
                                                    variant="h4">
                                                        UI Components
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Grid container columnSpacing={4}>
                                                    <Grid item xs={4}>
                                                        <Component />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component />
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
                                                    fontFamily={'sans-serif'}
                                                    fontSize={'2rem'}
                                                    variant="h4">
                                                        Function Components
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Grid container columnSpacing={4}>
                                                    <Grid item xs={4}>
                                                        <Component />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        
                                    </Grid>

                                    <Grid margin="100px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography variant="h4" color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'sans-serif'}>
                                            Collection Of Projects
                                        </Typography>
                                        <Typography>다양한 기술로 만들어진 프로젝트</Typography>
                                        
                                        <Grid container marginTop={'50px'}>
                                            
                                            <Grid item xs={12}>
                                                <Grid container columnSpacing={4} rowSpacing={4}>
                                                    <Grid item xs={6}>
                                                        <Project direction="left" title="IOT" />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Project direction="right" title="동시편집" />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Project direction="left" title="PMA" />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Project direction="right" title="가계부" />
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