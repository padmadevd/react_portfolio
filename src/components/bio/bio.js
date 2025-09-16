import { createUseStyles } from 'react-jss';
import Description from '../description/description';
import Skills from '../skills/skills';
import Links from '../links/links';
import Footer from '../footer/footer';

let useStyle = createUseStyles({

    container : {
        background:"black",
        color : "white",

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",

        padding : "2vh",
        minWidth : 0,
        flex : 1,

        borderRight: "2px solid white"
    },

    topCont : {

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",

        paddingBottom : "2vh",

        minHeight: 0,
        minWidth : 0,
        
        flex : 1,

        borderBottom: "2px solid rgb(50, 50, 50)",
    },

    leftCont : {
        padding : "2vh",

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        justifyContent : "center",
        alignItems : "center",

        flex : 1,

        borderRight: "2px solid rgb(50, 50, 50)",
    },

    rightCont : {
        
        padding : "2vh",

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",

        flex : 1,

        minWidth : 0,
    },
    
    profile : {
        margin: "2vh",
        width : "10vw",
        borderRadius : "50%"
    },
    nameWrapper : {
        margin: "2vh",

        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap",
        alignItems : "baseline"
    },
    name : {
        marginRight: ".5vw",

        fontFamily: "ubuntu",
        fontSize: "2vw",
    },
    pronoun : {
        fontFamily: "ubuntu",
        fontSize: "1vw",
        color : "rgb(100, 100, 100)",
    },
    role : {
        fontFamily: "ubuntu",
        fontSize: ".9vw",
        fontWeight : "bold",
        color : "rgb(100, 100, 100)",
    }
});

export default function Bio({data})
{
    const classes = useStyle();

    return <div className={classes.container}>
        <div className={classes.topCont}>
            <div className={classes.leftCont}>
                <img className={classes.profile} src={data.img} alt='profile img'/>
                <div className={classes.nameWrapper}>
                    <p className={classes.name}>{data.name}</p>
                    <p className={classes.pronoun}>{data.pronoun}</p>
                </div>
                <p className={classes.role}>{data.role}</p>
            </div>
            <div className={classes.rightCont}>
                <Skills skills={data.skills}/>
                <Links links={data.links}/>
            </div>
        </div>
        <Description description={data.description}/>
        <Footer></Footer>
    </div>;
}