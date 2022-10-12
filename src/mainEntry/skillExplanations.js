
import { SiJavascript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiWebpack } from "react-icons/si";
import { SiW3C } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTerminalBoxFill } from "react-icons/ri";
import { SiSass } from "react-icons/si";

const skillExplanations = [
        
    { id: 1, 
        title: 'Html', 
        icon: <ImHtmlFive className="skill-icon" /> },
    { id: 2, 
        title: 'CSS',
        icon: <SiCsswizardry className="skill-icon" />,},
    { id: 3, 
        title: 'Javascript', 
        icon: <SiJavascript className="skill-icon" />,},
    { id: 4, 
        title: 'Web Accessibility', 
        icon: <SiW3C className="skill-icon" />,},
    { id: 5, 
        title: 'React', 
        icon: <GrReactjs className="skill-icon" />,},
    { id: 6, 
        title: 'React Redux', 
        icon: <SiRedux className="skill-icon" />,},
    { id: 7, 
        title: 'React Router', 
        icon: <SiReactrouter className="skill-icon" />,},
    { id: 8, 
        title: 'WebPack',
        icon: <SiWebpack className="skill-icon" />,},
    { id: 9, 
        title: 'Node', 
        icon: <DiNodejs className="skill-icon node" />,},
    { id: 10, 
        title: 'Git',
        icon: <FaGitAlt className="skill-icon" />,},
    { id: 11, 
        title: 'Terminal',
        icon: <RiTerminalBoxFill className="skill-icon" />,},
    { id: 12, 
        title: 'Sass',
        icon: <SiSass className="skill-icon" />, },
]

export default skillExplanations;