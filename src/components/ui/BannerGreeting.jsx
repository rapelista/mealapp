import { Link } from "react-router-dom";

export const BannerGreeting = () => {
    return (
        <div className="flex flex-col justify-center md:w-7/12">
            <h1
                className="text-3xl font-semibold leading-snug text-gray-800 lg:text-5xl lg:leading-snug"
            >
                Make <span className="text-orange-500">tasty food</span> and explore your appetite!
            </h1>
            <h5 className="mt-3">It's time to try making your own delicious food to have a wonderful day</h5>
            <Link to="/meals"
                className="px-6 py-3 mt-6 text-white bg-orange-500 rounded-lg w-fit hover:bg-orange-600 hover:text-white"
            >
                See All Meals
            </Link>
        </div>
    );
};
