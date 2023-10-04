import { Link } from "react-router-dom"

const ArticleLink = ({title, subtitle, image, slug, direction}) => {
    return (
     <div className={"next-prev-articles "+direction}>
         <Link to={"/blog/"+slug}><img src={image} /></Link>
         <div className="link-article">
             <span>{subtitle}</span>
             <Link to={"/blog/"+slug}><h4>{title}</h4></Link>
             
         </div>
     </div>
     )
}
const NextPrevArticles = ({next, prev}) => { 
    return (
        <div className="next-prev-articles">
            <ArticleLink {...prev} />
            <ArticleLink {...next} />
        </div>
    )
}
export default NextPrevArticles