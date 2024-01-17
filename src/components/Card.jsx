import { Link } from "react-router-dom";
import { CardThumb } from "./CardThumb";
import { CardTitle } from "./CardTitle";

export const Card = ({ to, thumbnail, name }) => {
    return (
        <Link
            to={to}
            className="relative mx-auto overflow-hidden rounded-xl group"
        >
            <CardThumb
                thumbnail={thumbnail}
                name={name}
            />
            <CardTitle>
                {name}
            </CardTitle>
        </Link>
    );
};
