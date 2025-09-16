import { createUseStyles } from 'react-jss';

let useStyle = createUseStyles({
    container : {
        flex : 1,

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        
        minHeight : 0,
    },
    tagContainer : {

        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "flex-start",
        
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
    tag : {
        fontFamily: "ubuntu",
        fontSize: "1.7vh",
        fontWeight : "bold",

        padding : "0.5vh 2vh",
        margin : "0.5vh",
        background : "rgb(50, 50, 50)",
        borderRadius: "1vh"
    },
    title : {
        margin : "1vh 0vh",

        fontFamily: "ubuntu",
        fontSize: "3vh",
        fontWeight: "bold",
    }
});

export default function Skills({skills})
{
    const classes = useStyle();

    return <div className={classes.container}>
        <p className={classes.title}>Skills</p>
        <div className={classes.tagContainer}>        
            {skills.map(skill => (<p className={classes.tag}>{skill}</p>))}
        </div>
    </div>;
}