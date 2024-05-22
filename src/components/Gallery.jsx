import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactPlayer from 'react-player';
const Gallery = ({image,video}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };
  const handleCloseClick = () => {
    setSelectedImage(null);
  };
  const handleDLClick = () => {
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = 'image.jpg'; // Replace 'image.jpg' with the desired filename
    link.click();
  };
    return ( 
        <Container>
            <Row className="justify-content-center">
            {image.map((imgSrc, index) => (
          <Col key={index} xs={6} md={4} className='align-items-md-center'>
            <div className="image-wrapper">
            <Image src={imgSrc} rounded className={'img-fluid ${selectedImage===image.src ? "spin" : ""}'} onClick={() => handleImageClick(imgSrc)}/>
            </div>
          </Col>
        ))}
            </Row>
            {selectedImage && (
              <>
              <div className='blur-background'></div>
        <div
          className="fullscreen-image"
        >
          <img
            src={selectedImage}
            alt="Selected Image"
            className='spin'
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
              objectFit: 'contain',
            }}
          />
          <button
  className='btn-danger-outline'
  style={{
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: 'red',
  }} onClick={handleCloseClick}
>
<span className="bi bi-x-circle" role="img" aria-label="Close"></span>
</button>
 <div
    style={{
      position: "absolute",
      bottom: "0.5rem",
      right: "1rem",
    }}
  >
    <button
      className="btn-primary"
      style={{
        background: "none",
        border: "none",
        fontSize: "1.5rem",
        color: "blue",
      }}
      onClick={handleDLClick}
    >
      <span className="bi bi-download" role="img" aria-label="Download"></span>
    </button>
    </div>
        </div>
        </>
      )}
      <Row>
      {video.map((videoSrc, index) => (
        <div  key={index} className='cdiv'>
    <ReactPlayer url={videoSrc} controls={true} className='video' />
    </div>
))}
</Row>
        </Container>
    );
}
export default Gallery;