import { Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import PageHeader from "../../components/com/PageHeader";
import StackTooltip from "../../components/com/StackTooltip";

export default function Editor(){
    // const isMobile = useMediaQuery('(min-width:800px)');

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>

                {/* 헤더영역 */}
                <Grid item xs={12} sx={{
                        background: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/images/project/editor/editor01.png)'
                    }}>
                    <PageHeader title={'Text co-Editor Project'}  />
                </Grid>

                {/* 바디영역 */}
                <Grid item xs={12} bgcolor={grey[100]}>
                    <Card sx={{height : '100%', boxShadow: '0px 10px 30px -5px lightgrey',borderRadius:'50px',transform:'translateY(-50px)'}}>
                        <CardContent sx={{height : '100%'}}>
                            <Grid container justifyContent={"center"} >
                                <Grid item xs={10} >
                                    <Grid container margin="200px 0px" >
                                        <Grid item xs={6}>
                                            <img src="/assets/images/project/editor/editor02.gif" style={{width:'100%',borderRadius:'20px', boxShadow:'0px 1px 5px 0px lightgrey'}} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid container justifyContent={'center'}>
                                                <Grid item xs={12}>
                                                    <Typography color={blueGrey[700]} fontWeight="bold" variant="h4" textAlign={'center'}>동시편집 텍스트 에디터</Typography>
                                                </Grid>
                                                <Grid item xs={10} marginTop='50px' paddingBottom="30px" borderBottom={'1px solid '+blueGrey[100]}>
                                                    <Typography color={blueGrey[600]} variant="h5" >사용 기술</Typography>
                                                    <Grid item xs={10} marginTop="20px">
                                                        <Grid container columnSpacing={3}>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="React" src='/assets/images/react.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Node.js" src='/assets/images/node.png' />
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <StackTooltip title="Typescript" src='/assets/images/ts.png' />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={10} marginTop='50px' paddingBottom="30px" borderBottom={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        Node.js로 Websocket 서버를 구현하였고, React와 Typescript로 개발된 동시편집 텍스트 에디터 입니다.
                                                        <br/>
                                                        에디터 기능에는 다른 라이브러리 없이 모든것을 직접 구상, 구현하였습니다.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container margin="300px 0px">
                                        <Grid item xs={5}>
                                            <Grid container height={'100%'} justifyContent={'center'} alignItems="center">
                                                <Grid item xs={10}padding="30px 0px" borderBottom={'1px solid '+blueGrey[100]} borderTop={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        각 사용자는 같은 페이지에서 서로 동시에 텍스트를 편집할 수 있습니다.
                                                        <br/>
                                                        사용자의 모든 입력은 javascript로 제어되며, Websocket 서버로 입력된 액션 정보를 주고 받습니다.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <img src="/assets/images/project/editor/editor03.gif" style={{width:'100%',borderRadius:'20px', boxShadow:'0px 1px 5px 0px lightgrey'}} />
                                        </Grid>
                                    </Grid>

                                    <Grid container margin="300px 0px">
                                        <Grid item xs={8}>
                                            <img src="/assets/images/project/editor/editor04.gif" style={{width:'100%',borderRadius:'20px', boxShadow:'0px 1px 5px 0px lightgrey'}} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Grid container height={'100%'} justifyContent={'center'} alignItems="center">
                                                <Grid item xs={10}padding="30px 0px" borderBottom={'1px solid '+blueGrey[100]} borderTop={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        그 어떤 입력 방식에도, 모든 사용자에게 같은 형태로 보여질 수 있게 면밀히 제어됩니다.
                                                        <br/>
                                                        사용자 서로의 데이터에는 그 어떤 차이도 용납될 수 없죠.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container marginTop="300px">
                                        <Grid item xs={4}>
                                            <Grid container height={'100%'} justifyContent={'center'} alignItems="center">
                                                <Grid item xs={10}padding="30px 0px" borderBottom={'1px solid '+blueGrey[100]} borderTop={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        페이지의 데이터는 Websocket 서버에 저장되어, 
                                                        <br/>
                                                        언제든 빠르게 전환이 가능합니다.
                                                        <br/>
                                                        또한 새로운 사용자가 접속하여도 데이터의 오차없이 빠르게 문서를 확인할 수 있습니다.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <img src="/assets/images/project/editor/editor05.gif" style={{width:'100%',borderRadius:'20px', boxShadow:'0px 1px 5px 0px lightgrey'}} />
                                        </Grid>
                                    </Grid>

                                    <Grid container margin="200px 0px">
                                        <Grid item xs={12}>
                                            <Grid container height={'100%'} justifyContent={'center'} alignItems="center">
                                                <Grid item xs={10}padding="30px 0px" borderBottom={'1px solid '+blueGrey[100]} borderTop={'1px solid '+blueGrey[100]}>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}>
                                                        아쉽게도, Websocket 서버는 호스팅이 필요하여 직접 체험할 수 있는 사이트를 제공할 수 없었습니다.
                                                        <br/> 대신 github에서 모든 소스를 확인하실 수 있습니다.
                                                    </Typography>
                                                    <Typography fontSize={'1.1rem'} color={blueGrey[700]}
                                                        sx={{cursor:'pointer'}}
                                                        onClick={()=>{window.open('https://github.com/inhyeok-kim/text-co-editor/')}}
                                                    >
                                                        &gt; Go Github
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