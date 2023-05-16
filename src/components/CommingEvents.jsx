import Event from "./Event";



const commingEvents = [
    {
        id:1,
        src:require('../imagesNew/homePage1.jpg'),
        title:"Open Doors",
        date:"07/07/2023",
        description:"wergreger rt34t4 t34ty 4t45tt 4t34t..." 
    },
    {
        id:2,
        src:require('../imagesNew/homePage1.jpg'),
        title:"Open Doors",
        date:"07/07/2023",
        description:"wergreger rt34t4 t34ty 4t45tt 4t34t..." 
    },
    {
        id:3,
        src:require('../imagesNew/homePage1.jpg'),
        title:"Open Doors",
        date:"07/07/2023",
        description:"wergreger rt34t4 t34ty 4t45tt 4t34t..." 
    },
    {
        id:4,
        src:require('../imagesNew/homePage1.jpg'),
        title:"Open Doors",
        date:"07/07/2023",
        description:"wergreger rt34t4 t34ty 4t45tt 4t34t..." 
    },
    {
        id:5,
        src:require('../imagesNew/homePage1.jpg'),
        title:"Open Doors",
        date:"07/07/2023",
        description:"wergreger rt34t4 t34ty 4t45tt 4t34t..." 
    },
];


function CommingEvents(){
    return (
        commingEvents.map((event)=>{
           return(<Event key={event.id} img={event.src} title={event.title} date={event.date} desc={event.description} />);
        }) 
    )
}

export default CommingEvents;