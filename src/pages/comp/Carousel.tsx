import { Card, CardContent, CardHeader, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import HeaderMenu from "../../components/com/HeaderMenu";

export default function Carousel(){
    const [tab, setTab] = useState<'p'|'c'>('p');
    function handleChange(e : React.MouseEvent, newValue:'p'|'c'){
        setTab(newValue)
    }

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12}>
                
                <Grid container zIndex={3} sx={{position:'fixed',top:'0px'}} justifyContent="center">
                    <Grid item xs={12} boxShadow={'0px 5px 10px -2px lightgrey'} bgcolor="white" height={'70px'}>
                        <HeaderMenu />
                    </Grid>
                </Grid>

                {/* 바디영역 */}
                <Grid item xs={12} bgcolor={grey[50]}>
                    <Grid container justifyContent="center" >
                        <Grid item xs={10} sx={{marginTop:'150px'}}>
                            <Typography variant="h5" fontSize={'1.8rem'} color={blueGrey[700]} marginBottom={"30px"} fontWeight="bold">Carousel</Typography>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardHeader title="Carousel"
                                    action={
                                        <ToggleButtonGroup
                                        sx={{margin:'0px 10px'}}
                                        color="standard"
                                        exclusive
                                        value={tab}
                                        onChange={handleChange}
                                        >
                                            <ToggleButton value="p">Preview</ToggleButton>
                                            <ToggleButton value="c">Code</ToggleButton>
                                        </ToggleButtonGroup>
                                    }
                                />
                                <CardContent>
                                    {
                                        tab === 'p' ?
                                        <Grid item xs={12} minHeight="400px" bgcolor={blueGrey[50]}>
                                            <Grid container justifyContent={'center'} padding="30px 0px">
                                                <Carouseljs />
                                            </Grid>
                                        </Grid>
                                        :
                                        <Grid item xs={12} minHeight="400px" bgcolor={blueGrey[50]}>
                                            <Grid container minHeight={'400px'} alignItems={'center'} justifyContent="center">
                                                <Grid item xs={12}>
                                                    <TextField multiline disabled fullWidth value={codeText} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                {/* 푸터 영역 */}
                <Grid item xs={12} bgcolor={grey[50]}> 
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={8} sx={{height:'300px'}}>
                            
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>
        </Grid>
    )
}

const codeText = `
function useSlideSize(slide : any){
    const [slideSize,setSlideSize] = useState(0);
    useEffect(()=>{
        if(slide.current){
            setSlideSize(slide.current.childElementCount);
        }
    },[slide]);
    return slideSize;
}
const width = -500;
function Carouseljs(){
    const slide = useRef<HTMLDivElement>(null);

    const slideSize = useSlideSize(slide);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        slideImage(index);
    },[index]);
    function clickNext(){
        setIndex(index < slideSize-1 ? index+1 : 0);
    }

    function clickPrev(){
        setIndex(index > 0 ? index-1 : slideSize-1);
        slideImage(index);
    }
    

    function slideImage(index:number){
        slide.current!.style.transform = \`translateX(\${width * index}px)\`
    }

    return (
        <div style={carouselContainer}>
            <button onClick={clickPrev} style={prev}></button>
            <div ref={slide} style={carouselSlide}>
                <img style={slideImg} src="/assets/images/pic_4.jpg" alt="" />
                <img style={slideImg} src="/assets/images/pic_5.jpg" alt="" />
                <img style={slideImg} src="/assets/images/pic_6.jpg" alt="" />
            </div>
            <button onClick={clickNext} style={next} id="next"></button>
        </div>
    )
}

const carouselContainer : CSSProperties = {
    width: '500px',
    height: '500px',
    overflow: 'hidden',
    margin: 'auto',
    position: 'relative',
}
const carouselSlide = {
    display: 'flex',
    transition: 'transform 0.5s',
}
const slideImg = {
    width: '500px',
    height: '500px',
    objectFfit: 'cover',
}
const prev  : CSSProperties= {
    position: 'absolute',
    left : '20px',
    top: 'calc(50% - 33px)',
    background: 'none',
    border: 'none',
    borderTop: '3px solid white',
    borderLeft: '3px solid white',
    width: '40px',
    height: '40px',
    transform: 'rotateZ(-45deg)',
    zIndex: '2',
    cursor: 'pointer',
}
const next  : CSSProperties = {
    position: 'absolute',
    right: '20px',
    top: 'calc(50% - 33px)',
    background: 'none',
    border: 'none',
    borderTop: '3px solid white',
    borderRight: '3px solid white',
    width: '40px',
    height: '40px',
    transform: 'rotateZ(45deg)',
    zIndex:'2' ,
    cursor: 'pointer',
}
`

function useSlideSize(slide : any){
    const [slideSize,setSlideSize] = useState(0);
    useEffect(()=>{
        if(slide.current){
            setSlideSize(slide.current.childElementCount);
        }
    },[slide]);
    return slideSize;
}
const width = -500;
function Carouseljs(){
    const slide = useRef<HTMLDivElement>(null);

    const slideSize = useSlideSize(slide);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        slideImage(index);
    },[index]);
    function clickNext(){
        setIndex(index < slideSize-1 ? index+1 : 0);
    }

    function clickPrev(){
        setIndex(index > 0 ? index-1 : slideSize-1);
        slideImage(index);
    }
    

    function slideImage(index:number){
        slide.current!.style.transform = `translateX(${width * index}px)`
    }

    return (
        <div style={carouselContainer}>
            <button onClick={clickPrev} style={prev}></button>
            <div ref={slide} style={carouselSlide}>
                <img style={slideImg} src="/assets/images/pic_4.jpg" alt="" />
                <img style={slideImg} src="/assets/images/pic_5.jpg" alt="" />
                <img style={slideImg} src="/assets/images/pic_6.jpg" alt="" />
            </div>
            <button onClick={clickNext} style={next} id="next"></button>
        </div>
    )
}

const carouselContainer : CSSProperties = {
    width: '500px',
    height: '500px',
    overflow: 'hidden',
    margin: 'auto',
    position: 'relative',
}
const carouselSlide = {
    display: 'flex',
    transition: 'transform 0.5s',
}
const slideImg = {
    width: '500px',
    height: '500px',
    objectFfit: 'cover',
}
const prev  : CSSProperties= {
    position: 'absolute',
    left : '20px',
    top: 'calc(50% - 33px)',
    background: 'none',
    border: 'none',
    borderTop: '3px solid white',
    borderLeft: '3px solid white',
    width: '40px',
    height: '40px',
    transform: 'rotateZ(-45deg)',
    zIndex: '2',
    cursor: 'pointer',
}
const next  : CSSProperties = {
    position: 'absolute',
    right: '20px',
    top: 'calc(50% - 33px)',
    background: 'none',
    border: 'none',
    borderTop: '3px solid white',
    borderRight: '3px solid white',
    width: '40px',
    height: '40px',
    transform: 'rotateZ(45deg)',
    zIndex:'2' ,
    cursor: 'pointer',
}