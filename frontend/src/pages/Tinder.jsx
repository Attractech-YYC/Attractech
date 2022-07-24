import { SwipeCard } from "../components/SwipeCard"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import axios from "axios";


//I called this Tinder because it has cards that you can swipe left or right, just like Tinder.
export const Tinder = ({ activity, filterData, movePage, saveData, list }) => {

    const [data,setData] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            let res = await axios.get("http://3.96.135.171:8088/api/activity/filter?prefrences=" + activity)
            //TODO: Pass the activity and filterData to the API and filter the results
            setData(res.data)
        }
        getData()
    },[])


    return (
        <div>
            <Button onClick={() => { movePage("Landing") }}>Back</Button>
            {
                data == undefined &&
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            {
                data != undefined &&
                <div className="container py-4">
                    {data.map((element, index) => {
                        return <SwipeCard
                            key={index}
                            setPref={saveData}
                            name={element.name}
                            desc={element.description}
                            cost={element.costs}
                            time={element.time_commitment}
                            index={index} />
                    })}
                </div>
            }
        </div>
    )
}