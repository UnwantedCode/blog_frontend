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