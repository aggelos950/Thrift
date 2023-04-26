import React from "react";
import Image from "./Image";
import img1 from "../imagesNew/homePage1.jpg"
import img2 from "../imagesNew/homePage2.jpg"
import img3 from "../imagesNew/homePage3.jpg"
import img4 from "../imagesNew/homePage4.jpg"


function HomePageContent(){


  return(
    <div>
        <div className="startingDiv">
          <p>~Let the thriftiiiiiiiing...</p>
          <p>begin!!!~</p>
        </div>
        <div className="photoDiv">
          <p>? What to expect ? . </p>
        <Image dest={img4}/>
        <Image dest={img3}/>
        <Image dest={img2}/>
        <Image dest={img1}/>
        <p className="photoDivP">! And many more ! </p>
        </div>
       
       
    </div>
  )
}

export default HomePageContent;