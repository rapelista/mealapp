export const CardTitle = ({ children }) => {
    return (
        <div
            className="absolute top-0 flex items-center justify-center w-full h-full py-2 transition-all bg-slate-600/40 group-hover:bg-slate-600/10"
        >
            <h1
                className="px-2 font-semibold text-center text-white text-medium md:text-xl"
            >
                {children}
            </h1>
        </div>
    );
};
