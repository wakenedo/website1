// header icons
import { FaReact } from 'react-icons/fa';


//Project 1 Assets
import StarWars1 from '../Assets/StarWars/star-wars-home.PNG'
import StarWars2 from '../Assets/StarWars/star-wars-1.PNG'
import StarWars3 from '../Assets/StarWars/star-wars-2.PNG'
import StarWars4 from '../Assets/StarWars/star-wars-3.PNG'
import StarWars5 from '../Assets/Projects/Project1/React.png'

//Project 2 Assets
//import Pizza1 from '../Assets/Projects/Project2/Pizza1.PNG'
//import Pizza2 from '../Assets/Projects/Project2/Pizza2.PNG'
//import Pizza3 from '../Assets/Projects/Project2/Pizza3.PNG'
//import Pizza4 from '../Assets/Projects/Project2/Pizza4.PNG'
//import Pizza5 from '../Assets/Projects/Project2/mern.jpeg'

// Project Technologies icons
import { DiGithubBadge, DiReact } from 'react-icons/di'
import { SiStyledcomponents, SiJavascript, SiTypescript, SiVite, SiMaterialui } from 'react-icons/si'

const projects = [
        {
                "Id": "1",
                "Image": StarWars1,
                "Images": {
                        "img1": {
                                "original": StarWars1,
                                "thumbnail": StarWars1
                        },
                        "img2": {
                                "original": StarWars2,
                                "thumbnail": StarWars2
                        },
                        "img3": {
                                "original": StarWars3,
                                "thumbnail": StarWars3
                        },
                        "img4": {
                                "original": StarWars4,
                                "thumbnail": StarWars4
                        },
                        "img5": {
                                "original": StarWars5,
                                "thumbnail": StarWars5
                        },
                },
                "Name": "ReactJS & TypeScript Project | StarWars Fan-site",
                "Icon": <FaReact />,
                "Date": "11/2021 to 04/2022",
                "shortDescription": "In this project i put my TypeScript and React Hooks habilities to test, for this one I also wanted to use Vite for bundling and Axios for requisitions. Modern syntax and good practices for better maintainability, readability and scalability of the code. I am still working on some components designs during my free time. I learned more about typing, data structures, React Hooks, file structures and names. My aim with this project for the moment is to rework some of the interfaces and add a pagination component to some tables of content.",
                "Description": "This project is a Fansite of Star Wars, using ReactJS, TypeScript, Vite, Axios and Styled-Components. In this project I choose to use the swapi.dev api to fetch data from. This way i can manipulate data from a real public api. This project requires a more advanced use of React Hooks and modern synthax in general. Overall It has been so far a really fun project to build, and manage to accomplish all set goals feels great. it's a work on progress and its purpose is to train my React,TypeScript,Axios understanding and trying out new things I learn along the way.  ",
                "projectTech": {
                        "tech1": "Design | Figma",
                        "tech2": "Database | www.swapi.dev",
                        "tech3": "Scope | TypeScript - React.js - Frontend "
                },
                "projectTools": {
                        "tool1": " Styled Components - Styling",
                        "tool2": " React Hooks - UseState | UseEffect",
                        "tool3": " Axios - API fetching",
                        "tool4": " Vite - Bundling",
                        "tool5": " GitHub - Versioning",

                },

                "projectLearn": "What I've learned during the development process of this project, there were many things, but one that was the biggest , was the necessity of a really clear communication between the backend team and the frontend team, defining a data structure that will suit both environments is the optimal way in terms of productivity.  Since I had a stack previously set to develop the site, I did not know I would need to research and learn a lot about Axios and React hooks methods to deal with the data structure of the , which was great. Also with this project I was able to grasp more of TypeScript uses and how important a clear typing pattern in modern applications really are, even notable for a single developer project. Folder Structure, Component Structure, responsiveness , React hooks especially useEffect and Typing were both topics where I felt I've greatly improved in the course of this project by the hours i had to read into the documentation of both.  I am very happy for how the version '1.0.0' of the site turned out to  and for all the knowledge that this experience has added to my stack and skill set.",
                "projectDayToDay": "My day to day consisted In implementing the interfaces, component functionability, design , fetching data and manipulate it to work as expected,  StackOverflow , Google, ReactDocs, AxiosDocs  were key elements to making the whole project to work. They helped me understand errors  and fix bugs in the app. After implemented all the visuals for all the pages,and components  the dynamic fetching of the data and how to render was the next step to implement, where I've found a lot of difficulties related to the data structure defined in the API. After that milestone was resolved, the next issue was a badly defined structure for the Pages components, that was returning a JSX.Element or Undefined, making TypeScript to point an error for all Pages components when called from app.tsx. All the development process is registered via commits in the GitHub repository.",
                "projectMyRole": "My role in this project was deciding the technologies required, the UI and UX. Since this project was developed only by me I was in charge of everything from the scratch, from prototyping to developing each page and component, setting up a scalable folder structure pattern and style pattern. Except from the api which is free api with data related to Star Wars. So I had total freedom to decide methods and patterns, which I choose the best as I could based on the principles of readability, maintainability and scalability and good code practices. ",
                "projectRepo": "https://github.com/wakenedo/star-wars-site",
                "projectDeploy": "https://starwarsfansite.netlify.app/",
                "Technologies": {
                        "tool1": {
                                "Badge": <SiJavascript />,
                                "Text": "JavaScript",
                                "Link": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                        },
                        "tool2": {
                                "Badge": <SiVite />,
                                "Text": "Vite",
                                "Link": "https://vitejs.dev/",
                        },
                        "tool3": {
                                "Badge": <SiStyledcomponents />,
                                "Text": "Styled-Components",
                                "Link": "https://styled-components.com/",
                        },
                        "tool4": {
                                "Badge": <DiReact />,
                                "Text": "React JS",
                                "Link": "https://pt-br.reactjs.org/",

                        },
                        "tool5": {
                                "Badge": <SiTypescript />,
                                "Text": "TypeScript",
                                "Link": "https://www.typescriptlang.org/",
                        },
                        "tool6": {
                                "Badge": <DiGithubBadge />,
                                "Text": "GitHub",
                                "Link": "https://github.com/",
                        }

                },
        },
        {
                "Id": "2",
                "Image": 'Course1',
                "Images": {
                        "img1": {
                                "original": 'Course1',
                                "thumbnail": 'Course1'
                        },
                        "img2": {
                                "original": 'Course2',
                                "thumbnail": 'Course2'
                        },
                        "img3": {
                                "original": 'Course3',
                                "thumbnail": 'Course3'
                        },
                        "img4": {
                                "original": 'Course4',
                                "thumbnail": 'Course4'
                        },
                        "img5": {
                                "original": 'Course5',
                                "thumbnail": 'Course5'
                        },
                },
                "Name": "ReactJS & MaterialUI Project | Fitness-App",
                "Icon": <SiMaterialui />,
                "Date": "11/2021 to 04/2022",
                "shortDescription": "In this project I wanted to use RapidAPI  which is a database of APIs, easy to setup and clear to understand, to develop a fitness app with modern ReactJS synthax, file and folder structure, and for the styling I wanted to check out MateriaUI to study its best practices and synthaxs to better understand the tool and it's uses, and the result is a clean and beautiful website connected to two apis, and data fetching to provide the experience of a clean and intuitive web site to surf on. ",
                "Description": "This project, is a for learning porposes, been a while since I've wanted to do a project with all the power of MaterialUI with ReactJS to develop a clean responsive app, and the results are above what I was expecting. Also other tool I was interested about using in a project was RapidAPI, which is basically a database of API where you can subscribe to them and use during development process, there is a test subscription that allows you to test the ones you find interesting, I chose ExerciseDB and Youtube Search and Download both with impressive content,data structure and documentation.",
                "projectTech": {
                        "tech1": "Design | Figma",
                        "tech2": "Database | RapidAPI",
                        "tech3": "Scope | MaterialUI - React.js - Frontend "
                },
                "projectTools": {
                        "tool1": " MaterialUI - Styling",
                        "tool2": " React Hooks - UseState | UseEffect",
                        "tool3": " RapidAPI - ExerciseDB | Youtube Search and Download",
                        "tool4": null,
                        "tool5": " GitHub - Versioning",

                },

                "projectLearn": "What I've learned during the development process of this project, there were many things, but one that was the biggest , was the necessity of a really clear communication between the backend team and the frontend team, defining a data structure that will suit both environments is the optimal way in terms of productivity.  Since I had a stack previously set to develop the site, I did not know I would need to research and learn a lot about Axios and React hooks methods to deal with the data structure of the , which was great. Also with this project I was able to grasp more of TypeScript uses and how important a clear typing pattern in modern applications really are, even notable for a single developer project. Folder Structure, Component Structure, responsiveness , React hooks especially useEffect and Typing were both topics where I felt I've greatly improved in the course of this project by the hours i had to read into the documentation of both.  I am very happy for how the version '1.0.0' of the site turned out to  and for all the knowledge that this experience has added to my stack and skill set.",
                "projectDayToDay": "My day to day consisted In implementing the interfaces, component functionability, design , fetching data and manipulate it to work as expected,  StackOverflow , Google, ReactDocs, AxiosDocs  were key elements to making the whole project to work. They helped me understand errors  and fix bugs in the app. After implemented all the visuals for all the pages,and components  the dynamic fetching of the data and how to render was the next step to implement, where I've found a lot of difficulties related to the data structure defined in the API. After that milestone was resolved, the next issue was a badly defined structure for the Pages components, that was returning a JSX.Element or Undefined, making TypeScript to point an error for all Pages components when called from app.tsx. All the development process is registered via commits in the GitHub repository.",
                "projectMyRole": "My role in this project was deciding the technologies required, the UI and UX. Since this project was developed only by me I was in charge of everything from the scratch, from prototyping to developing each page and component, setting up a scalable folder structure pattern and style pattern. Except from the api which is free api with data related to Star Wars. So I had total freedom to decide methods and patterns, which I choose the best as I could based on the principles of readability, maintainability and scalability and good code practices. ",
                "projectRepo": "https://github.com/wakenedo/star-wars-site",
                "projectDeploy": "https://starwarsfansite.netlify.app/",
                "Technologies": {
                        "tool1": {
                                "Badge": <SiJavascript />,
                                "Text": "JavaScript",
                                "Link": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                        },
                        "tool2": {
                                "Badge": <SiMaterialui />,
                                "Text": "Material UI",
                                "Link": "https://vitejs.dev/",
                        },
                        "tool3": { 
                                
                        },
                        "tool4": {
                                "Badge": <DiReact />,
                                "Text": "React JS",
                                "Link": "https://pt-br.reactjs.org/",

                        },
                        "tool5": {
                                
                        },
                        "tool6": {
                                "Badge": <DiGithubBadge />,
                                "Text": "GitHub",
                                "Link": "https://github.com/",
                        }

                },
        },

]

export default projects