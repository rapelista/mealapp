export const parseYoutubeEmbed = (url) => {
    const id = url.split("watch?v=")[1];
    return `https://www.youtube.com/embed/${id}`;
};
