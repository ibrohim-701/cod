function runCode() {
    const code = document.getElementById('code').value;
    try {
        const result = eval(code);
        document.getElementById('output').textContent = result;
    } catch (error) {
        document.getElementById('output').textContent = error;
    }
}

function saveCode() {
    // Bu yerda kodni saqlash funksiyasi bo'lishi mumkin
    alert('Kod saqlandi (demo)');
}

function copyCode() {
    const code = document.getElementById('code');
    code.select();
    document.execCommand('copy');
    alert('Kod nusxalandi');
}

function clearOutput() {
    document.getElementById('output').textContent = '';
}
