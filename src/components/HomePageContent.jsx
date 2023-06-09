import React from "react";
import Image from "../components/SimpleElementsFolder/Image";


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
            return <Image key={image.id} dest={image.src} />
            })}
          <p className="photoDivP">! And many more ! </p>
        </div>
         
        
    </div>
       
       
    
  )
}

export default HomePageContent;