import { Card, CardContent, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/com/PageHeader";
import StackTooltip from "../../components/com/StackTooltip";

export default function Pma(){
    // const isMobile = useMediaQuery('(min-width:800px)');

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>

                {/* 헤더영역 */}
                <Grid item xs={12} sx={{
                        background: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/images/project/pma/pma01.png)'
                    }}>
                    <PageHeader title={'Project Management Application'}  />
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
                    <Grid container justifyContent={"center"}>
                                <Grid item xs={10} >
                                    
                                    <Grid container margin="200px 0px" >
                                        <Grid item xs={12}>

                                            <Grid container justifyContent={'center'}>
                                                <Grid item xs={12}>
                                                    <Typography color={blueGrey[700]} fontWeight="bold" variant="h4" textAlign={'center'}>PMA</Typography>
                                                </Grid>
                                                <Grid item xs={10} marginTop='50px' paddingBottom="30px" borderBottom={'1px solid '+blueGrey[100]}>
                                                    <Typography color={blueGrey[600]} variant="h5" >사용 기술</Typography>
                                                    <Grid item xs={5} marginTop="20px">
                                                        <Grid container columnSpacing={3}>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Typescript" src='/assets/images/ts.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="React" src='/assets/images/react.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Redux" src='/assets/images/redux.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Material-Ui" src='/assets/images/mui.png' />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={10} marginTop='50px' paddingBottom="30px" borderBottom={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        프론트엔드와 백엔드로 분업하여 개발 중인 프로젝트 매니지먼트 프로그램입니다.
                                                        <br/>
                                                        React-Typescript template 기반으로 Redux와 Material-Ui 를 활용하였고, 백엔드 및 DB는 Spring Boot와 MariaDB로 구성됩니다.
                                                        <br/>
                                                        JWT 인증 방식을 채용, 프론트와 백엔드의 완벽한 분리를 추구하며 개발중에 있습니다.
                                                        <br/>
                                                        현재는 전체 시스템 구상 및 설계 중에 있어, 간단한 UI 정도만 구현 되어있고 개발 중에 있습니다.
                                                        <br/>
                                                        아래 링크를 통해 구현되어있는 UI를 확인할 수 있습니다.
                                                        <Typography fontSize={'1.1rem'} color={blueGrey[700]}
                                                            sx={{cursor:'pointer'}}
                                                            onClick={()=>{window.open('https://dev-pma.netlify.app')}}
                                                        >
                                                            &gt; Go PMA
                                                        </Typography>
                                                    </Typography>
                                                </Grid>
                                            </Grid>


                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                    </Grid>
                </Grid>
           </Grid>
        </Grid>
    )
}