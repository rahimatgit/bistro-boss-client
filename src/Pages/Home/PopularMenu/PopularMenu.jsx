import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    fetch('./menu.json')
    .then(res => res.json())
    .then(data => {
        const popularItems = data.filter(popular => popular.category === 'popular');
        setMenu(popularItems);
    })

    return (
        <div>
            <SectionTitle 
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;