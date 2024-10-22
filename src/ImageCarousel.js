import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageCarousel.css';
import { click } from "@testing-library/user-event/dist/click";

const images = [
    '/imgs/fwdfwphotos/20230928_113429.jpg',
    '/imgs/fwdfwphotos/20230928_113634.jpg',
    '/imgs/fwdfwphotos/20230929_153039.jpg',
    '/imgs/fwdfwphotos/20230928_113301.jpg',
    '/imgs/fwdfwphotos/1000005344.jpg',
    '/imgs/fwdfwphotos/20230928_113206.jpg'
];

function ImageCarousel() {
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
