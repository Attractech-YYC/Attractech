import { Landing } from "./pages/Landing"
import { Create } from './pages/Create'
import { Dashboard } from './pages/Dashboard'
import { Tinder } from './pages/Tinder'
import { useState } from "react";
import { useEffect } from "react";

export const App = () =>{


    const [currentPage, setCurrentPage] = useState("Landing");
    const [filterData, setFilterData] = useState({}); //{cost: "", timeInvestment: ""}
    const [activity, setActivity] = useState(""); //"Eat", "Artisans","Culture","Exercise","Adventures"
    const [savedLists, setSavedLists] = useState([]);

    useEffect(() => {
        if(currentPage === "Landing" && savedLists.length != 0){
            let previousString = localStorage.getItem("savedLists")
            let previousData = []
            console.log(previousString)
            if(previousString != null){
                previousData = JSON.parse(previousString)
            }
            previousData.push(savedLists)
            console.log("Saving data")
            localStorage.setItem("savedLists", JSON.stringify(previousData))
            console.log(localStorage.getItem("savedLists"))
            setSavedLists([])
            setCurrentPage("Dashboard")
        }
    },[currentPage])

    const updateLists = (newItem) => {
        console.log("Called from " + newItem.name)
        let array2 = savedLists;
        array2.push(newItem);
        setSavedLists(array2)
        console.log(savedLists)
    }
    

    return(
        <div>
            {currentPage === "Landing" && <Landing movePage={setCurrentPage} setData={setFilterData} />}
            {currentPage === "Create" && <Create movePage={setCurrentPage} />}
            {currentPage === "Dashboard" && <Dashboard movePage={setCurrentPage} setData={setActivity} />}
            {currentPage === "Tinder" && <Tinder movePage={setCurrentPage} activity={activity} filterData={filterData} saveData={updateLists}/>}
        </div>
    )
}