

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-12 text-center md:w-4/12 mx-auto">
            <p className="text-orange-600 font-medium mb-2">{subHeading}</p>
            <h2 className="text-4xl font-bold border-y-2 py-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;