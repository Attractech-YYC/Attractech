import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"
import { useState } from "react";

import './../css/create.css'
import skyline from "../assets/images/skyline.png";


export const Create = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div>
            <Navigation />
            <div className="create">

                <div className="container py-4">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="row">
                            <div className="col-md-7">
                                <form className="create-form">
                                    <label className="fw-bold fs-2">Blog Title</label>
                                    <break />
                                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <break />
                                    <label className="fw-bold fs-3">Blog Body</label>

                                    <break />


                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="fs-6 me-5" required></textarea>
                                </form>
                                <button className="mt-5 btn btn-primary btn-lg" type="submit">Submit</button>
                            </div>
                            <div className="col-md-5">
                                <img src={skyline} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>)
}
