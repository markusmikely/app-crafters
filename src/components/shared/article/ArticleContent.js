import ReactMarkdown from 'https://esm.sh/react-markdown@7'

const ArticleContent = ({content}) => { 
    return (
    <div className="article-content">
        <div className="container">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    </div>
    )
}
export default ArticleContent