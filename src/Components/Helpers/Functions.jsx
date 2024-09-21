import {Helmet} from "react-helmet-async";

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(dateString);
    return new Intl.DateTimeFormat('pl-PL', options).format(dateObj);
};

export const commentFormater = (comment) => {
    if (comment === 1) {
        return `${comment} komentarz`;
    }
    if ([2, 3, 4].includes(comment % 10) && ![12, 13, 14].includes(comment % 100)) {
        return `${comment} komentarze`;
    }
    return `${comment} komentarzy`;
}
export const stripHtml = (string) => {
    let div = document.createElement("div");
    div.innerHTML = string
    string = div.innerText
    string = string.replace(/\s+/g,' ').trim().substring(0, 500);
    return string
}

export const changeHelmetTitle = (title) => {
    return(
    <Helmet>
        <title>{title} - CyberBlog</title>
    </Helmet>
    )
}

export const buildTreeData = (items, parentFieldName) => {
    const map = {}; // Mapowanie komentarzy
    const roots = [];

    items.forEach(item => {
        item.children = [];
        map[item.id] = item;
    });

    items.forEach(item => {
        if (item[parentFieldName]) {
            map[item[parentFieldName]].children.push(item);
        } else {
            roots.push(item);
        }
    });

    return roots;
};