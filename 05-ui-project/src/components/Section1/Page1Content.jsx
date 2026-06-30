import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = () => {
  return (
    <div className="py-10 h-[90vh] px-18 flex justify-between items-center gap-15">
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content