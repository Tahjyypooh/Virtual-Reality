window.addEventListener("DOMContentLoaded",function() {
 
let scene = document.querySelector("a-scene");

let icosahedron = document.createElement("a-icosahedron");

icosahedron.setAttribute("postition"," 1 3 -10")

scene.append(icosahedron)
})