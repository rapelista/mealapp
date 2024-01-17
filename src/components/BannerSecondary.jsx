import { Images } from "../../utils/Images";

export const BannerSecondary = () => {
    return (
        <div className="w-full">
            <div className="container flex flex-col items-center justify-center gap-8 py-12 mx-auto md:py-16 md:gap-0 md:flex-row">
                <img
                    src={Images.CookingFood}
                    className="w-9/12 md:w-2/6 rounded-3xl"
                />
                <div className="text-2xl font-semibold leading-snug text-center text-gray-800 bg-white rounded-lg md:border-l-4 md:border-b-4 md:py-8 md:px-6 border-orange-500/50 md:w-6/12 lg:text-5xl lg:leading-tight h-fit md:-ms-8 md:text-left">
                    So, what are you going to eat <span className="text-orange-500">today?</span>
                </div>
            </div>
        </div>
    );
};
