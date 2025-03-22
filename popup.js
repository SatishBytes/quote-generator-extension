async function getQuote() {
    try {
        let response = await fetch("https://zenquotes.io/api/random");
        let data = await response.json();
        document.getElementById("quote").innerText = `"${data[0].q}" — ${data[0].a}`;
    } catch (error) {
        document.getElementById("quote").innerText = "Failed to fetch quote!";
        console.error("Error fetching quote:", error);
    }
}

document.getElementById("new-quote").addEventListener("click", getQuote);


getQuote();
