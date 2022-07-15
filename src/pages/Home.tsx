import { Grid, useMediaQuery } from "@mui/material";

export default function Home(){
    const media = useMediaQuery('(min-width:600px)');

    return (
        <Grid container justifyContent={"center"}>
           <Grid item xs={12} border="1px solid black">
                {media}
                hi
           </Grid>
        </Grid>
    )
}