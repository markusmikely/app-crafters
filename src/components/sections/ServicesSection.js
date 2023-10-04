import ServicesImg from "./../../assets/images/services.png";

const ServicesSection = () => {
    return (
        <section id="services" className="centered">
            <div />
            <h2>What we do</h2>
            <p className="large">At <span>AppCrafters</span>, we specialize in turning ideas into realities. Whether you have a groundbreaking concept or need to modernize an existing application, our skilled team of developers, designers, and strategists are dedicated to making your vision a tangible success. We excel in iOS, Android, and web app development, ensuring that your product is accessible across various platforms, engaging a wider audience.</p>
            <img src={ServicesImg}   />     
        </section>
    )
}

export default ServicesSection