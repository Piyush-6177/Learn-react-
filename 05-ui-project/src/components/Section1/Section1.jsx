import Page1Content from "./Page1Content"
import Navbar
 from "./Navbar"
const Section1 = (props) => {
  
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Content users={props.users}/>
    </div>
  )
}

export default Section1