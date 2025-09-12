import React from "react";
import "../App.css"

const NewsCard = ({ article }) => {
    return (
        <div className="news-card">
            {article.image_url && (
                <div className="news-card-image">
                    <img src={article.image_url} alt={article.title} />
                </div>
            )}
            <div className="news-card-content">
                <h3 className="news-card-title">{article.title}</h3>
                <p className="news-card-description">{article.description}</p>
                <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-card-link"
                >
                    Read more
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
