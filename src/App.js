import Contact from "./Pages/Contact";
import  {Routes, Route}  from "react-router-dom";
import Homepage from "./Pages/HomePage";




const App = () =>{
 
    return(


      <div>
      
        
      
      <Routes>
      <Route path="/" element={<Homepage/>} />
     <Route path="/contact" element={<Contact/>} /> 
         </Routes> 
           
   </div>
   

   
   )
  }





export default App;
