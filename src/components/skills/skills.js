import { createUseStyles } from 'react-jss';

import config from '../../config';

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

    tag : ({config}) => ({

        background : config.colorScheme[config.theme]["BG#3"],
        color : config.colorScheme[config.theme]["FG#2"],

        fontFamily: "ubuntu",
        fontSize: "1.7vh",
        fontWeight : "bold",

        padding : "0.5vh 2vh",
        margin : "0.5vh",

        borderRadius: "1vh"
    }),

    title : {
        margin : "1vh 0vh",

        fontFamily: "ubuntu",
        fontSize: "3vh",
        fontWeight: "bold",
    }
});

export default function Skills({skills})
{
    const classes = useStyle({config});

    return <div className={classes.container}>
        <p className={classes.title}>Skills</p>
        <div className={classes.tagContainer}>        
            {skills.map((skill, index) => (<p key={index} className={classes.tag}>{skill}</p>))}
        </div>
    </div>;
}