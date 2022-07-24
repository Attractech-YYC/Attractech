import { Landing } from "./pages/Landing"
import { Create } from './pages/Create'
import { Dashboard } from './pages/Dashboard'
import { Tinder } from './pages/Tinder'
import { useState } from "react";

export const App = () =>{

    const [currentPage, setCurrentPage] = useState("Landing");
    const [filterData, setFilterData] = useState({}); //{cost: "", timeInvestment: ""}
    const [activity, setActivity] = useState(""); //"Eat", "Artisans","Culture","Exercise","Adventures"

    return(
        <div>
            {currentPage === "Landing" && <Landing movePage={setCurrentPage} setData={setFilterData} />}
            {currentPage === "Create" && <Create movePage={setCurrentPage} />}
            {currentPage === "Dashboard" && <Dashboard movePage={setCurrentPage} setData={setActivity} />}
            {currentPage === "Tinder" && <Tinder movePage={setCurrentPage} activity={activity} filterData={filterData} />}
        </div>
    )
}