import { createUseStyles } from 'react-jss';

import config from '../../config';

import Description from '../description/description';
import Skills from '../skills/skills';
import Links from '../links/links';
import Footer from '../footer/footer';

let useStyle = createUseStyles({

    container : ({config}) => ({

        background: config.colorScheme[config.theme]["BG#1"],
        color : config.colorScheme[config.theme]["FG#1"],

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",

        padding : "2vh",
        minWidth : 0,
        flex : 1,

        borderRight: `2px solid ${config.colorScheme[config.theme]["FG#1"]}`,
    }),

    topCont : ({config}) => ({

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",

        paddingBottom : "2vh",

        minHeight: 0,
        minWidth : 0,
        
        flex : 1,

        borderBottom: `2px solid ${config.colorScheme[config.theme]["FG#3"]}`,
    }),

    leftCont : ({config}) => ({

        padding : "2vh",

        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",
        justifyContent : "center",
        alignItems : "center",

        flex : 1,

        borderRight: `2px solid ${config.colorScheme[config.theme]["FG#3"]}`,
    }),

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
    pronoun : ({config}) => ({

        fontFamily: "ubuntu",
        fontSize: "1vw",
        color : config.colorScheme[config.theme]["FG#3"],
    }),
    role : ({config}) => ({

        fontFamily: "ubuntu",
        fontSize: ".9vw",
        fontWeight : "bold",
        color : config.colorScheme[config.theme]["FG#3"],
    }),
});

export default function Bio({data})
{
    const classes = useStyle({config});

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