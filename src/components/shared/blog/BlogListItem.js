import { Link } from "react-router-dom"
import CategoriesList from "../categories/CategoriesList"

const BlogListItem = ({id, slug, title, Name, thumbnail, categories, content, ShortDescription}) => {
    return <div className="blog-list-item">
        <Link to={"/blog/" + slug}>
            {thumbnail && thumbnail.data && <img src={`http://localhost:1337${thumbnail.data.attributes.url}`} /> }
        </Link>
        <CategoriesList categories={categories.data} />
        <Link to={"/blog" + id}><h4>{title ? title : Name}</h4></Link>
        {content &&<p>{content.substring(0, 200)}...</p>}
        {ShortDescription && <p>{ShortDescription.substring(0, 200)}...</p> }
    </div>;
}
export default BlogListItem;