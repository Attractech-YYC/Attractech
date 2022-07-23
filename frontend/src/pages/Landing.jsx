import Navigation from '../components/Navigation'
import skyline from "../assets/images/skyline.png"
import { Link } from "react-router-dom"

export const Landing = () => {

    return (
        <div className="bg-landing">
            <Navigation />


            <div className="container py-4">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="fw-bold fs-1">Explore Calgary like never before</h2>
                            <p className="fs-6 me-5">Calgary's downtown is burgeoning with possibilities. Are you hungry? Do you want to experience art or history? Maybe socialize and dance? You can find the classics and discover hidden gems, right here, right now.</p>
                            <Link to="/app"><button className="mt-5 btn btn-landing btn-lg btn-danger" type="button">Let's Start</button></Link>
                        </div>
                        <div className="col-md-5">
                            <img src={skyline} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container py-4">
                    <div className="mx-auto row container">
                        <div className="col-md-6 p-5 mb-5 bg-light rounded-3">
                            <h3 className="fw-bold">Attractech YYC</h3>
                            <p className="fs-6">YYC has an exciting new story that talks about local businesses in a way that is different from anywhere else. Our mission is to be the first app tourists open when they arrive in YYC. The place they go to find resilient local business.</p>
                        </div>
                        <div className="ms-auto col-md-5 p-5 mb-5 bg-light rounded-3">
                            <h3 className="fw-bold">YYC Hacks 2022</h3>
                            <p className="fs-6">Attractech is a project from YYC Hacks 2022, Calgary's biggest hackathon.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}