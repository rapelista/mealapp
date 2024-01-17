export const CardThumb = ({ thumbnail, name }) => {
    return (
        <img
            src={thumbnail}
            alt={name}
            className="transition-all duration-200 scale-110 duration group-hover:scale-125"
        />
    );
};
