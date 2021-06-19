import React from 'react';

const DealOfDay = () => {
    return (
        <div>
            <div className="section-inner ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-12 padding-right">
                            <div className="image">
                                <img src="https://via.placeholder.com/750x590" alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 padding-left">
                            <div className="content">
                                <div className="heading-block">
                                    <p className="small-title">Deal of day</p>
                                    <h3 className="title">Beatutyful dress for women</h3>
                                    <p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
                                    <h1 className="price">$1200 <s>$1890</s></h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealOfDay;