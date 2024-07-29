import React from "react";


const Navbar = () => {
  return (
    <div   className="py-8 w-full  fixed z-[999] navbar  ">
      
        <div className="Name  text-white  poppins-medium text-2xl ">
          <h1 className="px-5">Vasudev Pavan</h1>
        </div>
        <div className="links absolute top-6 right-4  navitems flex gap-10 text-white">
          {["Profile", "Projects", "Education", "Contact"].map(
            (item, index) => (
              <a  
                key={index}
                className={ ` text-lg  capitalize font-light py-2 px-5 rounded ${index=== 3 && "ml-32"}`}
                style={{ marginLeft: (index === 3 && window.innerWidth > 960) ? "35px" : "-18px" }}
             >
                {item}
              </a>
            )
          )}
        </div>
       
      
    

      
    
    
    </div>
    
  );
};

export default Navbar;
