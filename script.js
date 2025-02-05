document.addEventListener("DOMContentLoaded", function () {
    const priceElement = document.getElementById("price");

    async function fetchPrice() {
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=saturn-coin&vs_currencies=usd");
            const data = await response.json();
            
            if (data["saturn-coin"]) {
                priceElement.textContent = `$${data["saturn-coin"].usd}`;
            } else {
                priceElement.textContent = "Price Unavailable";
            }
        } catch (error) {
            priceElement.textContent = "Error Fetching Price";
        }
    }

    fetchPrice();
    setInterval(fetchPrice, 60000); // Updates price every 60 seconds
});
