import { Card, CardContent, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/com/PageHeader";
import StackTooltip from "../../components/com/StackTooltip";

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
                                <Grid item xs={10} >
                                    
                                    <Grid container margin="200px 0px" >
                                        <Grid item xs={12}>

                                            <Grid container justifyContent={'center'}>
                                                <Grid item xs={12}>
                                                    <Typography color={blueGrey[700]} fontWeight="bold" variant="h4" textAlign={'center'}>IOT 프로젝트</Typography>
                                                </Grid>
                                                <Grid item xs={10} marginTop='50px' paddingBottom="30px" borderBottom={'1px solid '+blueGrey[100]}>
                                                    <Typography color={blueGrey[600]} variant="h5" >사용 기술</Typography>
                                                    <Grid item xs={5} marginTop="20px">
                                                        <Grid container columnSpacing={3}>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Vue" src='/assets/images/vue.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Spring" src='/assets/images/spring.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Java" src='/assets/images/java.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Chart.js" src='/assets/images/chartjs.svg' />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={10} marginTop='50px' paddingBottom="30px" borderBottom={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        사내에서 진행된 솔루션 기능 고도화 프로젝트로, 기존의 IOT 장비의 데이터 수집 및 제어 기능만 있던 솔루션에
                                                        <br/>
                                                        데이터 시각화 및 사용자 UI 편의를 위한 화면과 기능을 추가 개발한 프로젝트입니다.
                                                        <br/>
                                                        3명이 함께 작업하였으며, 제가 프로젝트 리딩과 동시에, Vue 교육 및 구조설계, 주요 UI 기능 개발, Iot 데이터 설계 등을 담당하였습니다.
                                                    </Typography>
                                                </Grid>
                                            </Grid>


                                        </Grid>
                                    </Grid>

                                    <Grid container margin="300px 0px" >
                                        <Grid item xs={6}>
                                            <img src="/assets/images/project/iot/iot02.gif" style={{width:'100%',borderRadius:'20px', boxShadow:'0px 1px 5px 0px lightgrey'}} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid container height={'100%'} justifyContent={'center'} alignItems="center">
                                                <Grid item xs={10}padding="30px 0px" borderBottom={'1px solid '+blueGrey[100]} borderTop={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        대시보드에서 위젯 형태로 다양한 장비의 대략적인 상태 및 
                                                        <br/>
                                                        데이터를 확인할 수 있습니다.
                                                        <br/>
                                                        각 위젯은 10초 마다 갱신되어 빠르게 최근 상황을 파악할 수 있습니다.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container margin="300px 0px" >
                                        <Grid item xs={6}>
                                            <Grid container height={'100%'} justifyContent={'center'} alignItems="center">
                                                <Grid item xs={10}padding="30px 0px" borderBottom={'1px solid '+blueGrey[100]} borderTop={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        대시보드의 위젯은 사용자마다 원하는 것으로 언제든 설정 할 수 있습니다.
                                                        <br/>
                                                        또한 위젯의 위치도 Drag and Drop 방식으로 편리하게 설정이 가능합니다.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src="/assets/images/project/iot/iot03.gif" style={{width:'100%',borderRadius:'20px', boxShadow:'0px 1px 5px 0px lightgrey'}} />
                                        </Grid>
                                    </Grid>

                                    <Grid container margin="200px 0px">
                                        <Grid item xs={12}>
                                            <Grid container height={'100%'} justifyContent={'center'} alignItems="center">
                                                <Grid item xs={10}padding="30px 0px" borderBottom={'1px solid '+blueGrey[100]} borderTop={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        그 외에 더 많은 기능이 구현되어 있지만, 보안상 공개할 수 없음을 알려드립니다.
                                                    </Typography>
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