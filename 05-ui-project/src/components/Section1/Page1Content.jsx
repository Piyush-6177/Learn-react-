import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  
  return (
    <div className="py-10 h-[90vh] px-10 flex justify-between items-center gap-10">
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content