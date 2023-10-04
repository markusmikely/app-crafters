import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import ArticleContent from "./../shared/article/ArticleContent";
import ArticleHero from "./../shared/article/ArticleHero";
import NextPrevArticles from "./../shared/article/NextPrevArticles";
import RelatedArticles from "./../shared/article/RelatedArticles";

const ArticlePage = () => {
    const params = useParams()
    const [id, setId] = useState(params.id)
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                "Authorization": "bearer 6e1631959de01d3cd1daf64fbd1083c32fc0dd4c137eba123eaf568253733e22c933772edda8ba66f6ecbee5d2082752928f009b962f1cec62f7dd614f4805a65c12adf430dce6e307e7c1171ef0e5eba34ba4484850619567dd07cba7adc53d7ba2f088b373229f07d8856a3273425200ea78a0b1a34b4cbb0a69a71640e34c"
            }
        }
        setLoading(false)
        fetch("http://localhost:1337/api/articles?populate=*&filters[slug][$eq]="+id, options)
        .then(data => data.json())
        .then(response => 
            {
                const data = response.data[0]
                const newArticle = {
                    id: data.id,
                    ...data.attributes,
                    author: {
                        ...data.attributes.author.data
                    }
                }
                setArticle(newArticle)
                console.log(newArticle)
            })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])
    
    useEffect(() => {
        console.log(article)
    }, [article])
    
    return <>
    {loading ? <p>Loading</p> : 
    <div className="article">
    <ArticleHero {...article} />
    <ArticleContent {...article} />
    <NextPrevArticles {...article} />
    <RelatedArticles {...article} />
    </div>
    }
    </>;
}
export default ArticlePage;