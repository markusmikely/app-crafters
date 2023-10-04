import BlogListItem from "../blog/BlogListItem"

const RelatedArticles = ({articles}) => { 
    return <div className="related-articles">
        {articles && articles.map((article, articleIndex) => <BlogListItem key={articleIndex } {...article} /> )}
    </div>
}
export default RelatedArticles