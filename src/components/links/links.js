import { createUseStyles } from 'react-jss';

import config from '../../config';

import { LinkIcon } from '../../icons';

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
    link : ({config}) => ({

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        alignItems : "flex-start",

        "& a" : {
            fontFamily: "ubuntu",
            fontSize: "2vh",
            color: config.colorScheme[config.theme]["BLUE#1"],
            textDecoration:"none",

            margin : ".5vh",
        },
        marginTop: ".5vh",
    }),
    icon : ({config}) => ({
        height : "3vh",
        margin : ".5vh",
        fill : config.colorScheme[config.theme]["BLUE#1"],
    }),
});

export default function Links({links})
{
    const classes = useStyle({config});

    return <div className={classes.container}>
        <p className={classes.title}>External</p>
        <div className={classes.linkContainer}>
        {links.map(({name, value, index})=>{
            return <div key={index} className={classes.link}>
                <LinkIcon className={classes.icon}></LinkIcon>
                <a className={classes.link} href={value}>{name}</a>
            </div>;
        })}
        </div>
    </div>;
}