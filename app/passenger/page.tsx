import MyFormComponent from "@/components/options/Option";
 
import Ticket from "@/components/shared/Ticket";
 
const page = () => {
    return (
        <div className="sm:mt-20 mt-4  max-w-7xl  mx-auto flex">
           
         
          <div className=" w-9/12  "> 
           <MyFormComponent />
            <div>
             {
                [1,3,4,5,6,5,6].map((v,i)=>(
                    <Ticket />
                ))
             }
            </div>
           </div>
           <div className=" w-3/12 bg-red-600 "> 
          fddd
           </div>
          </div>
       
       
    );
};

export default page;