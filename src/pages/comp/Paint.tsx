import { Card, CardContent, CardHeader, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import HeaderMenu from "../../components/com/HeaderMenu";

export default function Paint(){
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
                            <Typography variant="h5" fontSize={'1.8rem'} color={blueGrey[700]} marginBottom={"30px"} fontWeight="bold">Paint</Typography>
                            <Card sx={{borderRadius:'20px'}}>
                                <CardHeader title="Paint"
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
                                                <Paintjs />
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
const defaultColor = "#2c2c2c"
function Paintjs(){
    const canvas = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(()=>{
        if(canvas.current){
            if(canvas.current.getContext('2d')){
                setCtx(canvas.current.getContext('2d'));
            }
        }
    },[canvas]);

    useEffect(()=>{
        if(ctx){
            ctx.strokeStyle = defaultColor;
            ctx.lineWidth = 2.5;
            ctx.fillStyle = defaultColor;
        }
    },[ctx]);

    const [painting, setPainting] = useState(false);
    
    function startPainting(){
        setPainting(true);
    }
    
    function stopPainting(){
        setPainting(false);
    }
    
    function onMouseMove(event:React.MouseEvent){
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        if(!painting){
            ctx!.beginPath();
            ctx!.moveTo(x,y);
        } else {
            ctx!.lineTo(x,y);
            ctx!.stroke();
        }
    }
    
    
    function handleColorClick(event:any){
        const color = event.target.style?.backgroundColor;
        ctx!.strokeStyle = color;
        ctx!.fillStyle = color;
    }
    
    const [lineWidth, setLineWidth] = useState(2.5);
    useEffect(()=>{
        if(ctx){
            ctx.lineWidth = lineWidth;
        }
    },[lineWidth]);

    function handleLineWidth(event:any){
        setLineWidth(Number(event.target.value));
    }
    
    const [isFilling,setIsFilling] = useState(false);
    
    function handleModeClick(){
        if(isFilling){
            setIsFilling(false);
        } else {
            setIsFilling(true);
        }
    }
    
    function handleCanvasClick(){
        if(isFilling){
            ctx!.fillRect(0,0,700,700);
        }
    }

    function handleSaveCanvas(){
        const image = canvas.current!.toDataURL();
        let link = document.createElement('a');
        link.href = image;
        link.download = "imageFromPaintJS";
        link.click();
    }

    return (
        <div>
            <canvas ref={canvas} width="700" height="700" style={{backgroundColor : 'white'}}
                onMouseMove={onMouseMove}
                onMouseDown={startPainting}
                onMouseUp={stopPainting}
                onMouseLeave={stopPainting}
                onClick={handleCanvasClick}
                onContextMenu={(e)=>{e.preventDefault()}}
            >
            </canvas>
            <div style={{marginTop : '50px'}}>
                <div style={{display:'flex', justifyContent:'center',marginBottom: '30px'}}>
                    <input onChange={handleLineWidth} type="range" id="jsRange" min="0.1" max="5.0" value={lineWidth} step="0.1" />
                </div>
                <div style={{display:'flex', justifyContent:'center',marginBottom: '30px'}}>
                    <button onClick={handleModeClick} id="jsMode">{isFilling ? 'Fill':'Stroke'}</button>
                    <button onClick={handleSaveCanvas} id="jsSave">Save</button>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#2c2c2c"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "white"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#FF3B30"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#FF9500"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#ffcc00"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#4cd963"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#5ac8fa"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#0579ff"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#5856d6"}}></div>
                </div>
            </div>
        </div>
    )
}
`

const defaultColor = "#2c2c2c"
function Paintjs(){
    const canvas = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(()=>{
        if(canvas.current){
            if(canvas.current.getContext('2d')){
                setCtx(canvas.current.getContext('2d'));
            }
        }
    },[canvas]);

    useEffect(()=>{
        if(ctx){
            ctx.fillStyle = 'white';
            ctx.fillRect(0,0,700,700);
            
            ctx.strokeStyle = defaultColor;
            ctx.lineWidth = 2.5;
            ctx.fillStyle = defaultColor;
        }
    },[ctx]);

    const [painting, setPainting] = useState(false);
    
    function startPainting(){
        setPainting(true);
    }
    
    function stopPainting(){
        setPainting(false);
    }
    
    function onMouseMove(event:React.MouseEvent){
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        if(!painting){
            ctx!.beginPath();
            ctx!.moveTo(x,y);
        } else {
            ctx!.lineTo(x,y);
            ctx!.stroke();
        }
    }
    
    
    function handleColorClick(event:any){
        const color = event.target.style?.backgroundColor;
        ctx!.strokeStyle = color;
        ctx!.fillStyle = color;
    }
    
    const [lineWidth, setLineWidth] = useState(2.5);
    useEffect(()=>{
        if(ctx){
            ctx.lineWidth = lineWidth;
        }
    },[lineWidth]);

    function handleLineWidth(event:any){
        setLineWidth(Number(event.target.value));
    }
    
    const [isFilling,setIsFilling] = useState(false);
    
    function handleModeClick(){
        if(isFilling){
            setIsFilling(false);
        } else {
            setIsFilling(true);
        }
    }
    
    function handleCanvasClick(){
        if(isFilling){
            ctx!.fillRect(0,0,700,700);
        }
    }

    function handleSaveCanvas(){
        const image = canvas.current!.toDataURL();
        let link = document.createElement('a');
        link.href = image;
        link.download = "imageFromPaintJS";
        link.click();
    }

    return (
        <div>
            <canvas ref={canvas} width="700" height="700" style={{backgroundColor : 'white'}}
                onMouseMove={onMouseMove}
                onMouseDown={startPainting}
                onMouseUp={stopPainting}
                onMouseLeave={stopPainting}
                onClick={handleCanvasClick}
                onContextMenu={(e)=>{e.preventDefault()}}
            >
            </canvas>
            <div style={{marginTop : '50px'}}>
                <div style={{display:'flex', justifyContent:'center',marginBottom: '30px'}}>
                    <input onChange={handleLineWidth} type="range" id="jsRange" min="0.1" max="5.0" value={lineWidth} step="0.1" />
                </div>
                <div style={{display:'flex', justifyContent:'center',marginBottom: '30px'}}>
                    <button onClick={handleModeClick} id="jsMode">{isFilling ? 'Fill':'Stroke'}</button>
                    <button onClick={handleSaveCanvas} id="jsSave">Save</button>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#2c2c2c"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "white"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#FF3B30"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#FF9500"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#ffcc00"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#4cd963"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#5ac8fa"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#0579ff"}}></div>
                    <div onClick={handleColorClick} style={{width:'50px',height:'50px',backgroundColor: "#5856d6"}}></div>
                </div>
            </div>
        </div>
    )
}