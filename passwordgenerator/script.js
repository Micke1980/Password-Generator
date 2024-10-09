function displaySliderValue(slider) {
    document.querySelector('.slider-number').textContent = slider.value;
  }

  function generate() { 
    let dictionary = ""; 
    if (document.getElementById("uppercase").checked) { 
        dictionary += "qwertyuiopasdfghjklzxcvbnm"; 
    } 
    if (document.getElementById("lowercase").checked) { 
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM"; 
    } 
    if (document.getElementById("number").checked) { 
        dictionary += "1234567890"; 
    } 
    if (document.getElementById("symbol").checked) { 
        dictionary += "!@#$%^&*()_+-={}[];<>:"; 
    } 
    const length = document.querySelector( 
        'input[type="range"]').value; 
  
    if (length < 1 || dictionary.length === 0) { 
        return; 
    } 
  
    let password = ""; 
    for (let i = 0; i < length; i++) { 
        const pos = Math.floor(Math.random() * dictionary.length); 
        password += dictionary[pos]; 
    } 
  
    document.querySelector('input[type="text"]').value = password; 
        const greatContainer = document.querySelector('.great-container');
        const weak = document.querySelector('.weak');
        const god = document.querySelector('.god');
        const great = document.querySelector('.great');
        const strong = document.querySelector('.strong');
        if (password.length < 5) {
            greatContainer.textContent = 'Weak';
            greatContainer.style.color = 'red'; // Ändra färgen på texten till röd
            weak.style.backgroundColor = 'red'; // Ändra färgen på stapeln för "weak" till röd
            god.style.backgroundColor = 'transparent'; // Återställ färgen på stapeln för "god"
            strong.style.backgroundColor = 'transparent'; // Återställ färgen på stapeln för "strong"
            great.style.backgroundColor = 'transparent'; // Återställ färgen på stapeln för "great"
          } else if (password.length < 7) {
            greatContainer.textContent = 'Medium';
            greatContainer.style.color = 'white'; // Ändra färgen på texten 
            weak.style.backgroundColor = '#FFA257'; // Ändra färgen på stapeln för "weak" till #FFA257
            god.style.backgroundColor = '#FFA257'; // Ändra färgen på stapeln för "god" till #FFA257
            strong.style.backgroundColor = 'transparent'; // Återställ färgen på stapeln för "strong"
            great.style.backgroundColor = 'transparent'; // Återställ färgen på stapeln för "great"
          } else if (password.length < 9) {
            greatContainer.textContent = 'Great';
            greatContainer.style.color = 'white'; // Ändra färgen på texten 
            weak.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "weak" till #4ABEA0
            god.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "god" till #4ABEA0
            strong.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "strong" till #4ABEA0
            great.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "great" till #4ABEA0
          } else {
            greatContainer.textContent = 'Great';
            greatContainer.style.color = 'white'; // Ändra färgen på texten 
            weak.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "weak" till #4ABEA0
            god.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "god" till #4ABEA0
            strong.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "strong" till #4ABEA0
            great.style.backgroundColor = '#4ABEA0'; // Ändra färgen på stapeln för "great" till #4ABEA0
          }
    } 

  
document.querySelector('button.generate').addEventListener("click", generate);
  
document.querySelector('input[type="range"]').addEventListener( 
    "input", (e) => { 
        document.querySelector( 
            "div.range span").innerHTML = e.target.value; 
        generate(); 
    }); 
  
document.querySelector("#copy-btn").addEventListener("click", () => {
      const pass = document.querySelector('input[type="text"]').value;
      navigator.clipboard.writeText(pass).then(() => {
          document.querySelector("#copy-btn").nextElementSibling.innerHTML = "copied!";
          setTimeout(() => {
              document.querySelector("#copy-btn").nextElementSibling.innerHTML = "";
          }, 1000);
      });
  });

document.getElementById("copy-btn").addEventListener("click", function() {
    alert("Password copied!");
});
  
  const progress = document.querySelector('.progress');
  
  progress.addEventListener('input', function() {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #a638f6 0%, #a638f6 ${value}%, #16111a ${value}%, #16111a 100%)`;
  })
