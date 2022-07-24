import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"
import { useState } from "react";
import axios from 'axios'
import './../css/create.css'
import skyline from "../assets/images/skyline.png";


export const Create = ({movePage}) => {
    const [corporation, setCorporation] = useState('');
    const [name, setName] = useState('');
    // const [type, setType] = useState('');
    const [cost, setCost] = useState('');
    const [timeCommitment, setTimeCommitment] = useState('');
    const [classify, setClassify] = useState('');

    const handleSubmit = async () => {
        const res = await axios.post('http://3.96.135.171:8088/api/activity', {
            corporation_name: corporation,
            name: name,
            type: "permanent",
            classify: classify,
            costs: cost,
            time_commitment: timeCommitment,
        })
        
        const res2 = await axios.get('http://3.96.135.171:8088/api/corporation/'+corporation+'/activity')
        console.log(res2)
        
      
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
                                    <input type='text' value={corporation} onChange={(e) => setCorporation(e.target.value)} />
                                    <label className="fw-bold fs-3">Name of the Event</label>
                                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                    {/* <label className="fw-bold fs-3">Type</label>
                                    <input type='text' /> */}
                                    <label className="fw-bold fs-3">Classify</label>
                                    <select class="form-select" id="dropdown-basic-button" value={classify} onChange={(e) => {setClassify(e.target.value); }} >
                                        <option value="action">Action1</option>
                                        <option value="action2">Action2</option>
                                        <option value="action3">Action</option>
                                    </select>   
                                    <label className="fw-bold fs-3">Cost</label>
                                    <input type='text' value={cost} onChange={(e) => setCost(e.target.value)} />
                                    <label className="fw-bold fs-3">Time Commitment</label>
                                    <input type='text' value={timeCommitment} onChange={(e) => setTimeCommitment(e.target.value)} />
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
