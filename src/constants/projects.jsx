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
import Pizza1 from '../Assets/Projects/Project2/Pizza1.PNG'
import Pizza2 from '../Assets/Projects/Project2/Pizza2.PNG'
import Pizza3 from '../Assets/Projects/Project2/Pizza3.PNG'
import Pizza4 from '../Assets/Projects/Project2/Pizza4.PNG'
import Pizza5 from '../Assets/Projects/Project2/mern.jpeg'

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
                "Name": "React.js Project | Courses.edu",
                "Icon": <FaReact />,
                "Date": "02/2018 to 05/2018",
                "shortDescription": "Criação e update de conteúdo para site de educação. Desenvolvimento de páginas e novas rotas com conteúdo e estilo atualizado.",
                "Description": "Desenvolvimento de frontend para site de educação ou Courses.edu (MockUp), utilizando ReactJS, CSS e HTML com aspectos de e-commerce que ofertava cursos de diferentes parceiros além de oferecer o próprio catálago de cursos. Desenvolvimento de páginas e rotas. Entrega via GitHub com código testado pelo cliente. Eu fiz parte do time de kanban. Tasks diários e reuniões semanais para alinhar os objetivos e times durante todo o curso do projeto.",
                "projectTech": {
                        "tech1": "Design | Figma",
                        "tech2": "Database | Node.js - Express",
                        "tech3": "Scope | React.js - Frontend "
                },
                "projectTools": {
                        "tool1": " CSS - Styling",
                        "tool2": " React Hooks - UseState | UseEffect",
                        "tool3": " Redux - Storage",
                        "tool4": " Axios - API fetching",
                        "tool5": " Postman - Testing",
                        "tool6": " GitHub - Versioning"
                },

                "projectLearn": "O que eu aprendi com esse projeto, foi principalmente a habilidade de trabalhar em equipe e as qualidades da biblioteca Axios em chamadas HTTP, e sua   ",
                "projectDayToDay": "O que eu aprendi com esse projeto, foi principalmente a habilidade de trabalhar em equipe e as qualidades da biblioteca Axios em chamadas HTTP,   ",
                "projectMyRole": "O que eu aprendi com esse projeto, foi principalmente a habilidade de trabalhar em equipe e as qualidades da biblioteca Axios em chamadas HTTP,   ",
                "Technologies": {
                        "tool1": {
                                "Badge": <SiJavascript/>,
                                "Text":  "JavaScript"
                        },              
                        "tool2": {
                                "Badge" : <SiHtml5 />,
                                "Text"  : "HTML 5"
                        },
                        "tool3": {
                                "Badge" : <DiCss3 />,
                                "Text"  : "CSS 3"
                        },
                        "tool4": {
                                "Badge" : <DiReact />,
                                "Text"  : "React JS"

                        },
                        "tool5":{
                                "Badge" : <SiRedux />,
                                "Text"  : "Redux"
                        },
                        "tool6": {
                                "Badge" : <DiGithubBadge />,
                                "Text"  : "GitHub"
                        }
                         
                },
        },
        {
                "Id": "2",
                "Image": Pizza5,
                "Images": {
                        "img1": {
                                "original": Pizza1,
                                "thumbnail": Pizza1
                        },
                        "img2": {
                                "original": Pizza2,
                                "thumbnail": Pizza2
                        },
                        "img3": {
                                "original": Pizza3,
                                "thumbnail": Pizza3
                        },
                        "img4": {
                                "original": Pizza4,
                                "thumbnail": Pizza4
                        },
                        "img5": {
                                "original": Pizza5,
                                "thumbnail": Pizza5
                        },
                },
                "Name": "Mern Stack Project | Pizza.com",
                "Icon": <><SiMongodb /> <FaNodeJs /> <FaReact /></>,
                "Date": "02/2018 to 05/2018",
                "shortDescription": "Update de conteúdo para site institucional, de venda de cursos.Desenvolvimento de algumas páginas e rotas com o conteúdo atualizado.Sem a necessidade de deploy, apenas desenvolvimento.Entrega via BitBucket com código testado. Entregas  semanais a partir dos designs providos.",
                "Description": "Update de conteúdo para site institucional, de venda de cursos.Desenvolvimento de algumas páginas e rotas com o conteúdo atualizado.Sem a necessidade de deploy, apenas desenvolvimento.Entrega via BitBucket com código testado. Entregas  semanais a partir dos designs providos.",
                "projectTech": {
                        "tech1": "Design | Figma",
                        "tech2": "Database | Node.js - Express",
                        "tech3": "Scope | React.js - Frontend "
                },
                "projectTools": {
                        "tool1": " CSS - Styling",
                        "tool2": " React Hooks - UseState | UseEffect",
                        "tool3": " Redux - Storage",
                        "tool4": " Axios - API fetching",
                        "tool5": " Postman - Testing",
                        "tool6": " BitBucket - Versioning"
                },

                "projectLearn": "teste",
                "projectDayToDay": "teste",
                "projectMyRole": "teste MyRole",
                "Technologies": {},
        },
        {
                "Id": "3",
                "Image": Pizza5,
                "Images": {
                        "img1": {
                                "original": Pizza1,
                                "thumbnail": Pizza1
                        },
                        "img2": {
                                "original": Pizza2,
                                "thumbnail": Pizza2
                        },
                        "img3": {
                                "original": Pizza3,
                                "thumbnail": Pizza3
                        },
                        "img4": {
                                "original": Pizza4,
                                "thumbnail": Pizza4
                        },
                        "img5": {
                                "original": Pizza5,
                                "thumbnail": Pizza5
                        },
                },
                "Name": "TypeScript Project | StarWars Fan Site",
                "Icon": <><SiMongodb /> <FaNodeJs /> <FaReact /></>,
                "Date": "02/2018 to 05/2018",
                "shortDescription": "Update de conteúdo para site institucional, de venda de cursos.Desenvolvimento de algumas páginas e rotas com o conteúdo atualizado.Sem a necessidade de deploy, apenas desenvolvimento.Entrega via BitBucket com código testado. Entregas  semanais a partir dos designs providos.",
                "Description": "Update de conteúdo para site institucional, de venda de cursos.Desenvolvimento de algumas páginas e rotas com o conteúdo atualizado.Sem a necessidade de deploy, apenas desenvolvimento.Entrega via BitBucket com código testado. Entregas  semanais a partir dos designs providos.",
                "projectTech": {
                        "tech1": "Design | Figma",
                        "tech2": "Database | Node.js - Express",
                        "tech3": "Scope | React.js - Frontend "
                },
                "projectTools": {
                        "tool1": " CSS - Styling",
                        "tool2": " React Hooks - UseState | UseEffect",
                        "tool3": " Redux - Storage",
                        "tool4": " Axios - API fetching",
                        "tool5": " Postman - Testing",
                        "tool6": " BitBucket - Versioning"
                },

                "projectLearn": "teste",
                "projectDayToDay": "teste",
                "projectMyRole": "teste MyRole",
                "Technologies": {},
        }
]

export default projects