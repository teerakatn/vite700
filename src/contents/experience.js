import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp from '../assets/ex1.png'
import picExp2 from '../assets/ex2.png'
import picExp3 from '../assets/ex3.jpg'

export const data = [
    {
        date: "2020-2021",
        title: "Fullstackkk · Sport Analysis System",
        link: "https://github.com/teerakatn",
        materials: [
            { type: faGithub, link: "https://github.com/teerakatn" },
            { type: faYoutube, link: "https://www.youtube.com/" },
            { type: faMedium, link: "https://www.google.com/webhp?hl=th&sa=X&ved=0ahUKEwjbk56wg-uLAxVQSGcHHTk3BvYQPAgJ" },
        ],
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
            "Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.",
        ],
        skills: [
            ["React", "Redus", "MUI"],
            ["NginX", "NodeJS", "Express", "MongoDB"],
        ],
        picture: picExp,
    },
    {
        date: "2022-2023",
        title: "Fullstack · Sport Analysis System",
        link: "https://github.com/teerakatn/",
        materials: [
            { type: faGithub, link: "https://github.com/teerakatn" },
        ],
        descriptions: [
            "Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7.",
        ],
        skills: [
            ["React", "Redus", "MUI"],
        ],
        picture: picExp2
    },
    {
        date: "2022-2023",
        title: "Fullstack · Sport Analysis System",
        link: "https://github.com/teerakatn",
        materials: [
            { type: faYoutube, link: "https://www.youtube.com/@moomeowwoof" },
            { type: faYoutube, link: "https://www.youtube.com/@Bewzbewz/" },
            { type: faYoutube, link: "https://www.youtube.com/@shipdont" },

        ],
        descriptions: [
            "ROMC",
        ],
        skills: [
            ["MOOMEOW", "BEWZBEWZ", "SHIPDONTH"],
        ],
        picture: picExp3
    },
]