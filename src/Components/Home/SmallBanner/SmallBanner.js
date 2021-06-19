import React from 'react';

const SmallBanner = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-banner">
                        <img src="https://via.placeholder.com/600x370" alt="#" />
                        <div className="content">
                            <p>Man's Collectons</p>
                            <h3>Summer travel <br /> collection</h3>
                            <a href="#">Discover Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-banner">
                        <img src="https://via.placeholder.com/600x370" alt="#" />
                        <div className="content">
                            <p>Bag Collectons</p>
                            <h3>Awesome Bag <br /> 2020</h3>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-12">
                    <div className="single-banner tab-height">
                        <img src="https://via.placeholder.com/600x370" alt="#" />
                        <div className="content">
                            <p>Flash Sale</p>
                            <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                            <a href="#">Discover Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmallBanner;