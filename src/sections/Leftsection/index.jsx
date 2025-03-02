import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";


const leftsection = () => {
    return (
      <div className="px-3">
        <div className='sticky top-0 grid gap-y-5 lg:grid-rows-[35%_45%_20%] h-[87vh]'>
          <Header/>

          <Navbar/>

          <Contact/>
        </div>
      </div> 
    )
}
export default leftsection;