import AboutImage from "./../../assets/images/weareappcrafters.png"

const AboutSection = () => {
    return (
        <section id="about-us"  className="centered">
            <h2>We are <span>App Crafters</span></h2>
            <p className="large">Your premier destination for cutting-edge app development solutions. With over a decade of experience, we have established ourselves as a powerhouse in crafting exceptional iOS, Android, and web applications. Our passion for innovation, combined with our deep technical expertise, sets us apart as your ideal partner to bring your app ideas to life.</p>
            <img src={AboutImage} />        
        </section>
    )
}

export default AboutSection