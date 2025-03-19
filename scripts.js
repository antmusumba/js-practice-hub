
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

