import { SwipeCard } from "../components/SwipeCard"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Navigation from "../components/Navigation";
import { Footer } from "../components/Footer";

export const Tinder = ({ activity, filterData, movePage }) => {

    const url = "http://3.96.135.171:8088"

    useEffect(() => {
        const getData = async () => {
            let res = await axios.get(url + "/api/activities")
            //TODO: Pass the activity and filterData to the API and filter the results
            console.log(res.data)
        }
        getData()
        console.log(array)
    })

    //Objects - Replace with API data
    const array = undefined;

    //Contains the objects the user likes
    const [prefList, setPrefList] = useState([]);


    function setPref(image, name, desc) {
        let array2 = prefList;
        array2.push({ "imgSrc": image, "name": name, "description": desc })
        setPrefList(array2);
        console.log(prefList);
    };

    return (
        <div className="bg-landing">
            <Navigation />
            <div className="row justify-content-center text-center vh-100">
                <div className="col-8">
                    {
                        array == undefined && <div className="p-5 bg-light rounded-3"><h1 className="fw-bold fs-1">Loading...</h1></div>
                    }
                    {
                        array != undefined &&
                        <div className="container py-4">
                            {array.map((element, index) => {
                                return <SwipeCard
                                    key={index}
                                    setPref={setPref}
                                    imgSrc={element.imgSrc}
                                    name={element.name}
                                    description={element.description}
                                    index={index} />
                            })}
                        </div>
                    }

                </div>

                <div className="back-button col-8">
                    <div className="p-2 bg-light rounded-3 mt-5 w-25 mx-auto">
                        <Button size="lg w-100" onClick={() => { movePage("Dashboard") }}>Back</Button>
                    </div>

                </div>


            </div>
            <Footer />
        </div>


    )
}