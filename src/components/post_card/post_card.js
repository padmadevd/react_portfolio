import { createUseStyles } from 'react-jss';

import config from '../../config';

import { LikeIcon, PinIcon } from '../../icons';

let useStyle = createUseStyles({

    container : ({config}) => ({

        background : config.colorScheme[config.theme]["BG#2"],

        width : "40vh",
        height : "55vh",
        
        padding : "0px",
        margin : "3vh",

        borderRadius : "3vh",

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        justifyContent : "space-between",
        alignItems : "center",

        "&:hover" : {
            border: `3px solid ${config.colorScheme[config.theme]["BLUE#1"]}`,
            cursor: "pointer",
        },
        "&:hover > img" : {
            border: `3px solid ${config.colorScheme[config.theme]["BLUE#1"]}`,
        },

    }),
    img : {

        width : "35vh",
        borderRadius : "2vh",

        margin : "2.5vh",
    },
    caption : {

        fontFamily: "ubuntu",
        fontSize: "3vh",
    
        width: "30vh",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",

        margin : "1vh",
    },
    button : ({config}) => ({

        width : "4vh",
        margin : "2vh",

        fill : config.colorScheme[config.theme]["FG#1"],
    }),
    buttonContainer : {
        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        justifyContent : "center",
        alignItems : "center",
    }
})

export default function PostCard({post, ...props})
{
    const classes = useStyle({config});
    return <div className={classes.container} {...props}>
        <img className={classes.img} src={post.images[0]} alt="post"></img>
        <p className={classes.caption}>{post.caption}</p>
        <div className={classes.buttonContainer}>
            <PinIcon className={classes.button}> </PinIcon>
            <LikeIcon className={classes.button}> </LikeIcon>
        </div>
    </div>;
}