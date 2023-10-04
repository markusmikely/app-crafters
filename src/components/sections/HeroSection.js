import Image from "./../../assets/images/iphone.png"; 
import BackgroundVideo from "./../shared/BackgroundVideo"; 

const HeroSection = () => {
    return (
        <section id="hero" className="centered">
            <BackgroundVideo />
            <h2>Build Apps <span>Build the future</span></h2>
            <img style={{
                height: "400px",
                marginTop: "-50px"
            }} src={Image} />
            <div className="dots">
                {[1,2,3].map((a,i) => <span key={i}></span>)}
            </div>
            <div className="shape">
                {[1,2].map((a,i) => <span key={i}></span>)}
            </div>
        </section>
    )
}

export default HeroSection