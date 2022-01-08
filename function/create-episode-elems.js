
const server = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export function createEpisodeElems(episodes) {

    episodes.sort((a, b) => a.attributes.number - b.attributes.number);
    
    const elems = episodes.map((episode, index) => {
        const attrs = episode.attributes;
        const picAttrs = episode.attributes.picture.data.attributes;
        const elem = {};
        elem.content = {
            img: { src: server + picAttrs.url, alt: picAttrs.name, info: attrs.title},
            name: `${attrs.number} серия`,
            date: attrs.publishedAt,
        };
        elem.href = "/episode/" + attrs.Slug;
        return elem;
    });
    return elems;
}