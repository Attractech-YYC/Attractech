import { SwipeCard } from "./SwipeCard"
import { useState } from "react";

export const Swipe = (props) => {

    const array = [{ "name": "One", "description": "Description one" }, { "name": "Two", "description": "Description two" }, { "name": "Three", "description": "Description three" }];

    const [prefList, setPrefList] = useState([]);

    function setPref(image, name, desc) {
        let array2 = prefList;
        array2.push({ "imgSrc": image, "name": name, "description": desc })
        setPrefList(array2);
        console.log(prefList);
    };

    return (
        <div>
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
        </div>
    )
}