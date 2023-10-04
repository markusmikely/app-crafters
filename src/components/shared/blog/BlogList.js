import BlogListItem from "./BlogListItem"

const BlogList = ({title, articles}) => {

    return <div className="blog-list">
        <h3>{title}</h3>
        {articles.map((article, articleIndex) => {
            return <BlogListItem key={articleIndex} {...article} />
        })}
    </div>
}
export default BlogList