import React from 'react';

const BannerCarousel = ({banner}) => {
    const {image,id,next,prev} = banner
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full gradiant rounded-lg">
        <div>
        <img alt="" src={image} className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
          <a href={`#slide${prev}`} className="btn btn-circle mr-3">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-1/4 z-10 text-white">
          <h1 className="text-5xl font-bold">
            WelCome to Our Motor <br />
            Servecing Center
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-64 z-10 text-white">
          <p>
            Keep your pationate And our loving activities are great to achieve
            happiness
          </p>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-80 z-10">
          <button className="btn btn-outline btn-success mr-4">Discover More</button>
          <button className="btn btn-outline btn-warning">Latest Project</button>
        </div>
      </div>
    );
};

export default BannerCarousel;