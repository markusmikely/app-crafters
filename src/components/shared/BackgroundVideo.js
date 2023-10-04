import Video from './../../assets/video/1057300891-preview.mp4'

const BackgroundVideo = () => {
    
    return (
        <div className="background-video">
          <video autoPlay loop muted width="100%" height="auto">
              <source src={Video} type="video/mp4"></source>
          </video>
          <div className="overlay" />
        </div> 
    )
}

export default BackgroundVideo
