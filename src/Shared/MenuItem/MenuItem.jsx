

const MenuItem = ({item}) => {

    const {image, name, recipe, price} = item;

    return (
        <div className="flex space-x-4 mb-4">
            <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="text-xl font-semibold">{name}-------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-600 font-bold">${price}</p>
        </div>
    );
};

export default MenuItem;