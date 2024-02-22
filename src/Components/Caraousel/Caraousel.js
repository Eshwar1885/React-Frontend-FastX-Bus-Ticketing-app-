import React, { useEffect } from 'react';

// Define the Carousel component
function Carousel() {
  useEffect(() => {
    // Initialize the Bootstrap carousel
    const carousel = document.querySelector('.carousel');
    const carouselInstance = new window.bootstrap.Carousel(carousel, {
      interval: 2000 // Set the interval for image transition
    });

    // Destroy carousel instance when component unmounts
    return () => {
      carouselInstance.dispose();
    };
  }, []);

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg7.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg4.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Carousel;