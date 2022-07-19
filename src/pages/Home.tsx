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

                                    <Grid margin="200px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'sans-serif'}
                                            variant="h3">
                                            Stack of Skills
                                        </Typography>
                                        <Grid item xs={10} marginTop={'50px'}>
                                            <StackList />
                                        </Grid>
                                    </Grid>

                                    <Grid margin="200px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'sans-serif'}
                                            variant="h3">
                                            Collection Of Components
                                        </Typography>
                                        <Typography color={blueGrey[500]}
                                            variant="subtitle1"
                                            fontFamily={'sans-serif'}>직접 제작한 다양한 기능의 컴포넌트 모음</Typography>
                                        
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
                                                        <Component title="Switch" />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component title="Page Stack" />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component title="Carousel" />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component title="Draggable" />
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
                                                        <Component title="Calculator" />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component title="Virtual keyboard" />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Component title="Lotto" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        
                                    </Grid>

                                    <Grid margin="200px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography variant="h3" color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'sans-serif'}>
                                            Collection Of Projects
                                        </Typography>
                                        <Typography color={blueGrey[500]}
                                            variant="subtitle1"
                                            fontFamily={'sans-serif'} >다양한 기술로 만들어진 프로젝트</Typography>
                                        
                                        <Grid container marginTop={'50px'} justifyContent="center">
                                            
                                            <Grid item xs={10}>
                                                <Grid container columnSpacing={4} rowSpacing={4}>
                                                    <Grid item xs={6}>
                                                        <Project 
                                                            content={(<>사내 프로젝트로,<br/>각종 iot 장비들로부터 수집된 데이터를 차트와 표로 나타내어 시각적인 자료를 제공하기 위한 목적으로 만들어진 화면</>)}
                                                            imgSrc={'/assets/images/project/iot/iot01.png'} direction="left" title="IOT" link="iot" />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Project 
                                                            content={(<>단순하지만, 특별하다.<br/> 협업이 가능한 동시편집<br/>텍스트 에디터</>)}
                                                            imgSrc={'/assets/images/project/editor/editor01.png'} direction="right" title="동시편집"  link="editor" />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Project 
                                                            content={(<>프로젝트 관리를 위한 종합 커뮤니케이션 어플리케이션</>)}
                                                            imgSrc={'/assets/images/project/pma/pma01.png'} direction="left" title="PMA"  link="pma" />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Project 
                                                            content={(<>웹이지만 앱처럼. 모바일을 대상으로, PWA 기술을 적용시킨 가계부 앱</>)}
                                                            imgSrc={'/assets/images/project/acobook/acobook01.png'} direction="right" title="가계부"  link="acobook" />
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                    <Grid margin="200px 0px" container justifyContent={"center"} 
                                    alignItems="center" flexDirection="column">
                                        <Typography color={blueGrey[700]}
                                            fontWeight="bold"
                                            fontFamily={'sans-serif'}
                                            variant="h3">
                                            Career
                                        </Typography>
                                        <Grid item xs={10} marginTop={'50px'}>
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