import React from "react"
import hmrcImg from "./../../assets/images/hmrc.png"
import revitalisedImg from "./../../assets/images/revitalised.svg"
import revitalisedBgImg from "./../../assets/images/rev.jpg"
import smithsImg from "./../../assets/images/smithsdetection.png"
import smithsBgImg from "./../../assets/images/smiths-bg.jpg"
import tunzieImg from "./../../assets/images/tunzie-logo.png"
import tunzieBgImg from "./../../assets/images/tunzie-background-image.png"
import sabaImg  from "./../../assets/images/saba.png"
import sabaBgImg  from "./../../assets/images/saba-project.png"
import BackgroundVideo from "../shared/BackgroundVideo"

const CaseStudiesSection = () => {
    
    const [activeStudy, setActiveStudy] = React.useState(null)
    const [showDetail, setShowDetail]  = React.useState(false)
    
    const studies =  [
        {
            title: "Smiths Detection - Reporting Engine",
            image: smithsImg,
            backgoundImage: smithsBgImg,
            description: "An internal production line reporting engine.",
            content: "<p>As a Senior Full Stack Developer at Smiths Detection, I took on the responsibility of updating their website, which managed the production life cycle of units as they moved through different workbenches until completion One of my key achievements was delivering a new and improved user interface that provided an overview of the entire production floor. This allo wed the team to easily track the progress of units at each stage. Additionally, I enhanced the functionality of the units and reporting pages by implementing pagination, filtering, and ordering capabilities. These improvements streamlined data analysis and improved user experience.Furthermore, I successfully implemented important features such as Yield, Waiver, and Failure Reports, complete with export functions. These reports provided valuable insights and allowed for efficient data export for further analysis. In this role, I played a crucial part in enhancing the website's functionality and user interface, ultimately improving productivity and streamlining the production life cycle at Smiths Detection.</p>",
            stack: [
                "React",
                "Python",
                "MongoDB",
                "AWS" 
            ]
        },
        {
            title: "HMRC - EU Status Monitring Application",
            image: hmrcImg,
            backgoundImage: undefined,
            description: "An internal auditing and monitoring system",
            content: "<p>As a Senior Lead Front End Developer at HMRC, I spearheaded a team of two developers and one end-to-end tester. Responsible for the front-end development, we utilized React to build a robust user interface. The back- end API, built with Java and Spring Boot, seamlessly supported the application's functionalities. The primary objective of the application was to automate auditing tasks between the UK and EU. Through the user interface, we implemented system checks and enabled real-time status updates. Data presentation was a key focus, as we developed interactive tables that offered filtering, pagination, and ordering capabilities. This enhanced user experience and facilitated efficient data analysis. My role involved leading the development team, ensuring high-quality code and successful project delivery. Collaborating closely with stakeholders, I contributed to the design, development, and implementation of this critical auditing application for HMRC.</p>",
            stack: [
                "React",
                "NodeJS",
                "Java",
                "Oracle",
                "Azure" 
            ]
        },
        {
            title: "Revitalised Well-being App",
            image: revitalisedImg,
            backgoundImage: revitalisedBgImg,
            description: "A multiplatform well-being application",
            content: "<p>As the senior developer on both the front end and supporting back end, I successfully built a comprehensive multi-tenant wellbeing application. This dynamic platform empowered users to complete online assessments, generating personalized wellbeing scores. Leveraging this data, the application intelligently provided relevant articles, tasks, challenges, and groups, enabling users to improve their overall wellbeing in a systematic, tracked, and analytical manner. The application provided consultations with medical professionals and integrated with wearables for automatic activity tracking. It was deployed across web, iOS, and Android platforms, utilizing Angular, React, and Symfony 4 technologies. This project involved working as a contractor for an agency that was contracted by a larger company to provide services for the end client. As the primary point person for both front-end and back-end development, I took on the responsibility of overseeing the project's successful execution.</p>",
            stack: [
                "React",
                "React Native",
                "Node",
                "PHP/ Symfony 3",
                "MySQL",
                "Google Cloud Platform" 
            ]
        },
        {
            title: "Tunzie - Social Music App",
            image: tunzieImg,
            backgoundImage: tunzieBgImg,
            description: "A social networking music app",
            content: "<p>A frontend built with angularjs, API built in codeigniter. Project involved working alongside the stakeholers and designers to make designs application compliant. As the sole developer on this project, I converted the designs into frontend templates, establised data entities and functional requirements. Worked with the client to refine and sign the seo seteup inside anagifore implementing and testing the project, the eb projectbudget ranout before I completetion, but was a great techinical learning exerpience with handling media on the web.</p>",
            stack: [
                "Angular",
                "PHP / Codeigniter",
                "MySQL" 
            ]
        },
        {
            title: "Saba/Apcoa - Permit Management Solution",
            image: sabaImg,
            backgoundImage: sabaBgImg,
            description: "Parking permit management system",
            content: "<p>As an instrumental contributor to a multi-tenant solution, I spearheaded the development of its front-end using Angular 7. Leveraging Drupal 8, I constructed a robust back-end API utilizing custom modules, each catering to distinct functionalities such as User Management, Permit Management, and Payment Management. This approach facilitated streamlined site configurations while seamlessly adapting to default settings where necessary. Within an agile CI/CD environment on GCP and Docker, I successfully orchestrated the setup of a unified system for the service provider MWP. My expertise in resolving support tickets and enhancing various Drupal 7 solutions provided invaluable insights into the workings of individual systems. Leveraging this experience, I played a pivotal role in defining requirements for the new system, conceptualizing the UI/Design, and executing the front-end implementation. Additionally, I collaborated closely with our in-house developer to ensure seamless back-end integrations, bolstering the overall functionality and performance of the solution</p>",
            stack: [
                "Angular / React",
                "PHP / Drupal 8 / Symfony",
                "MySQL",
                "Google Cloud Platform"
            ]   
        }
    ]
    
    const Study = ({study}) => {
        return (
            <div className="study">
                <h3>{study.title}</h3>
                <div 
                     onClick={() => setActiveStudy(study)} 
                    className="thumbnail"
                    style={{
                        background:`linear-gradient(0deg, darkblue, rgba(255, 0, 150, 0.3)), url(${study.backgoundImage})`,
                        backgroundSize:`cover`,
                        background: `0% 0% / cover rgba(255, 255, 255, 0.4)`
                    }}>
                    <img src={study.image} />
                    <span>Read more</span>
                </div>
                <p>{study.description}</p>
            </div>
        )
    }
    
    const DetailedStudy = ({study}) => {
        return (
            <div className="detailed-study">
                <a onClick={() => setShowDetail(false)}>X</a>
                <h3>{study.title}</h3>
                <div className='content' dangerouslySetInnerHTML={{__html: study.content}} />
                {study.backgoundImage && <img src={study.backgoundImage} />}
                <h3>Tech Stack</h3>
                <ul>
                    {study.stack && study.stack.map((tech, techIndex) => <li key={techIndex}><p>{tech}</p></li>)}
                </ul>
            </div>
        )
    }
    
    React.useEffect(() => {
        if(activeStudy) {
            setShowDetail(true)
        }
    }, [activeStudy])
    
    React.useEffect(() => {
        document.body.style.overflow = showDetail ? "hidden" : "unset"
    }, [showDetail])
    
    return (
        <section id="case-studies">
            <BackgroundVideo />
            <h2>Case Studies</h2>
            <div className="studies">
                {studies.map((study, studyIndex) => {
                    return <Study key={studyIndex} study={study} />
                })}
            </div>
            {showDetail && <DetailedStudy study={activeStudy} />}
        </section>
    )
}

export default CaseStudiesSection