import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    container : {

        flex : 1,
        
        display : "flex",
        flexDirection : "column",
        flexWrap : "nowrap",

        padding : "2vh",

        minHeight : 0,
    },
    title : {

        margin : "1vh 0vh",

        flexShrink : 0,
        flexGrow : 0,

        fontFamily: "ubuntu",
        fontSize: "3vh",
        fontWeight: "bold",
    },
    content : {

        flexGrow : 1,

        overflow : "auto",

        minHeight : 0,

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
    line : {
        fontFamily: "ubuntu",
        fontStyle : "italic",
        fontSize: "2vh",
        textWrap : "nowrap",
        marginTop: "1vh",
    }
});

export default function Description({description})
{
    const classes = useStyle();
    return <div className={classes.container}>
        <p className={classes.title}>About</p>
        <div className={classes.content}>
            {description.split(/\r?\n/).map(line => (<p className={classes.line}>{line}</p>))}
        </div>
    </div>;
}

Description.propTypes = {
    description : PropTypes.string.isRequired
};