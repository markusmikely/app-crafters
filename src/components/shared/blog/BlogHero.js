import BackgroundVideo from "../BackgroundVideo"
import EmailSignUpForm from "../form/EmailSignUpForm"

const BlogHero = () => {
    return <div className="blog-hero">
        <BackgroundVideo />
        <h1><span>We Are</span> App Crafters</h1>
        <p className="large">Share our stories, journey and growth.</p>
        <EmailSignUpForm />
    </div>
}
export default BlogHero