import { createUseStyles } from 'react-jss';

import config from '../../config';

import PostCard from '../post_card/post_card';

let useStyle = createUseStyles({

    container : ({config}) => ({

        background: config.colorScheme[config.theme]["BG#1"],
        color : config.colorScheme[config.theme]["FG#1"],

        flex : 1,

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        alignItems : "center",

        margin : "2vh 0vh",
    }),
    title : {

        margin : "2vh 0vh",

        fontFamily: "ubuntu",
        fontSize: "4vh",
        fontWeight: "bold",
    },
    postContainer : {

        display : "grid",
        gridTemplateColumns: "repeat(2, 1fr)",

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
    },
})

function postClickHandler(event, postId)
{
    if(config.activeWindow == "null")
    {
        config.postConfig.postId = postId;
        config.setActiveWindow("post");
    }
}

export default function PostArea({data})
{
    const classes = useStyle({config});

    return <div className={classes.container}>
        <p className={classes.title}> Posts </p>
        <div className={classes.postContainer}>
            {data.map(post => {
                return <PostCard post={post} onClick={(event)=>{postClickHandler(event, post.id)}}/>
            })}
        </div>
    </div>;
}