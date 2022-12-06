import React from 'react';

const Contact = () => {
    return (
        <section
            className='flex justify-center items-center text-center'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h4 className='text-4xl text-primary font-bold'>Contact Me</h4>
                        <p className="py-1">Please contact with me if you have any query.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;