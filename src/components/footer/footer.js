import { createUseStyles } from 'react-jss';

let useStyle = createUseStyles({
    container : {

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        justifyContent : "space-around",

        padding : "2vh",

        borderTop: "2px solid rgb(50, 50, 50)",

        "& img" : {
            height : "5vh",
        }
    }
});

export default function Footer()
{
    const classes = useStyle();
    return <div className={classes.container}>
        <img src="/icons/settings.png" alt=""></img>
        <img src="/icons/light_mode.png" alt=""></img>
        <img src="/icons/send.png" alt=""></img>
        <img src="/icons/download.png" alt=""></img>
    </div>
}