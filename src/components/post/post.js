import { useReducer } from 'react';
import { createUseStyles } from 'react-jss';

import config from '../../config';

import CommentArea from '../comment_area/comment_area';

let useStyle = createUseStyles({

    container : ({config}) => ({

        background: config.colorScheme[config.theme]["BG#2"],
        color : config.colorScheme[config.theme]["FG#1"],

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",

        width : "80vw",
        height : "80vh",

        border: `2px solid ${config.colorScheme[config.theme]["FG#1"]}`,
    }),
    imgContainer : ({config}) => ({

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",

        minHeight : 0,
        overflowX : "hidden",
        overflowY : "auto",

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
    }),
    img : {
        width : "calc(80vh - 4px)",
        height : "calc(80vh - 4px)",
    },
    rightCont : ({config}) => ({

        background : config.colorScheme[config.theme]["BG#1"],

        border: `2px solid ${config.colorScheme[config.theme]["FG#3"]}`,
        
        flexGrow : "1",

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        alignItems : "stretch",

        minHeight : 0,
        overflowX : "hidden",
        overflowY : "auto",

        margin : "2vh",

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
    }),
    caption : ({config}) => ({

        margin : "2vh",

        fontFamily: "ubuntu",
        fontSize: "2.5vh",
        fontWeight : "bold",

        color : config.colorScheme[config.theme]["FG#2"],
    }),
    details : ({config}) => ({

        margin : "2vh",

        "& p" : {
            margin : "1vh",
            fontFamily: "ubuntu",
            fontSize: "2vh",
            color : config.colorScheme[config.theme]["FG#2"],
        }
    }),
});

export default function Post({postData})
{
    const classes = useStyle({config});

    return <div className={classes.container}>
        <div className={classes.imgContainer}>
            {postData.images.map(image => (
                <img className={classes.img} src={image} alt=""></img>
            ))}
        </div>
        <div className={classes.rightCont}>
            <p className={classes.caption}>{postData.caption}</p>
            <div className={classes.details}>
                {postData.details.split(/\r?\n/).map(line => (<p>{line}</p>))}
            </div>
            <CommentArea></CommentArea>
        </div>
    </div>;
}