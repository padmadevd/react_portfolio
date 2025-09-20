import { createUseStyles } from 'react-jss';

import config from '../../config';

import { SettingsIcon, LightModeIcon, DarkModeIcon, SendIcon, FormDownloadIcon } from '../../icons';

let useStyle = createUseStyles({

    container : ({config}) => ({

        display : "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        justifyContent : "space-around",

        padding : "2vh",

        borderTop: `2px solid ${config.colorScheme[config.theme]["FG#3"]}`,
    }),
    button : ({config}) => ({

        height : "5vh",
        "&:hover" : {
            cursor: "pointer",
        },

        fill : config.colorScheme[config.theme]["FG#1"],
    }),
});

function themeButtonHandler(e)
{
    if(config.theme == "dark")
    {
        config.setTheme("light");
    }
    else
    {
        config.setTheme("dark");
    }
}

export default function Footer()
{
    const classes = useStyle({config});
    return <div className={classes.container}>
        <SettingsIcon className={classes.button}> </SettingsIcon>
        {config.theme == "dark" ? <LightModeIcon onClick={themeButtonHandler} className={classes.button}> </LightModeIcon> : <DarkModeIcon onClick={themeButtonHandler} className={classes.button}> </DarkModeIcon>}
        <SendIcon className={classes.button}> </SendIcon>
        <FormDownloadIcon className={classes.button}> </FormDownloadIcon>
    </div>
}