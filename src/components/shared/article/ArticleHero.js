import ArticleAuthor from "./ArticleAuthor"

const ArticleHero = ({title, subtitle, thumbnail, author, categories, createdAt}) => { 
    console.log(thumbnail, 'thumbnail')
    return (
        <div className="article-hero">
            <div className="aritcle-hero-left">
                {/* {categories && <ul className="categories">
                    {categories.map((category, categoryIndex) => <li key={categoryIndex}>{category}</li>)}
                </ul>} */}
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <ArticleAuthor author={author} created={createdAt} />
            </div>
            <div className="aritcle-hero-right">
                <img src={`http://localhost:1337${thumbnail?.data.attributes.url }`} />
            </div>
        </div>
    )
}
export default ArticleHero