import { useReducer } from 'react';
import { createUseStyles } from 'react-jss';

import config from '../../config';
import data from '../../data';

import Post from '../post/post';
import { CloseIcon } from '../../icons';

let useStyle = createUseStyles({

    container : ({config}) => ({

        position : "fixed",
        width : "100vw",
        height : "100vh",

        zIndex : "1000",

        padding : "10vh",

        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        justifyContent : "center",
        alignItems: "flex-start",
    }),
    button : ({config}) => ({

        background : config.colorScheme[config.theme]["BG#2"],

        padding : "1vh",

        border: `2px solid ${config.colorScheme[config.theme]["FG#1"]}`,
        borderLeftWidth : 0,

        "&:hover" : {
            cursor : "pointer",
        }
    }),
    icon : ({config}) => ({

        width : "3vh",
        height : "3vh",

        fill : config.colorScheme[config.theme]["FG#2"]
    }),
});

function closeClickHandler(event)
{
    config.setActiveWindow("null");
}

export default function PostWindow()
{
    const classes = useStyle({config});

    return <div className={classes.container}>
        <Post postData={data.posts[config.postConfig.postId]}></Post>
        <div className={classes.button} onClick={closeClickHandler}>
            <CloseIcon className={classes.icon}></CloseIcon>
        </div>
    </div>;
}