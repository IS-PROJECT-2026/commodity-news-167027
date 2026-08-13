// Sample Energy & Commodity News Data Feed
const newsArticles = [
    {
        id: 1,
        title: "OPEC+ Reaches Consensus on Crude Oil Production Quotas",
        category: "Crude Oil",
        summary: "Member nations agree to extend voluntary supply adjustments into Q4 to maintain global market equilibrium amid evolving macroeconomic indicators.",
        timestamp: "10 mins ago",
        source: "Energy Intelligence"
    },
    {
        id: 2,
        title: "European Natural Gas Storage Reaches 85% Capacity Ahead of Winter",
        category: "Natural Gas",
        summary: "LNG imports continue to flow into Western European regasification terminals as regional inventories build faster than historic 5-year averages.",
        timestamp: "35 mins ago",
        source: "Commodity Insights"
    },
    {
        id: 3,
        title: "Asia LNG Spot Prices Rise on Increased Power Sector Demand",
        category: "LNG",
        summary: "North Asian importers step up spot market purchases as elevated summer temperatures drive peak cooling demand across key industrial hubs.",
        timestamp: "2 hours ago",
        source: "PetroGlobal"
    },
    {
        id: 4,
        title: "Offshore Pipeline Expansion Project Completed Ahead of Schedule",
        category: "Infrastructure",
        summary: "The new deepwater pipeline corridor boosts daily evacuation capacity by 150,000 barrels, relieving regional midstream bottlenecks.",
        timestamp: "4 hours ago",
        source: "Offshore Energy News"
    }
];

// Render News Feed to DOM
function renderNewsFeed(articles) {
    const grid = document.getElementById("news-grid");
    if (!grid) return;

    grid.innerHTML = articles.map(article => `
        <article class="news-card">
            <div class="card-meta">
                <span class="tag">${article.category}</span>
                <span class="time">${article.timestamp}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <span class="source">Source: ${article.source}</span>
        </article>
    `).join("");
}

// Initialize application on page load
document.addEventListener("DOMContentLoaded", () => {
    renderNewsFeed(newsArticles);
});