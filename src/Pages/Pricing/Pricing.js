import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="section-heading">
                        <h2>Pricing</h2>
                    </div>
                    
                    <div className="card-align row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-6 mt-4">
                        <div className='col'>
                            <div className="card card-common w-72 bg-gray-500">
                                <div className="card-body">
                                    {/* <h3 class="card-hot fw-bold">Hot</h3> */}
                                    <h2 class="card-title price ct-color">$300</h2>
                                    <h3 class="card-title title ct-color">Easy Plan</h3>
                                    <i className="p-2"></i>One Page Website
                                    <br />
                                    <i className="p-2"></i>1-3 Day(s)
                                    <br />
                                    <i className="p-2"></i>Responsive
                                    <br />
                                    <i className="p-2"></i>Per Day Bill
                                </div>
                            </div>
                            <div className="footer">
                                <a className="card-btn card-btn-hot" href="https://en.wikipedia.org/wiki/Convention_center" target="_blank" rel="noreferrer">Choose Plan</a>
                            </div>
                        </div>
                        <div className='col'>
                            {/* <div className="card card-common" style="width: 18rem;"> */}
                            <div className="card card-hot-plus w-72">
                                {/* <div className="card-body ptext"> */}
                                <div className="card-body">
                                    <h3 class="card-hot fw-bold">Hot</h3>
                                    <h2 class="card-title price ct-color">$500</h2>
                                    <h3 class="card-title title ct-color">Medium Plan</h3>
                                    <i className="p-2"></i>3-7 Pages Website
                                    <br />
                                    <i className="p-2"></i>5-8 Days
                                    <br />
                                    <i className="p-2"></i>Responsive
                                    <br />
                                    <i className="p-2"></i>Per Day Bill
                                </div>
                            </div>
                            <div className="footer">
                                <a className="card-btn card-btn-hot" href="https://en.wikipedia.org/wiki/Convention_center" target="_blank" rel="noreferrer">Choose Plan</a>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card card-common w-72">
                                <div className="card-body">
                                    <h2 class="card-title price ct-color">$800</h2>
                                    <h3 class="card-title title ct-color">Business Plan</h3>
                                    <i className="p-2"></i>5-10 Pages Website
                                    <br />
                                    <i className="p-2"></i>8-10 Day(s)
                                    <br />
                                    <i className="p-2"></i>Responsive
                                    <br />
                                    <i className="p-2"></i>Per Day Bill
                                </div>
                            </div>
                            <div className="footer">
                                <a className="card-btn card-btn-hot" href="https://en.wikipedia.org/wiki/Convention_center" target="_blank" rel="noreferrer">Choose Plan</a>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="card card-common w-72">
                                <div className="card-body">
                                    <h2 class="card-title price ct-color">$1200</h2>
                                    <h3 class="card-title title ct-color">Business Plan</h3>
                                    <i className="p-2"></i>10-15 Pages Website
                                    <br />
                                    <i className="p-2"></i>12-15 Day(s)
                                    <br />
                                    <i className="p-2"></i>Responsive
                                    <br />
                                    <i className="p-2"></i>Per Day Bill
                                </div>
                            </div>
                            <div className="footer">
                                <a className="card-btn card-btn-hot" href="https://en.wikipedia.org/wiki/Convention_center" target="_blank" rel="noreferrer">Choose Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;