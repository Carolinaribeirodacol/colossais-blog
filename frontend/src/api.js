export function getStrapiURL(path = "") {
    return `${process.env.API_URL}${path}`
}

export function getStrapiAPIURL(path = "") {
    return getStrapiURL(`/${path}`);
}