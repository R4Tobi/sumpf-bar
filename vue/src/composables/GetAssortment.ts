export async function getAssortment() {
    try {
        // Replace with the URL to the raw file in your Git repository
        const response = await fetch('https://raw.githubusercontent.com/R4Tobi/sumpf-bar/refs/heads/main/assortment/products.json');
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch assortment:', error);
        // Return a default or empty object on failure
        return {
            beer: "",
            drinks: [],
            snacks: []
        };
    }
}
