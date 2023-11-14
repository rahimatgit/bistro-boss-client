import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import image from '../../../assets/menu/banner3.jpg';
import useMenu from "../../../hooks/useMenu";



const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={image}
                title={"OUR MENU"}
            ></Cover>
        </div>
    );
};

export default Menu;