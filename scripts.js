
function resetPage() {
    // Reset text content
    document.getElementById("dope").innerHTML = "I am going to change this when you click a button.";
    
    // Reset image source
    document.getElementById("myImage").src = "assets/pic_bulboff.gif";

    // Reset text color
    document.getElementById("dope").style.color = "";
    document.getElementById("dope").style.display = "block";

// Reset user input and output
document.getElementById("userInput").value = "";
document.getElementById("output").innerText = "";
}
function useInnerText() {
    let input = document.getElementById("userInput").value;
    document.getElementById("output").innerText = input;  // Safe (ignores HTML)
}

function useInnerHTML() {
    let input = document.getElementById("userInput").value;
    document.getElementById("output").innerHTML = input;  // Risky (executes HTML)
}
async function fetchRandomUser() {
    try {
        const userInfo = document.getElementById("user-info");
        const userCard = document.getElementById("user-card");
        userInfo.innerText = "Fetching user data...";
        userCard.style.display = "none";  // Hide card while loading

        // Fetch data from API
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) throw new Error("Network error");

        const data = await response.json();
        const user = data.results[0];

        // Update UI with user details
        document.getElementById("user-name").innerText = `${user.name.first} ${user.name.last}`;
        document.getElementById("user-email").innerText = user.email;
        document.getElementById("user-pic").src = user.picture.medium;

        // Show the user card
        userCard.style.display = "block";
        userInfo.innerText = ""; // Remove "Fetching..." text

    } catch (error) {
        document.getElementById("user-info").innerHTML = `<span class="error">Failed to fetch user data.</span>`;
        console.error("Error fetching data:", error);
    }
}