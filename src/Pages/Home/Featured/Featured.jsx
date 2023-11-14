import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="my-12 featured bg-fixed text-white p-8">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-32 py-20 bg-slate-200 bg-opacity-20">
                <div>
                    <img className="" src={featured} alt="" />
                </div>
                <div className="ml-8 space-y-2 font-bold ">
                    <h3>March 20, 2023</h3>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-r-2">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;