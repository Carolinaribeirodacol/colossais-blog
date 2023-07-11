export function getStrapiURL(path = "") {
    return `${process.env.PUBLIC_API_URL || "http://localhost:1337"}${path}`
}

export function getStrapiAPIURL(path = "") {
    return getStrapiURL(`/api/${path}`);
}