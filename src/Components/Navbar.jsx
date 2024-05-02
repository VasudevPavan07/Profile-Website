import React from "react";


const Navbar = () => {
  return (
    <div  className="navbar  py-8 w-full  fixed z-[999] flex items-center  justify-between ">
      
        <div className="Name  text-white  poppins-medium text-2xl ">
          <h1 className="px-5">Vasudev Pavan</h1>
        </div>
        <div className="links  flex gap-10 text-white">
          {["Profile", "Projects", "Education", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                className={`text-lg  capitalize font-light py-2 px-5 rounded ${index=== 3 && "ml-32"}`}
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
