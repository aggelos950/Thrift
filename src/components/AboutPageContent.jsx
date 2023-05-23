import React from "react";
import ChangeAbout from "./ChangeAbout";
import Image from "./SimpleElementsFolder/Image";


const aboutImage = [{id:100,src:require('../imagesNew/aboutImg2.jpg')}];

function AboutPageContent(){
    return( 
        <div className="parent">
            <h1>About The Festival</h1>
            <Image key={aboutImage[0].id} dest={aboutImage[0].src} />
            <div className="child child-1" id="one">
                <p>
 "One man's trash, that's another man's come up", was said by the American hip hop duo Macklemore & Ryan Lewis, in the 2012 hit the "Thrift Shop", and how true were they? 
 In this state of mind, more and more local thrift shops in Greece were endorsed, opening new possibilities for fashion and clothing. The desire to 
 witness the peak of the Thrift "magic" was formed, and so many Thrift Shops came together to bring you the Thrift Fest. A 3-days festival, with more clothes, 
 than the human eye can see, and many many surprises for those, who have the nerve to discover them.
                </p>
            </div>
            <div className="child child-2 " id="two">
                <p>
Do you keen thrift-shopping? Do you want to support sustainable fashion? Do you fancy unique clothes and accessories for all genders, all ages, and from all decades?
This is the place for you. Each store’s brand focus offers diverse styles of thrifted and vintage clothing, accessories, vinyl collectables, & more, ranging from early 80’s pieces to in-demand Y2K items and everything in between. 
Follow us in our bright and lively event to experience the timeless thrill of thrifting, to step back in time with our vintage collectibles, to discover our local vendors, and to simply have a great time followed by music, dancing, food and drinks.
                </p>
            </div>
            <div className="child child-3" id="three">
                <p>
The Festival is <strong>FREE</strong> and open to the public. It will take place in Technopolis Athens, in Gazi and it will be filled with many events, combining live music, techno, drinks, food and art with 
shopping in veeeery low prices. Even if you dont want to buy something(which is very unlikly to happen) come to introduse your self in the thrifting world, grab a friend
and take a stroll in this event of fashion, in this event for the people!.Express yourself through your clothes, feel liberal to wear what you are!!!
                </p>
            </div>    
            <ChangeAbout />  
        </div>
    )
}

export default AboutPageContent;