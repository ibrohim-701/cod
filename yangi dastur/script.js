console.log("Yangi dastur sahifasi yuklandi.");

document.addEventListener("DOMContentLoaded", function() {
    console.log("Sahifa tayyor.");
});

// Oddiy salomlashish funksiyasi
function greetUser() {
    alert("Xush kelibsiz, foydalanuvchi!");
}
// Foydalanuvchi tugmachasini bosganda salomlashish funksiyasini chaqirish
document.getElementById("greetButton").addEventListener("click", greetUser);
// Foydalanuvchi tugmachasini bosganda konsolga xabar chiqarish
document.getElementById("logButton").addEventListener("click", function() {
    console.log("Foydalanuvchi tugmachasini bosdi.");
});
// Foydalanuvchi tugmachasini bosganda sahifani yangilash