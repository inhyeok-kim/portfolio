import { Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface propType{
    src : string,
    el : Element | null,
    onClick : Function,
    title : string
}
export default function StackTooltip({
    src, el, onClick, title
}:propType){
    const [open,setOpen] = useState(false);
    const refImg = useRef(null);

    useEffect(()=>{
        if(refImg.current){
            if(refImg.current === el){
                setOpen(true);
            } else {
                setOpen(false);
            }
        }
    },[el]);

    function handleOpen(e:any){
        onClick(e.target);
    }

    return (
        <Tooltip
            PopperProps={{
            disablePortal: true,
            }}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={title}
        >
            <img ref={refImg} onClick={handleOpen} style={{width:'100%',height:'100%',objectFit: 'contain',cursor:'pointer'}} src={src} />
        </Tooltip>
    )
}