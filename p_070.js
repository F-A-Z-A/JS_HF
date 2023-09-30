let word = "bottles";
let count = 100;
while (count > 0) {
    document.write(count + " " + word + " of beer on the wall <br>");
    document.write(count + " " + word + " of beer, <br>");
    document.write("Take one down, pass it around, <br>");
    count = count - 1;
    document.write(count + " " + word + " of beer on the wall. <br> <br>");
}
console.log("No more " + word + " of beer on the wall.");