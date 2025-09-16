import { createUseStyles } from 'react-jss';
import Bio from './components/bio/bio.js';
import PostArea from './components/post_area/post_area.js';

let useStyle = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
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

  root : {

    background : "black",
    color : "white",

    display : "flex",
    flexDirection : "row",
    flexWrap : "nowrap",

    width : "100vw",
    height : "100vh",
    overflow : "hidden"
  }
});

let bioData = {
    name : "Padmadev D",
    pronoun : "he/him",
    img : "profile.png",
    role : "Student, B E Computer Science and Engineering",

    description : ` Hi, I’m Padmadev 👋
                    I’m deeply passionate about coding, technology, and problem-solving.
                    I love exploring new frameworks, libraries, and design patterns.
                    .
                    .
                    .
                    .
                    .
                    .
                    அழுக்கா றுடையான்கண் ஆக்கம்போன்று இல்லை
                    ஒழுக்க மிலான்கண் உயர்வு.
                `,

    skills : ["c++", "c", "node", "java script", "python", "java", "html", "css", "react", "express", "sql", "blender", "davinci", "inkscape", "godot"],
    links : [
        {
            name : "github",
            value : "https://github.com/padmadevd"
        },
        {
            name : "itchio",
            value : "https://padmadevd.itch.io/"
        },
        {
            name : "linkedin",
            value : "https://www.linkedin.com/in/padmadev-d-32243b292/"
        },
        {
            name : "instagram",
            value : "https://www.instagram.com/padmadevd/"
        },
        {
            name : "codechef",
            value : "https://www.codechef.com/users/kit27cse38"
        },
        {
            name : "leetcode",
            value : "https://leetcode.com/u/padmadevd/"
        },
    ]
}

let postData = [
  {
    images : ["/posts/1/img1.jpg", "/posts/1/img2.jpg", "/posts/1/img3.jpg", "/posts/1/img4.jpg"],
    caption : "A post card demo A post card demo",
    details :`this is a post card demo of this portfolio site... 
              again, this is a post card demo of this portfolio site...`,
    likes : 1234,
    comments : [
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      }
    ]
  },
  {
    images : ["/posts/1/img3.jpg", "/posts/1/img4.jpg", "/posts/1/img1.jpg", "/posts/1/img2.jpg", ],
    caption : "A post card demo A post card demo",
    details :`this is a post card demo of this portfolio site... 
              again, this is a post card demo of this portfolio site...`,
    likes : 1234,
    comments : [
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      }
    ]
  },
  {
    images : ["/posts/1/img4.jpg", "/posts/1/img1.jpg", "/posts/1/img2.jpg", "/posts/1/img3.jpg", ],
    caption : "A post card demo A post card demo",
    details :`this is a post card demo of this portfolio site... 
              again, this is a post card demo of this portfolio site...`,
    likes : 1234,
    comments : [
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      }
    ]
  },
  {
    images : ["/posts/1/img1.jpg", "/posts/1/img2.jpg", "/posts/1/img3.jpg", "/posts/1/img4.jpg"],
    caption : "A post card demo A post card demo A post card demo",
    details :`this is a post card demo of this portfolio site... 
              again, this is a post card demo of this portfolio site...`,
    likes : 1234,
    comments : [
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      }
    ]
  },
  {
    images : ["/posts/1/img2.jpg", "/posts/1/img3.jpg", "/posts/1/img4.jpg", "/posts/1/img1.jpg"],
    caption : "A post card demo",
    details :`this is a post card demo of this portfolio site... 
              again, this is a post card demo of this portfolio site...`,
    likes : 1234,
    comments : [
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      },
      {
        username : "",
        profile : "",
        content : "",
        likes : 0,
      }
    ]
  },
]

function App() {

  const classes = useStyle();

  return <div className={classes.root}>
    <Bio data = {bioData} />
    <PostArea data = {postData}/>
  </div>
}

export default App;