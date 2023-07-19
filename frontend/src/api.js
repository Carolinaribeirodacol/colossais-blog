export function getStrapiURL(path = "") {
    return `${process.env.REACT_APP_API_URL}${path}`
}

export function getStrapiAPIURL(path = "") {
    return getStrapiURL(`/${path}`);
}