import { Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { useGetArea } from "../hooks/useGetArea";

export const LocalCulinaryPage = () => {
    const {
        data,
        isLoading,
    } = useGetArea();

    return (
        <div className="mt-4">
            {isLoading ? (
                <div className="text-center">
                    <Spinner />
                </div>
            ) : data && (
                <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
                    {
                        data.meals.map(({ strArea }, key) => (
                            <Link
                                key={key}
                                to={`${strArea.toLowerCase()}`}
                                className=" hover:text-black"
                            >
                                <div
                                    className="px-6 py-4 transition-colors duration-200 bg-secondary rounded-xl hover:bg-orange-500/50"
                                >
                                    {strArea}
                                </div>
                            </Link>

                        ))
                    }
                </div>
            )
            }
        </div>
    );
};
