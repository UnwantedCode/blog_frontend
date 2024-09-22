import React, { createContext, useState, useEffect } from 'react';
import { ApiUrls } from "../../assets/Api/ApiUrls.js";

// Określenie czasu ważności cache (np. 24 godziny)
const CACHE_EXPIRATION_TIME = 1 * 60 * 60 * 1000;

export const CacheContext = createContext();

export const CacheProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);
    const fetchCategories = async () => {
        const cachedData = localStorage.getItem('categories');
        const cacheTimestamp = localStorage.getItem('categoriesTimestamp');

        if (cachedData && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_EXPIRATION_TIME)) {
            setCategories(JSON.parse(cachedData));
        } else {
            try {
                const response = await fetch(`${ApiUrls.mainUrl}categories/`);
                const data = await response.json();
                setCategories(data);
                localStorage.setItem('categories', JSON.stringify(data));
                localStorage.setItem('categoriesTimestamp', Date.now());
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
    };
    const fetchPopularArticles = async () => {
        const cachedData = localStorage.getItem('popularArticles');
        const cacheTimestamp = localStorage.getItem('popularArticlesTimestamp');

        if (cachedData && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_EXPIRATION_TIME)) {
            setArticles(JSON.parse(cachedData));
        } else {
            try {
                const response = await fetch(`${ApiUrls.mainUrl}posts/?page_size=4&sort_by_comments=desc`);
                const data = await response.json();
                setArticles(data.results);
                localStorage.setItem('popularArticles', JSON.stringify(data.results));
                localStorage.setItem('popularArticlesTimestamp', Date.now());
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        }
    };
        useEffect(() => {
        fetchCategories();
        fetchPopularArticles();
    }, []);

    return (
        <CacheContext.Provider value={{ categories, articles }}>
            {children}
        </CacheContext.Provider>
    );
};
