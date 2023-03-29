import React from 'react'

const Carousel = () => {
  return (
    <div className="container-fluid myslider">
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active slider">
                  <img src="images/sliderorcard3.jpeg" className="d-block w-100" alt="infinity pool house"/>
              </div>
            </div>
          </div>
    </div>
</div>

  );
}

export default Carousel