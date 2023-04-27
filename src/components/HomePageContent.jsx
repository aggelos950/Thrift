import React from "react";
import Image from "./Image";
import img1 from "../imagesNew/homePage1.jpg"
import img2 from "../imagesNew/homePage2.jpg"
import img3 from "../imagesNew/homePage3.jpg"
import img4 from "../imagesNew/homePage4.jpg"
import img5 from "../imagesNew/homePage5.jpg"
import img6 from "../imagesNew/homePage6.jpg"

const images = [
  {id:1,src:require('../imagesNew/homePage1.jpg')},
  {id:2,src:require('../imagesNew/homePage2.jpg')},
  {id:3,src:require('../imagesNew/homePage3.jpg')},
  {id:4,src:require('../imagesNew/homePage4.jpg')},
  {id:5,src:require('../imagesNew/homePage5.jpg')},
  {id:6,src:require('../imagesNew/homePage6.jpg')}
]



function HomePageContent(){

  return(
    <div>
        <div className="startingDiv">
          <p>~Let the thriftiiiiiiiing...</p>
          <p>begin!!!~</p>
        </div>
        <div className="photoDiv">
          <p>? What to expect ? . </p>
            
            {images.map((image)=>{
            return <Image key={image.dest} dest={image.src} />
            })}
          <p className="photoDivP">! And many more ! </p>
        </div>
         
        
    </div>
       
       
    
  )
}

export default HomePageContent;