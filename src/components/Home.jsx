import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const Home = ({Image}) => {
            const [currentImage, setCurrentImage] = useState(0);
        useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % Image.length);
          }, 5000); // Change interval to 10000 milliseconds (10 seconds)
        return () => clearInterval(intervalId);
        }, [Image]); // Update effect when images prop changes
    return ( 
        <div className="container-fluid">
            <Card>
                <Card.Header as="h5" className="bg-primary">Welcome</Card.Header>
                <Card.Img variant='top' src={Image[currentImage]} className="img-thumbnail"/>
                <Card.Body className="bg-info">
                    <Card.Text>
                        Welcome to this page! This page is only dedicated for fun and personal purposes only!
                        I hope you enjoy the short animations of this page.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Header as="h5" className="bg-primary">qoutes</Card.Header>
            <Card.Body className="card-2">
            <Card.Title className="text-center">The Road Less Travelled</Card.Title>
                <blockquote className="blockquote mb-0 text-center">
                    <p>
Two roads diverged in a yellow wood,
<br />
And sorry I could not travel both
<br />
And be one traveler, long I stood
<br />
And looked down one as far as I could
<br />
To where it bent in the undergrowth;
<br />
<br />
Then took the other, as just as fair,
<br />
And having perhaps the better claim
<br />
Because it was grassy and wanted wear,
<br />
Though as for that the passing there
<br />
Had worn them really about the same,
<br />
<br />
And both that morning equally lay
<br />
In leaves no step had trodden black.
<br />
Oh, I kept the first for another day!
<br />
Yet knowing how way leads on to way
<br />
I doubted if I should ever come back.
<br />
<br />
I shall be telling this with a sigh
<br />
Somewhere ages and ages hence:
<br />
Two roads diverged in a wood, and I
<br />,
I took the one less traveled by,
<br />
And that has made all the difference.
</p>
<footer className="blockquote-footer">
            Written by: <cite title=" The_Road_Less_Taken">Robert Frost</cite>
</footer>
                </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Home;