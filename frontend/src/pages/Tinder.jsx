import { SwipeCard } from "../components/SwipeCard"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Navigation from "../components/Navigation";
import { Footer } from "../components/Footer";
import { List } from "./List";


//I called this Tinder because it has cards that you can swipe left or right, just like Tinder.
export const Tinder = ({ activity, filterData, movePage, saveData, list }) => {

    const [data, setData] = useState(undefined);

    const [currentPage, setPage] = useState("Tinder");

    const [error, setError] = useState(undefined);


    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            console.log("https://attractech.heimonsy.com/api/activity/filter?prefrences=" + activity + "&costs=" + filterData.cost + "&times=" + filterData.timeInvestment)
            let res = await axios.get("https://attractech.heimonsy.com/api/activity/filter?prefrences=" + activity + "&costs=" + filterData.cost + "&times=" + filterData.timeInvestment);
            if(res.data.length == 0){
                setError("No activities found! Please try again later.")
            }
            console.log(res.data)
            setData(res.data)
        }
        getData()
    }, [])

    const setLists = (item) => {
        let array2 = currentList
        array2.push(item)
        setCurrentList(array2)
        console.log(currentList)
        saveData(item)
    }


    return (

        // Main Page
        <>
            {
                currentPage === "Tinder" &&
                <div className="bg-landing">
                    <Navigation movePage={movePage} />
                    <div className="row justify-content-center text-center vh-100">
                        <div className="col-8">
                            {
                                data == undefined && <div className="p-5 bg-light rounded-3 footer-space"><h1 className="fw-bold fs-1">Loading...</h1></div>
                            }
                            {
                                error != undefined &&
                                <div className="p-5 bg-light rounded-3 footer-space"><h1 className="fw-bold fs-1">{error}</h1></div>
                            }
                            {
                                data != undefined &&
                                <div className="container py-4">
                                    {data.map((element, index) => {
                                        return <SwipeCard
                                            key={index}
                                            setPref={setLists}
                                            name={element.name}
                                            desc={element.description}
                                            cost={element.costs}
                                            time={element.time_commitment}
                                            index={index}
                                            movePage={setPage} />
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
            }
            {
                currentPage === "List" &&
                <List movePage={movePage} list={currentList}/>
            }
        </>


    )
}