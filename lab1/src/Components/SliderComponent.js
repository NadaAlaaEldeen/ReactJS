import { Component } from "react";
import './SliderComponent.css'

class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isPlaying: false,
      images: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
      ],
    };
  }

  componentDidMount() {
    this.startSlideshow();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    this.setState({ isPlaying: true });
    this.intervalId = setInterval(this.showNextSlide, 2000);
  };

  stopSlideshow = () => {
    this.setState({ isPlaying: false });
    clearInterval(this.intervalId);
  };

  showNextSlide = () => {
    const { currentIndex, images } = this.state;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    this.setState({ currentIndex: nextIndex });
  };

  showPreviousSlide = () => {
    const { currentIndex, images } = this.state;
    const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    this.setState({ currentIndex: previousIndex });
  };

  render() {
    const { currentIndex, isPlaying, images } = this.state;
    return (
      <div className="Container">
        <h1>Slide Show</h1>
        <div id="Slider">
          <img src={`./Images/${images[currentIndex]}`} alt={`Image${currentIndex}`} />
        </div>
        <br />
        <button onClick={this.showPreviousSlide}>previous</button>
        <button onClick={this.showNextSlide}>next</button>
        <button onClick={this.startSlideshow} disabled={isPlaying}>
          start
        </button>
        <button onClick={this.stopSlideshow} disabled={!isPlaying}>
          stop
        </button>
      </div>
    );
  }
}

export default SliderComponent;