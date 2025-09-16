import { createUseStyles } from 'react-jss';

let useStyle = createUseStyles({
    container : {

        background : "rgb(20, 20, 20)",

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
            border: "2px solid #ffffff",
        },
        "&:hover > img" : {
            border: "2px solid #ffffff",
        },
    },
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
    button : {
        width : "4vh",
        margin : "2vh",
    },
    buttonContainer : {
        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        justifyContent : "center",
        alignItems : "center",
    }
})

export default function PostCard({post})
{
    const classes = useStyle();
    return <div className={classes.container}>
        <img className={classes.img} src={post.images[0]} alt="post"></img>
        <p className={classes.caption}>{post.caption}</p>
        <div className={classes.buttonContainer}>
            <img className={classes.button} src="/icons/like.png" alt="like icon"></img>
            <img className={classes.button} src="/icons/pin.png" alt="pin icon"></img>
        </div>
    </div>;
}