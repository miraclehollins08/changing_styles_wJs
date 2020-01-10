var ABC= [
    "A", "B", "C", "D", "F", "G", "H", "I", "J","K" 
]

var ABClist = document.getElementById("ABC")

for(var i = 0; i <ABC.length; i++) {
    ABClist.innerHTML += "<li>"+ABC[i]+"</li>"
}

document.body.style.fontSize = "20px"
document.body.style.fontWeight = "lighter"
document.body.style.fontFamily = "sans-serif"
document.body.style.Color = "cornflowerblue"

var classList = document.querySelector("#header").classList
console.log(classList)
