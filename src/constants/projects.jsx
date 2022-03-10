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
                "Description": "Desenvolvimento de frontend para site de educação ou Courses.edu (MockUp), utilizando ReactJS, CSS e HTML com aspectos de e-commerce que ofertava cursos de diferentes parceiros além de oferecer o próprio catálago de cursos. Desenvolvimento de páginas e rotas. Entrega via GitHub com código testado pelo cliente. Eu fiz parte do time de kanban. Tasks diários e reuniões semanais para alinhar os objetivos e times durante todo o curso do projeto.",
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

                "projectLearn": "O que eu aprendi com esse projeto, foi principalmente a habilidade de trabalhar em equipe utilizando metodologias agile além de aprender na prática as qualidades da biblioteca Axios em chamadas HTTP para APIs, e sua integração com o ReactJS, além de desenvolver um sitema de autenticação utilizando o JWT token, que me permitiu entender na prática as vantagens e desafios da técnologia em questão, com esse projeto pude aprimorar minhas habilidades de frontend e programação além de softskills, como organização pessoal e trabalho em equipe.",
                "projectDayToDay": "Minha rotina no projeto era de entrar no programa que foi escolhido para organizar o workflow, ver as tasks designadas a mim, e começar a trabalhar no código usando estratégias de commit e branching, depois de completa a task, era necessário enviar o código via repositório no Github. Que então era testado, pela equipe de teste para ser testado. Caso o código não cumprisse os requisitos era reaberta a task. Caso o código funcionasse, era só esperar a próxima task ser designada.",
                "projectMyRole": "Meu papel no projeto, era de integrar o time de kanban e desenvolver o frontend, com endpoints e páginas autenticadas como a página de usuários e sistema de autenticação para login, utilizando token JWT, o protótipo das páginas foi disponibilizado no inicio do projeto aos desenvolvedores através de documento no Figma.",
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