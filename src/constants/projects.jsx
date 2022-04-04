// header icons
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si'

//Project 1 Assets
import Course1 from '../Assets/Projects/Project1/Courses1.PNG'
import Course2 from '../Assets/Projects/Project1/Courses2.PNG'
import Course3 from '../Assets/Projects/Project1/Courses3.PNG'
import Course4 from '../Assets/Projects/Project1/Courses4.PNG'
import Course5 from '../Assets/Projects/Project1/Courses5.png'

//Project 2 Assets
//import Pizza1 from '../Assets/Projects/Project2/Pizza1.PNG'
//import Pizza2 from '../Assets/Projects/Project2/Pizza2.PNG'
//import Pizza3 from '../Assets/Projects/Project2/Pizza3.PNG'
//import Pizza4 from '../Assets/Projects/Project2/Pizza4.PNG'
//import Pizza5 from '../Assets/Projects/Project2/mern.jpeg'

// Project Technologies icons
import { DiCss3, DiGithubBadge, DiReact } from 'react-icons/di'
import { SiRedux, SiHtml5, SiJavascript } from 'react-icons/si'

const projects = [
        {
                "Id": "1",
                "Image": Course5,
                "Images": {
                        "img1": {
                                "original": Course1,
                                "thumbnail": Course1
                        },
                        "img2": {
                                "original": Course2,
                                "thumbnail": Course2
                        },
                        "img3": {
                                "original": Course3,
                                "thumbnail": Course3
                        },
                        "img4": {
                                "original": Course4,
                                "thumbnail": Course4
                        },
                        "img5": {
                                "original": Course5,
                                "thumbnail": Course5
                        },
                },
                "Name": "ReactJS & TypeScript Project | StarWars Fan-site",
                "Icon": <FaReact />,
                "Date": "11/2021 to 04/2022",
                "shortDescription": "Development of a Fansite project using the www.swapi.dev api. For this project I wanted to use TypeScript, ReactJS and Axios to showcase my knowledge, skills and practices with the tools chosen. Modern syntax and practices for better maintainability, readability and scalability of the code. This experience has been great from the start, since I've done from the prototype to deploy. I liked the result, but still working on some components designs since the results didn't resonate with my idea of a great UX. It's been a long and fruitious journey to put in practice many of concepts that I've learned in the past years of development, also peeking into prototyping concepts and tools that until now I've only had been on the other end side of the process, expanding my whole understanding of the process of development as o whole.",
                "Description": "This project is a Fansite of Star Wars, using ReactJS, TypeScript, Vite, Axios and SASS. In this project I choose to use the swapi.dev api to develop this project. This way i can fetch and manipulate data from a real api to build a more complex site. And also required a more advanced use of React. Overall was a fun project to build from scratch, and managed to accomplish it's purpose which was to train my React,TypeScript,Axios,SASS skills. There is still a lot to be done, and many styles which need improving. This is the first version of the site and I intend to keep updating every once in a while when I get some spare time.  ",
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

                "projectLearn": "What I've learned during the development process of this project, there were many things, but one that was the biggest insight was the necessity of a really clear communication between the backend team and the frontend team, defining a data structure that will suit both environments is optimal. This way the productivity of both teams will increase significantly. And when this communication is not crystal clear, thats when complications start to happen. Since I hade a stack previously set to develop the site, I did not know I would need to research and learn a lot about Axios and React hooks methods to deal with the data structure of the , which was great. Also with this project I was able to grasp more of TypeScript uses and importance in modern applications, even in single member team. Folder Structure, componentization, responsiveness , React hooks especially useEffect and Typing were also topics where I felt I've greatly improved in the course of this project. And I am very happy for how the version '1.0.0' of the site turned out to  and for all the knowlegde that this experience has added to my stack and skill set.",
                "projectDayToDay": "",
                "projectMyRole": "My role in this project was deciding the technologies required, the UI and UX. Since this project was developed only by me I was in charge of everything from the scratch, from prototyping to developing each page and component, setting up a scalable folder structure pattern and style pattern. Except from the api which is free api with data related to Star Wars. So I had total freedom to decide methods and patterns, which I choose the best as I could based on the principles of readability, maintainability and scalability and good code practices. I was determined to make as professional and modern as I could by myself and Im proud of the achieved.",
                "projectRepo": "https://github.com/wakenedo/courses-project",
                "Technologies": {
                        "tool1": {
                                "Badge": <SiJavascript />,
                                "Text": "JavaScript",
                                "Link": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
                        },
                        "tool2": {
                                "Badge": <SiHtml5 />,
                                "Text": "HTML 5",
                                "Link": "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
                        },
                        "tool3": {
                                "Badge": <DiCss3 />,
                                "Text": "CSS 3",
                                "Link": "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                        },
                        "tool4": {
                                "Badge": <DiReact />,
                                "Text": "React JS",
                                "Link": "https://pt-br.reactjs.org/",

                        },
                        "tool5": {
                                "Badge": <SiRedux />,
                                "Text": "Redux",
                                "Link": "https://redux.js.org/",
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