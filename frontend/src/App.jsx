import { Landing } from "./pages/Landing"
import { Create } from './pages/Create'
import { useState } from "react";

export const App = () =>{

    const [currentPage, setCurrentPage] = useState("Create");

    return(
        <div>
            {currentPage === "Landing" && <Landing setCurrentPage={setCurrentPage} />}
            {currentPage === "Create" && <Create setCurrentPage={setCurrentPage} />}
        </div>
    )
}