class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  

      let fluff = document.createElement("a-sphere");
      fluff.setAttribute("color", "white");
      fluff.setAttribute("position", "1.25","5 0");
      fluff.setAttribute("height", "1");
      fluff.setAttribute("radius", "1.5");
      this.obj.append( fluff );

      let pillow = document.createElement("a-sphere");
      pillow.setAttribute("color", "white");
      pillow.setAttribute("position", "1.25","5 0");
      pillow.setAttribute("height", "1");
      pillow.setAttribute("radius", "1.5");
      this.obj.append( pillow );

      let cotton = document.createElement("a-sphere");
      cotton.setAttribute("color", "white");
      cotton.setAttribute("position", "1.25","5 0");
      cotton.setAttribute("height", "1");
      cotton.setAttribute("radius", "1.5");
      this.obj.append( cotton );
    
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}