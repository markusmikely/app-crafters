import React from "react";
import BlogHero from "../shared/blog/BlogHero"
import BlogList from "../shared/blog/BlogList";
import BlogFooter from "../shared/blog/BlogFooter";

const BlogPage = () => {
    const [articles, setArticles] = React.useState([])
    // consat []
    const getArticles = async () => {
        const urls = [
            "http://localhost:1337/api/articles?populate=*&[sort]=createdAt&pagination[page]=1&pagination[pageSize]=4",
            "http://localhost:1337/api/articles?populate=*&filters[recommended][$eq]=true&pagination[page]=1&pagination[pageSize]=4",
            "http://localhost:1337/api/articles?populate=*&filters[featured][$eq]=true&pagination[page]=1&pagination[pageSize]=4",
            "http://localhost:1337/api/categories?populate=*&pagination[page]=1&pagination[pageSize]=4"
        ]
        const titles = [
            'Check out our best stories',
            'See our latest articles',
            'Recommended Articles',
            'Top Categories'
        ]
        const options = {
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                "Authorization": "bearer 6e1631959de01d3cd1daf64fbd1083c32fc0dd4c137eba123eaf568253733e22c933772edda8ba66f6ecbee5d2082752928f009b962f1cec62f7dd614f4805a65c12adf430dce6e307e7c1171ef0e5eba34ba4484850619567dd07cba7adc53d7ba2f088b373229f07d8856a3273425200ea78a0b1a34b4cbb0a69a71640e34c"
            }
        }
        try {
            const results = []
            const responses = await Promise.all(
                urls.map(url => fetch(url, options).then(data => data.json()))
            );
            responses.forEach((response, index) => {
                results.push({
                    title: titles[index],
                    articles: response.data.map(d => {
                        return {
                            ...d.attributes,
                            id: d.id
                        }
                    })
                })
            });
            setArticles(results)
        } catch (error) {
            console.log(error)
        }
    }
    
    React.useEffect(() => {
        getArticles()
    }, [])
    React.useEffect(() => {
        console.log(articles)
    }, [articles])
    
    return <>
        <BlogHero />
        <section id="blog-home">
            {articles ?
            <>{articles.map((blogList, blogListIndex) => {
                return <BlogList key={blogListIndex} {...blogList } />
            })}
            </>
            :
            <p>Something went wrong</p>
            }
            
            <BlogFooter />
        </section>
    </>;
}
export default BlogPage;