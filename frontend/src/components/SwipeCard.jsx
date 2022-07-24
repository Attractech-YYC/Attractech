import thumbUp from "../assets/images/thumbup.svg";
import thumbDown from "../assets/images/thumbdown.svg";
import { useState } from "react";

export const SwipeCard = (props) => {

    const [cardClicked, setCardClicked] = useState("block");

    function removeCard() {
        setCardClicked("none");
    }

    function keepCard() {
        setCardClicked("none");
        props.setPref({name:props.name, desc:props.desc, cost:props.cost, time:props.time});
    }
    
    return (
        <div className="container mx-auto swipe-card" style={{ zIndex: props.index, display: cardClicked }}>
            <div className="card col-6 text-center w-100 swipe-card-inner">
                {/* <img src={props.imgSrc} className="card-img-top" alt="attraction image" /> */}
                <div className="card-body">
                    <h2 className="fw-bold fs-3 card-title">{props.name}</h2>
                    <p className="fs-6 card-text">{props.desc}</p>
                    <p className="fs-6 card-text">{props.cost}</p>
                    <p className="fs-6 card-text">{props.time}</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <button onClick={() => removeCard()} className="btn-circle btn btn-danger"><img src={thumbDown} /></button>
                        </div>
                        <div className="col-6">
                            <button onClick={() => keepCard()} className="btn-circle btn btn-primary"><img src={thumbUp} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}