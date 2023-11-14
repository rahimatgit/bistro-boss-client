
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {


    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    // useEffect( () => {
    //     fetch('./menu.json')
    // .then(res => res.json())
    // .then(data => {
    //     const popularItems = data.filter(popular => popular.category === 'popular');
    //     setMenu(popularItems);
    // })
    // } , [])

    return (
        <div>
            <SectionTitle 
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;