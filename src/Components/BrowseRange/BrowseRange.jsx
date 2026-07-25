import BrowserSec1 from "../../assets/BrowserSec1.png";
import BrowserSec2 from "../../assets/BrowserSec2.png";
import BrowserSec3 from "../../assets/BrowserSec3.png";


const BrowseRange = () => {

    const categories = [
        {
            title: "Dining",
            image: BrowserSec1,
        },
        {
            title: "Living",
            image: BrowserSec2,
        },
        {
            title: "Bedroom",
            image: BrowserSec3,
        },
    ];


    return (
        <section className="py-16 bg-white">

            
     <div className="text-center mb-10">
        <h2 className=" text-3xl font-bold  text-gray-900 "> Browse The Range</h2>
       <p className=" text-gray-500  mt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
 </div>

  
     <div className=" max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {
       categories.map((item, index) => (
    <div
          key={index} className="group cursor-pointer">
     <div className=" overflow-hidden rounded-md h-[380px]">
  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
    </div>
      <h3 className="text-center mt-5 text-xl font-semibold text-gray-800"> {item.title} </h3>
 </div>
     ))
 }
   </div>
</section>
    )
}


export default BrowseRange;