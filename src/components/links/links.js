import { createUseStyles } from 'react-jss';

let useStyle = createUseStyles({
    container : {
        flex : 1,

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",

        minHeight : 0,
    },
    linkContainer : {

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",

        minHeight : 0,
        overflow : "auto",

        "&::-webkit-scrollbar": {
            width: "8px",
        },
        "&::-webkit-scrollbar-track": {
            background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "gray",
            borderRadius: "4px",
        },
        
        scrollbarWidth: "thin",                // Firefox
        scrollbarColor: "gray transparent",    // Firefox
    },
    title : {
        margin : "1vh 0vh",

        fontFamily: "ubuntu",
        fontSize: "3vh",
        fontWeight: "bold",
    },
    link : {

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        alignItems : "flex-start",

        "& a" : {
            fontFamily: "ubuntu",
            fontSize: "2vh",
            color: "rgb(100, 150, 255)",
            textDecoration:"none",

            margin : ".5vh",
        },

        "& img" : {
            height : "3vh",
            margin : ".5vh",
        },

        marginTop: ".5vh",
    },
});

export default function Links({links})
{
    const classes = useStyle();

    return <div className={classes.container}>
        <p className={classes.title}>External</p>
        <div className={classes.linkContainer}>
        {links.map(({name, value})=>{
            return <div className={classes.link}>
                <img src='/icons/link.png' alt='link icon'></img>
                <a className={classes.link} href={value}>{name}</a>
            </div>;
        })}
        </div>
    </div>;
}