
let data = {
  bio : {
    name : "Padmadev D",
    pronoun : "he/him",
    img : `${process.env.PUBLIC_URL}/images/profile.png`,
    role : "Student, B E Computer Science and Engineering",

    description : ` Hi, I’m Padmadev D, 
                    a Computer Science and Engineering undergraduate from KIT, Coimbatore, 
                    with a strong passion for game development, full-stack web, and competitive programming. 
                    I’ve built cross-platform projects using C++, Java, React, and Android NDK, 
                    including a realistic Sudoku game and a custom 2D game library. 
                    I’m also an active contributor to open-source graphics libraries like raylib and raymob, 
                    and I enjoy solving algorithmic challenges—having solved 500+ problems across major platforms.
                    I’m always eager to learn, build, and collaborate on impactful software projects.
                    .
                    கற்க கசடறக் கற்பவை கற்பின்
                    நிற்க அதற்குத் தக.`,

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
            name : "codechef",
            value : "https://www.codechef.com/users/kit27cse38"
        },
        {
            name : "leetcode",
            value : "https://leetcode.com/u/padmadevd/"
        },
        {
            name : "instagram",
            value : "https://www.instagram.com/the_lanoitar/"
        },
    ]
  },

  posts : [
    {
      id : 0,
      images : [`${process.env.PUBLIC_URL}/posts/4/a.png`, `${process.env.PUBLIC_URL}/posts/4/b.png`, `${process.env.PUBLIC_URL}/posts/4/c.png`, `${process.env.PUBLIC_URL}/posts/4/d.gif`],
      caption : "Project#1 Puppet Drama 2D",
      details :`PD2D (Puppet Drama 2D) is a cross-platform 2D animation software 
                for creating puppetry-based animations inspired by traditional shadow puppetry, 
                an ancient art form from regions such as India, China, Indonesia, and other parts of Asia.
                
                The software blends cultural storytelling with modern animation technology, 
                allowing creators to produce expressive 2D puppet animations using intuitive tools.
                .
                Features
                .
                Multiple editors and viewports for an efficient workflow.
                Real-time animation preview.
                Keyframe-based animation timeline.
                Precise control over motion, transforms, and effects.
                Physics-driven motion for natural puppet behavior.
                Inverse kinematics (IK) for easy joint and limb manipulation.
                Audio import and playback.
                Video reference playback for animation guidance.
                Node-based visual scripting system.
                Export animations to multiple video formats.
                Adjustable resolution, frame rate, and quality.`,
      likes : 10239,
      comments : [
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "This App is awesome 🔥!",
          likes : 12,
        },
        {
          userName : "sneha",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "I m remembering my child hoop days, where we used to watch shadow puppetry.",
          likes : 8,
        },
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Thank you all for the support!!!",
          likes : 12,
        },
        {
          userName : "peter",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Eagerly waiting to use the softwware.",
          likes : 8,
        },
      ]
    },
    {
      id : 1,
      images : [`${process.env.PUBLIC_URL}/posts/1/a.jpg`, `${process.env.PUBLIC_URL}/posts/1/b.jpg`, `${process.env.PUBLIC_URL}/posts/1/c.jpg`],
      caption : "Project#2 Classic Sudoku Puzzles",
      details : `Classic Sudoku Puzzles is a unique and immersive 
                Sudoku game that reimagines the traditional
                puzzle experience as a beautifully designed, 
                interactive book. Instead of a conventional UI, 
                players solve puzzles directly on realistic book pages, 
                writing digits just like in a physical notebook. 
                The game allows users to create unlimited books, 
                providing endless puzzles to enjoy, and 
                is especially well-suited for tablets and stylus users, 
                offering a natural, intuitive, and satisfying way to play. 
                With polished visuals, 
                smooth gameplay, 
                and a strong focus on user experience, 
                the project delivers an engaging and
                authentic puzzle-solving atmosphere.
                .
                .
                .
                The game is built with performance and 
                cross-platform support in mind. 
                The core engine is developed in C++ using raylib, 
                delivering a smooth and responsive experience. 
                An Android port was implemented using Java and the Android NDK, 
                with Gradle and CMake managing the build system. 
                The project also integrates TensorFlow and
                ONNX Runtime for advanced functionality, 
                ensuring scalability and modern AI support. 
                This robust tech stack enables high performance, 
                clean architecture, and a seamless experience across platforms.`,
      likes : 1234,
      comments : [
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "This UI is 🔥! The book-style Sudoku is genius 😍",
          likes : 12,
        },
        {
          userName : "alex",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Writing directly on the pages feels so satisfying 😮‍💨📚",
          likes : 8,
        },
        {
          userName : "jack",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Love that it supports stylus/tablet—so natural! 🙌",
          likes : 15,
        },
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Thank you all for the support!!!",
          likes : 12,
        },
        {
          userName : "peter",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "C++ + raylib + Android NDK = absolute power 💪",
          likes : 8,
        },
        {
          userName : "joseph",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Unlimited books? I’m never leaving this app 😂📖",
          likes : 15,
        },
      ]
    },
    {
      id : 2,
      images : [`${process.env.PUBLIC_URL}/posts/3/a.png`, `${process.env.PUBLIC_URL}/posts/3/b.png`, `${process.env.PUBLIC_URL}/posts/3/c.png`, `${process.env.PUBLIC_URL}/posts/3/d.png`],
      caption : "Project#3 Personal Portfolio",
      details :`A dynamic and interactive personal portfolio website
                featuring smooth scroll-based animations and modern UI effects.
                The page responds to user scrolling with animated transitions 
                and section changes to create an engaging experience.
                .
                Tech Stack
                .
                HTML5 - Structure and semantic layout
                CSS3 - Styling, layout, and responsiveness
                JavaScript (ES6) - Core logic and interactions
                jQuery - DOM manipulation and event handling
                Anime.js - Smooth, high-performance animations
                .
                Features
                .
                Scroll-based dynamic animations.
                Smooth transitions between sections.
                Interactive UI elements.
                Responsive design for different screen sizes.
                Lightweight and fast performance.`,
      likes : 1234,
      comments : [
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "This so wild!",
          likes : 12,
        },
        {
          userName : "alex",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "looking great 🔥",
          likes : 8,
        },
        {
          userName : "jack",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "i love your works 😍",
          likes : 15,
        },
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Thank you all for the support!!!",
          likes : 12,
        },
        {
          userName : "peter",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Great design 👏",
          likes : 8,
        },
      ]
    },
    {
      id : 3,
      images : [`${process.env.PUBLIC_URL}/posts/2/a.png`, `${process.env.PUBLIC_URL}/posts/2/b.png`, `${process.env.PUBLIC_URL}/posts/2/c.png`, `${process.env.PUBLIC_URL}/posts/2/d.png`],
      caption : "Project#4 Switch Chess",
      details :`SwitchChess is an innovative chess variant 
                built in C++ using raylib 
                that adds a strategic twist to traditional gameplay.
                .
                Every 10 moves, players must choose between two cards: 
                a Switch card, 
                which swaps the players’ positions, 
                or a +5 card, 
                which grants an additional five moves before the next card selection. 
                .
                The game uses the Stockfish engine to 
                power six different bot opponents, 
                offering varied difficulty and playing styles. 
                .
                With smooth animations and engaging mechanics, 
                SwitchChess delivers a fresh, challenging, 
                and visually polished chess experience.`,
      likes : 1234,
      comments : [
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "This variant is so clever! 😮♟️ Switching players mid-game is wild!",
          likes : 12,
        },
        {
          userName : "alex",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "+5 moves card adds a whole new level of strategy 🔥",
          likes : 8,
        },
        {
          userName : "jack",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Stockfish bots + smooth animations = next-level chess game 😍",
          likes : 15,
        },
        {
          userName : "padmadev",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Thank you all for the support!!!",
          likes : 12,
        },
        {
          userName : "peter",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Love the idea of card-based chess mechanics. Super creative 👏",
          likes : 8,
        },
        {
          userName : "joseph",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Six AI opponents? That’s a chess lover’s dream 😤♟️",
          likes : 15,
        },
      ]
    },
    {
      id : 4,
      images : [`${process.env.PUBLIC_URL}/posts/5/a.jpg`, `${process.env.PUBLIC_URL}/posts/5/b.jpg`, `${process.env.PUBLIC_URL}/posts/5/c.jpg`, `${process.env.PUBLIC_URL}/posts/5/d.jpg`, `${process.env.PUBLIC_URL}/posts/5/e.jpg`, `${process.env.PUBLIC_URL}/posts/5/f.jpg`, `${process.env.PUBLIC_URL}/posts/5/g.jpg`, `${process.env.PUBLIC_URL}/posts/5/h.jpg`, `${process.env.PUBLIC_URL}/posts/5/i.jpg`, `${process.env.PUBLIC_URL}/posts/5/j.jpg`, `${process.env.PUBLIC_URL}/posts/5/k.jpg`, `${process.env.PUBLIC_URL}/posts/5/l.jpg`, `${process.env.PUBLIC_URL}/posts/5/m.jpg`, `${process.env.PUBLIC_URL}/posts/5/n.jpg`, `${process.env.PUBLIC_URL}/posts/5/o.jpg`],
      caption : "Project#5 My Art Works",
      details :`I also do some art.`,
      likes : 1234,
      comments : [
        {
          userName : "alex",
          profile : `${process.env.PUBLIC_URL}/images/profile_blank.jpg`,
          content : "Your art works are superb!!!🔥",
          likes : 8,
        },
        
      ]
    }
  ]
};

export default data;