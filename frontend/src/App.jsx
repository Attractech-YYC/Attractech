import { Landing } from "./pages/Landing"
import { Create } from './pages/Create'
import { Dashboard } from './pages/Dashboard'
import { Tinder } from './pages/Tinder'
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {


    const [currentPage, setCurrentPage] = useState("Landing");
    const [filterData, setFilterData] = useState({}); //{cost: "", timeInvestment: ""}
    const [activity, setActivity] = useState(""); //"Eat", "Artisans","Culture","Exercise","Adventures"
    const [savedLists, setSavedLists] = useState([]);

    useEffect(() => {
        if(currentPage === "Dashboard" && savedLists.length != 0){
            let previousString = localStorage.getItem("savedLists")
            let previousData = []
            if(previousString != null){
                previousData = JSON.parse(previousString)
            }
            previousData.push(savedLists)
            localStorage.setItem("savedLists", JSON.stringify(previousData))
            setSavedLists([])
            setCurrentPage("Landing")
            setCurrentPage("Dashboard")
        }
    },[currentPage])

    const updateLists = (newItem) => {
        let array2 = savedLists;
        array2.push(newItem);
    }
    

    return (
        <div className="vw-100 vh-100">
            {currentPage === "Landing" && <Landing movePage={setCurrentPage} setData={setFilterData} />}
            {currentPage === "Create" && <Create movePage={setCurrentPage} />}
            {currentPage === "Dashboard" && <Dashboard movePage={setCurrentPage} setData={setActivity} />}
            {currentPage === "Tinder" && <Tinder movePage={setCurrentPage} activity={activity} filterData={filterData} saveData={updateLists}/>}
        </div>
    )
}