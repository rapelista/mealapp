import { Banner } from "../components/Banner";

export const HomePage = () => {
    return (
        <>
            <Banner />
            <div className="w-full py-6 bg-orange-500">
                <div className="container flex flex-col mx-auto text-center">
                    <span className="mb-3 text-white">or, search your food here</span>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full h-12 px-4 border-0 rounded-lg md:w-4/12 focus:ring-0"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
