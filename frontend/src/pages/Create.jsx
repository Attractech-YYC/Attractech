import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"
import { useState } from "react";
import axios from 'axios'
import './../css/create.css'
import skyline from "../assets/images/skyline.png";
import { BasicButtonExample as DropdownCreate } from "../components/BasicButtonExample"
import { Dropdown } from "react-bootstrap";


export const Create = ({movePage}) => {
    const [corporation, setCorporation] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [classify, setClassify] = useState('');

    const handleSubmit = async () => {
        const res = await axios.post('http://3.96.135.171:8088/api/activity', {
            corporation: corporation,
            name: name,
            type: "permanent",
            classify: classify,
            costs: costs,
            timeCommitment: timeCommitment,
        })
        console.log(res)
    }

    return (
        <div class="bg-landing">
            <Navigation movePage={movePage}/>
            <div className="create">
                <div className="container py-4">
                    <div className="p-5 bg-light rounded-3 footer-space">
                        <div className="row">
                            <div className="col-md-7">
                                <form className="create-form" onSubmit={handleSubmit}>
                                    <label className="fw-bold fs-3">Corporation Name</label>
                                    <input type='text' value={corporation} onChange={(e) => setTitle(e.target.value)} />
                                    <label className="fw-bold fs-3">Name of the Event</label>
                                    <input type='text' value={name} onChange={(e) => setTitle(e.target.value)} />
                                    <label className="fw-bold fs-3">Type</label>{/*dropdown*/}
                                    <input type='text' value={type} onChange={(e) => setTitle(e.target.value)} />
                                    <label className="fw-bold fs-3">Classify</label>
                                    <DropdownCreate />
                                    <label className="fw-bold fs-3">Cost</label>{/*dropdown*/}
                                    <input type='text' value={type} onChange={(e) => setTitle(e.target.value)} />
                                    <label className="fw-bold fs-3">Time Commitment</label>{/*dropdown*/}
                                    <input type='text' value={type} onChange={(e) => setTitle(e.target.value)} />

                                </form>
                                <button className="mt-5 btn btn-primary btn-lg" onClick={() => { handleSubmit() }}>Submit</button>
                            </div>
                            <div className="col-md-5">
                                <img src={skyline} className="img-fluid img-circle" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>)
}
