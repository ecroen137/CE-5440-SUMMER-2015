var alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];


for(var i = 0; i < alphabet.length; i++) {
        if(i % 2 === 0) {
            var lowercase = alphabet[i].toLowerCase();
            document.write(lowercase);
        } else {
            document.write(alphabet[i]);
        }
        document.write("<br>");
    }