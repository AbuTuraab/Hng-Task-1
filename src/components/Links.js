import { Link} from "react-router-dom"

function Links() {
    return(
         <>
  <div className="box">
    <div id="overlay">
    
<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  
<div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo">
     
        <a role="button"  href="https://training.zuri.team/" >
          <div className="btn btn-danger btn-outline btn-lg"
          id="btn_zuri">Zuri team</div>
        </a>
     </div>
    </div>
  
  
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo">
     
        <a role="button"  href="https://books.zuri.team/" >
          <div className="btn btn-danger btn-outline btn-lg"
          id="books">Zuri Books</div>
        </a>
        <p>Are you an upcoming developer or product designer? if yes, I have
        a good news for you, all books you need to succeed in becoming 
        a top rated designer or developer are all available here</p>
     </div>
    </div>
  
  
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo">
     
        <a role="button"  href="https://books.zuri.team/python-for-beginners?ref_id=adenijialiyuolamilekan" >
          <div className="title btn btn-danger btn-outline btn-lg"
          id="book_python">Python Books</div>
        </a>
        <p>This is my book called python for beginners, I wrote this book
          to guide every programmer who wants to learn python programming language
          </p>
     </div>
    </div>
  
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo">
     
        <a role="button"  href="https://background.zuri.team" >
          <div className="title btn btn-danger btn-outline btn-lg"
          id="pitch">Background Check for Coders</div>
        </a>
        <p>Getting experienced coders for your project  has never gotten easier,
        at heritage consult, we are ready to connect you with the finest developers </p>
     </div>
    </div>
  
  
  
  <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo">
     
        <a role="button"  href="https://books.zuri.team/" >
          <div className="title btn btn-danger btn-outline btn-lg"
          id="book_design">Design Books</div>
        </a>
        <p>
            The HNG Design Rules Book gives you the tips &
            guidelines you need to create truly professional designs, 
            by addressing errors that could you get you disqualified.</p>
     </div>
    </div>
  
  
    <div className="panel panel-default">
    <div className="panel-heading" role="tab" id="headingTwo">
     
   
   
   
         <Link to={"/contact"} >
          <div className="btn btn-danger btn-outline btn-lg"
          id="btn_zuri">Contact Me</div>
        </Link>
     
     </div>
    </div>
  
   </div>
    </div>
  </div>



         </>
    )
}
export default Links;