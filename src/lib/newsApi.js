export const fetchNews = async ({ language, country, category }) => {
    const apiKey =import.meta.env.VITE_NEWSDATA_API_KEY;
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${language}&country=${country}&category=${category}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};
