import { Grid } from "@mui/material";
import { useState } from "react";
import StackTooltip from "./StackTooltip";

export default function StackList(){
    const [el,setEl] = useState<Element | null>(null);
    function openHandler(el : Element){
        setEl(el);
    }

    return (
        <Grid container justifyContent={"space-between"}>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/java.png' />
            </Grid>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/spring.png' />
            </Grid>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/react.png' />
            </Grid>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/vue.png' />
            </Grid>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/node.png' />
            </Grid>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/electron.png' />
            </Grid>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/ts.png' />
            </Grid>
            <Grid item xs={1}>
                <StackTooltip el={el} onClick={openHandler} src='/assets/images/mui.png' />
            </Grid>
        </Grid>
    )
}