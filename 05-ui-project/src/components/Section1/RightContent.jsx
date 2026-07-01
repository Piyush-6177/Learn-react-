import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className="flex px-5 py-5 gap-5 w-2/3 h-full overflow-x-auto no-scrollbar">

      {props.users.map(function (elem,idx) {
        return <RightCard idx={idx+1} img={elem.img} intro={elem.intro} tag={elem.tag} />;
      })}

    </div>
  );
};

export default RightContent;
