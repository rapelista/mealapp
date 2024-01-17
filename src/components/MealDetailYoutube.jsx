import { parseYoutubeEmbed } from "../../utils/Youtube";

export const MealDetailYoutube = ({
    url,
}) => {
    return (
        <div className="py-6">
            <h1
                className="pb-2 mb-4 text-lg border-b-2 border-orange-500 w-fit"
            >
                Tutorial
            </h1>
            <iframe
                src={parseYoutubeEmbed(url)}
                className="w-full aspect-video"
            >
            </iframe>
        </div>
    );
};
