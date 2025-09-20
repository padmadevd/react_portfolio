import { useReducer } from 'react';
import { createUseStyles } from 'react-jss';

import config from '../../config';
import data from '../../data';

import { LikeIcon, ReplyIcon } from '../../icons';

let useStyle = createUseStyles({

    container : ({config}) => ({

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        alignItems : "flex-start",

        marginBottom : "4vh",
    }),
    id : ({config}) => ({

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        alignItems : "center",

        margin : "1vh",
    }),
    profile : ({config}) => ({

        width : "4vh",
        height : "4vh",

        borderRadius : "2vh",

        margin : "0.5vh 1vh",
    }),
    userName : ({config}) => ({

        color : config.colorScheme[config.theme]["FG#2"],

        fontFamily: "ubuntu",
        fontSize: "2.5vh",
        fontWeight: "bold",
    }),
    content : ({config}) => ({

        color : config.colorScheme[config.theme]["FG#2"],

        fontFamily: "ubuntu",
        fontSize: "2vh",

        marginLeft : "7vh",
    }),
    buttonContainer : {
        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        alignItems : "center",

        marginLeft : "6vh",
    },
    likeButton : {
        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        alignItems : "center",

        margin : "1vh",
        marginBottom : "0",
    },
    likeIcon : ({config}) => ({

        fill : config.colorScheme[config.theme]["FG#1"],
    }),
    likeText : ({config}) => ({

        color : config.colorScheme[config.theme]["FG#2"],

        fontFamily: "ubuntu",
        fontSize: "1.5vh",
        fontWeight: "bold",
    }),
    replyButton : {

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        alignItems : "center",

        margin : "1vh",
        marginBottom : "0",
    },
    replyIcon : ({config}) => ({

        fill : config.colorScheme[config.theme]["FG#1"],
    }),
    replyText : ({config}) => ({

        color : config.colorScheme[config.theme]["FG#2"],

        fontFamily: "ubuntu",
        fontSize: "1.5vh",
        fontWeight: "bold",
    }),
});

export default function Comment({userName, profile, content, likes})
{
    const classes = useStyle({config});

    return <div className={classes.container}>
        <div className={classes.id}>
            <img className={classes.profile} src={profile} alt=""></img>
            <p className={classes.userName}>{userName}</p>
        </div>
        <p className={classes.content}>{content}</p>
        <div className={classes.buttonContainer}>
            <div className={classes.likeButton}>
                <LikeIcon className={classes.likeIcon}></LikeIcon>
                <p className={classes.likeText}>likes</p>
            </div>
            <div className={classes.replyButton}>
                <ReplyIcon className={classes.replyIcon}></ReplyIcon>
                <p className={classes.replyText}>reply</p>
            </div>
        </div>
    </div>;
}