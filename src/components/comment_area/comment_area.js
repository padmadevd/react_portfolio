import { useReducer } from 'react';
import { createUseStyles } from 'react-jss';

import config from '../../config';
import data from '../../data';

import Comment from '../comment/comment';

let useStyle = createUseStyles({

    container : ({config}) => ({

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        alignItems : "stretch",
    }),
    title : ({config}) => ({

        margin : "2vh",

        fontFamily: "ubuntu",
        fontSize: "4vh",
        fontWeight: "bold",

        color : config.colorScheme[config.theme]["FG#1"],
    }),
});

export default function CommentArea()
{
    const classes = useStyle({config});
    return <div className={classes.container}>
        <p className={classes.title}>Comments</p>
        {data.posts[config.postConfig.postId].comments.map(({userName, profile, content, likes}) => <Comment userName={userName} profile={profile} content={content} likes={likes}></Comment>)}
    </div>;
}