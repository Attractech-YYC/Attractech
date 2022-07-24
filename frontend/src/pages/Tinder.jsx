import { SwipeCard } from "../components/SwipeCard"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

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
        <div>
            <Button onClick={() => { movePage("Dashboard") }}>Back</Button>
            {
                array == undefined && <h1>Loading...</h1>
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
    )
}