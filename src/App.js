import { useReducer } from 'react';
import { createUseStyles } from 'react-jss';

import config from './config.js';
import data from './data.js';

import Bio from './components/bio/bio.js';
import PostArea from './components/post_area/post_area.js';
import PostWindow from './components/postWindow/postWindow.js';

let useStyle = createUseStyles({

  root : ({config}) => ({

    background : config.colorScheme[config.theme]["BG#1"],
    color : config.colorScheme[config.theme]["FG#1"],

    display : "flex",
    flexDirection : "row",
    flexWrap : "nowrap",
    alignItems : "stretch",

    width : "100vw",
    height : "100vh",
    overflow : "hidden"
  }),
});

let _useStyle = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      userSelect : "none",
    },
    "@font-face": [
      {
        fontFamily: "ubuntu",
        src: "url('/fonts/ubuntu/Ubuntu-Regular.ttf') format('truetype')",
        fontWeight: "normal",
        fontStyle: "normal",
      },
      {
        fontFamily: "ubuntu",
        src: "url('/fonts/ubuntu/Ubuntu-Bold.ttf') format('truetype')",
        fontWeight: "bold",
        fontStyle: "normal",
      },
      {
        fontFamily: "ubuntu",
        src: "url('/fonts/ubuntu/Ubuntu-Italic.ttf') format('truetype')",
        fontWeight: "normal",
        fontStyle: "italic",
      },
    ],
  },
});

function setThemeReducer(oldTheme, newTheme)
{
  config.theme = newTheme;
  return newTheme;
}

function setActiveWindowReducer(oldWindow, newWindow)
{
  config.activeWindow = newWindow;
  return newWindow;
}

function App() {

  const classes = useStyle({config});
  const _classes = _useStyle();

  const [theme, setTheme] = useReducer(setThemeReducer, "dark");
  const [activeWindow, setActiveWindow] = useReducer(setActiveWindowReducer, "null");

  config.setTheme = setTheme;
  config.setActiveWindow = setActiveWindow;

  let window = null;
  if(config.activeWindow != "null")
  {
    switch(activeWindow)
    {
      case "post":
        window = <PostWindow></PostWindow>;
        break;
    }
  }

  return <div className={classes.root}>
    <Bio data = {data.bio}/>
    <PostArea data = {data.posts}/>
    {window}
  </div>;
}

export default App;