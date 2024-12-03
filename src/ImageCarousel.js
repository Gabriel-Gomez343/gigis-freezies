import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageCarousel.css';
import { click } from "@testing-library/user-event/dist/click";

function ImageCarousel({images}) {
    return (
        <div className="carousel-container">
            <Carousel
                autoPlay
                interval={4000}
                infiniteLoop
                showIndicators
                showThumbs={false}
                showStatus={false}
                transitionTime={700}
                renderIndicator={(clickHandler, isSelected, index) => {
                    return (
                        <li
                            onClick={clickHandler}
                            className={`ind ${isSelected ? "active" : ""}`}
                            key={index}
                            role="button"
                        />
                    );
                }}
                useKeyboardArrows={true}>
                {images.map((URL, index) => (
                    <div className="slide">
                        <img alt="Candy" src={URL} key={index} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}



export default ImageCarousel;
