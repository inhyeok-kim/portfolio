import { Card, CardContent, CardHeader, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import HeaderMenu from "../../components/com/HeaderMenu";

export default function Switch(){
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
                            <Typography variant="h5" fontSize={'1.8rem'} color={blueGrey[700]} marginBottom={"30px"} fontWeight="bold">Switch</Typography>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardHeader title="Switch"
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
                                            <Grid container minHeight={'400px'} alignItems={'center'} justifyContent="center">
                                                <Grid item xs={6}>
                                                    <Grid container justifyContent={"space-around"}>
                                                        <ButtonOnOff />
                                                        <ButtonOnOff initial={true} />
                                                        <ButtonOnOff option={{height:'50px',width:'100px'}} />
                                                        <ButtonOnOff option={{onColor:'blue',offColor:'red'}} />
                                                    </Grid>
                                                </Grid>
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
interface propsType {
    option? : optionType
    onChange? : Function
    initial? : boolean
}
interface optionType {
    width? : string
    height? : string
    color? : string
    offColor? : string
    onColor? : string
}

function ButtonOnOff({
    option, onChange=()=>{}, initial=false
} : propsType){

    const [value, setValue] = useState(initial);
    useEffect(()=>{
        onChange(value);
        if(circle.current){
            if(value){
                isOn();
            } else {
                isOff();
            }
        }
    },[value]);
    function isOn(){
        if(circle.current){
            circle.current.style.left = \`calc(100% - \${circle.current.offsetHeight}px)\`;
        }
        setBackColor(onColor);
    }
    function isOff(){
        if(circle.current){
            circle.current.style.left = \`0px\`;
        }
        setBackColor(offColor);
    }

    const offColor = option && option.offColor ? option.offColor : 'grey'
    const onColor = option && option.onColor ? option.onColor : '#69eb5b'
    const [backColor, setBackColor] = useState(option && option.offColor ? option.offColor : 'grey');

    const wrapperStyleDef = {
        width : option && option.width ? option.width : '45px',
        height : option && option.height ? option.height : '25px',
        position: 'relative' as const,
        cursor : 'pointer'
    }
    
    const circleStyle = {
        height : '100%',
        background : option && option.color ? option.color : 'white',
        borderRadius : '100%',
        position: 'absolute' as const,
        zIndex : '1',
        transition : 'left 0.2s',
    }
    
    const backgroundCircleLeft = {
        height : '100%',
        borderRadius : '100% 0px 0px 100%',
        position: 'absolute' as const,
        left : '0px',
        boxSiging : 'border-box',
    }
    const backgroundCircleRight = {
        height : '100%',
        borderRadius : '0px 100% 100% 0px',
        position: 'absolute' as const,
        right : '0px',
        boxSiging : 'border-box',
    }
    
    const backgroundRect = {
        height : '100%',
        width : '100%',
        position: 'absolute' as const,
        boxSiging : 'border-box',
    }

    const wrapper = useRef<HTMLDivElement>(null);
    const circle = useRef<HTMLDivElement>(null);
    const BackgroundCircleLeftRef = useRef<HTMLDivElement>(null);
    const BackgroundCircleRightRef = useRef<HTMLDivElement>(null);
    const backgroundRectRef = useRef<HTMLDivElement>(null);
    let wrapHeight = 0;
    useLayoutEffect(()=>{
        if(wrapper.current){
            wrapHeight = wrapper.current.offsetHeight;
        }
        if(circle.current){
            circle.current.style.width = wrapHeight + 'px';
        }
        if(BackgroundCircleLeftRef.current){
            BackgroundCircleLeftRef.current.style.width = wrapHeight + 'px';
        }
        if(BackgroundCircleRightRef.current){
            BackgroundCircleRightRef.current.style.width = wrapHeight + 'px';
        }
        if(backgroundRectRef.current){
            backgroundRectRef.current.style.left = (wrapHeight -1) + 'px';
            backgroundRectRef.current.style.width = 'calc(100% - ' + ((wrapHeight *2 ) -2) + 'px)';
        }
    },[]);

    return (
        <div ref={wrapper} style={wrapperStyleDef}
            onClick={()=>{setValue(curr=>!curr)}}
        >
            <div ref={circle} style={circleStyle}>

            </div>
            <div ref={BackgroundCircleLeftRef} style={{...backgroundCircleLeft,...{background : backColor}}}>

            </div>
            <div ref={backgroundRectRef} style={{...backgroundRect,...{background : backColor}}}>

            </div>
            <div ref={BackgroundCircleRightRef} style={{...backgroundCircleRight,...{background : backColor}}}>

            </div>
        </div>
    )
}
`


interface propsType {
    option? : optionType
    onChange? : Function
    initial? : boolean
}
interface optionType {
    width? : string
    height? : string
    color? : string
    offColor? : string
    onColor? : string
}

function ButtonOnOff({
    option, onChange=()=>{}, initial=false
} : propsType){

    const [value, setValue] = useState(initial);
    useEffect(()=>{
        onChange(value);
        if(circle.current){
            if(value){
                isOn();
            } else {
                isOff();
            }
        }
    },[value]);
    function isOn(){
        if(circle.current){
            circle.current.style.left = `calc(100% - ${circle.current.offsetHeight}px)`;
        }
        setBackColor(onColor);
    }
    function isOff(){
        if(circle.current){
            circle.current.style.left = `0px`;
        }
        setBackColor(offColor);
    }

    const offColor = option && option.offColor ? option.offColor : 'grey'
    const onColor = option && option.onColor ? option.onColor : '#69eb5b'
    const [backColor, setBackColor] = useState(option && option.offColor ? option.offColor : 'grey');

    const wrapperStyleDef = {
        width : option && option.width ? option.width : '45px',
        height : option && option.height ? option.height : '25px',
        position: 'relative' as const,
        cursor : 'pointer'
    }
    
    const circleStyle = {
        height : '100%',
        background : option && option.color ? option.color : 'white',
        borderRadius : '100%',
        position: 'absolute' as const,
        zIndex : '1',
        transition : 'left 0.2s',
    }
    
    const backgroundCircleLeft = {
        height : '100%',
        borderRadius : '100% 0px 0px 100%',
        position: 'absolute' as const,
        left : '0px',
        boxSiging : 'border-box',
    }
    const backgroundCircleRight = {
        height : '100%',
        borderRadius : '0px 100% 100% 0px',
        position: 'absolute' as const,
        right : '0px',
        boxSiging : 'border-box',
    }
    
    const backgroundRect = {
        height : '100%',
        width : '100%',
        position: 'absolute' as const,
        boxSiging : 'border-box',
    }

    const wrapper = useRef<HTMLDivElement>(null);
    const circle = useRef<HTMLDivElement>(null);
    const BackgroundCircleLeftRef = useRef<HTMLDivElement>(null);
    const BackgroundCircleRightRef = useRef<HTMLDivElement>(null);
    const backgroundRectRef = useRef<HTMLDivElement>(null);
    let wrapHeight = 0;
    useLayoutEffect(()=>{
        if(wrapper.current){
            wrapHeight = wrapper.current.offsetHeight;
        }
        if(circle.current){
            circle.current.style.width = wrapHeight + 'px';
        }
        if(BackgroundCircleLeftRef.current){
            BackgroundCircleLeftRef.current.style.width = wrapHeight + 'px';
        }
        if(BackgroundCircleRightRef.current){
            BackgroundCircleRightRef.current.style.width = wrapHeight + 'px';
        }
        if(backgroundRectRef.current){
            backgroundRectRef.current.style.left = (wrapHeight -1) + 'px';
            backgroundRectRef.current.style.width = 'calc(100% - ' + ((wrapHeight *2 ) -2) + 'px)';
        }
    },[]);

    return (
        <div ref={wrapper} style={wrapperStyleDef}
            onClick={()=>{setValue(curr=>!curr)}}
        >
            <div ref={circle} style={circleStyle}>

            </div>
            <div ref={BackgroundCircleLeftRef} style={{...backgroundCircleLeft,...{background : backColor}}}>

            </div>
            <div ref={backgroundRectRef} style={{...backgroundRect,...{background : backColor}}}>

            </div>
            <div ref={BackgroundCircleRightRef} style={{...backgroundCircleRight,...{background : backColor}}}>

            </div>
        </div>
    )
}