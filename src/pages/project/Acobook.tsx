import { Card, CardContent, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/com/PageHeader";
import StackTooltip from "../../components/com/StackTooltip";

export default function Acobook(){
    // const isMobile = useMediaQuery('(min-width:800px)');

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>

                {/* 헤더영역 */}
                <Grid item xs={12} sx={{
                        background: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/images/project/acobook/acobook01.png)'
                    }}>
                    <PageHeader  title={'Acoount Book Project'} />
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
                                                    <Typography color={blueGrey[700]} fontWeight="bold" variant="h4" textAlign={'center'}>Acobook</Typography>
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
                                                                <StackTooltip title="Styled-Components" src='/assets/images/styled.png' />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={10} marginTop='50px' paddingBottom="30px" borderBottom={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        직접 사용할 수 있는 프로그램을 만들고 싶어 고안하게 된 가계부 프로젝트 입니다.
                                                        <br/>
                                                        모바일 웹앱을 대상으로 하고 있으며, 추후 PWA(Progressive Web App)로 전환 예정입니다.
                                                        <br/>
                                                        React 기반으로 Redux와 Styled-Components를 활용하였고, indexed DB로 모든 데이터를 저장, 관리하고 있습니다.
                                                        <br/>
                                                        아직 구현되지 않은 부분이 많고 개발 중에 있으나, 아래 링크를 통해 직접 확인해볼 수 있습니다.
                                                        <br/>
                                                        <Typography fontSize={'1.1rem'} color={blueGrey[700]}
                                                            sx={{cursor:'pointer'}}
                                                            onClick={()=>{window.open('https://acobook.netlify.app')}}
                                                        >
                                                            &gt; Go Acobook
                                                        </Typography>
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