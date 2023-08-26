import React from 'react'

import Header from '../../Components/Header'

const ContactUsScreen = (props) => {
    return (
        <div className="Screen">
            <Header title="Contact Us" />

            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 Block">
                    <h5 className="text-center">
                        Reach out to us here
                    </h5>
                    <hr />
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-6">Ravi Kumar</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-8">raravikumar432<br></br>@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-6">Delicious_Dairy, Jay Hind Complex</strong><br />
                                <label className="fs-7">GokhaleNagar</label><br />
                                <label className="fs-6">Shivaji nagar - 411005</label><br />
                                <label className="fs-6">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-6"> 7607890632 </label><br />

                            </div>
                        </div>
                        <hr />
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Shamim Ahmed</strong><br />
                                <label className="fs-6">Store Manager</label><br />
                                <label className="fs-6">shamim@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-6">Delicious_Dairy, Gandharva Plaza</strong><br />
                                <label className="fs-6">Chintamani nagar</label><br />
                                <label className="fs-7">Amravati - 416416</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 1234567898 </label><br />

                            </div>
                        </div>
                        <hr />
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Rushikesh Pachore</strong><br />
                                <label className="fs-6">Store Manager</label><br />
                                <label className="fs-6">ruship.1998@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-6">Delicious_Dairy, Gandharva Plaza</strong><br />
                                <label className="fs-6">warje</label><br />
                                <label className="fs-7">karvenagar - 416416</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 1234567898 </label><br />

                            </div>
                        </div>
                        <hr />
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Shubham mahajan</strong><br />
                                <label className="fs-6">Store Manager</label><br />
                                <label className="fs-6">shubh@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-6">Delicious_Dairy, Gandharva Plaza</strong><br />
                                <label className="fs-6">Chintamani nagar</label><br />
                                <label className="fs-7">arandol - 416416</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 1234567898 </label><br />

                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-center">
                        Let us get back to you
                    </h5>
                    <hr />
                    <div>
                        <br /><br />
                        <div className="mb-3" Style="padding:5px">
                            <h6>Name</h6>
                            <input className="form-control" type="text" placeholder="Your name" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Email</h6>
                            <input className="form-control" type="email" placeholder="you@gmail.com" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Contact</h6>
                            <input className="form-control" type="number" placeholder="Your mobile" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>What would you like to know?</h6>
                            <textarea rows="3" className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" className="btn btn-outline-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUsScreen
