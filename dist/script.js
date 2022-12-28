const content = document.getElementById("content-box");




function generatePassword(options) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'; 

    let password = '';

    while (password.length < options.length) {
        if (options.uppercase) {
            password += uppercase[Math.floor(Math.random() * uppercase.length)];
        }
        if (options.lowercase) {
            password += lowercase[Math.floor(Math.random() * lowercase.length)];
        }
        if (options.numbers) {
            password += numbers[Math.floor(Math.random() * numbers.length)];
        }
        if (options.symbols) {
            password += symbols[Math.floor(Math.random() * symbols.length)];
        }
    }

    return password;

}


options = {
    length: 10,
    uppercase: true,
    lowercase: false,
    numbers: false,
    symbols:false 
 };


function submitForm() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    options = {
        length: length,
        uppercase: uppercase,
        lowercase: lowercase,
        numbers: numbers,
        symbols: symbols
    }

    content.innerHTML = generatePassword(options);
}


content.innerHTML = generatePassword(options);


async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(content.innerHTML);
    content.innerHTML = "Copied to clipboard!";
  }
  catch (err) {
    content.innerHTML = "Copied to clipboard!";
  }

}