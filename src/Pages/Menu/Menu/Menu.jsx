import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import image from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={image}
                title={"OUR MENU"}
            ></Cover>
            {/* main cover */}
            <SectionTitle 
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory
                items={dessert}
                title="DESERT"
                img={dessertImg}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
                items={pizza}
                title="PIZZA"
                img={pizzaImg}
            ></MenuCategory>
            {/* salad */}
            <MenuCategory
                items={salad}
                title="SALAD"
                img={saladImg}
            ></MenuCategory>
            {/* soup */}
            <MenuCategory
                items={soup}
                title="SOUP"
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;