import RightCardContent from "./RightCardContent";

const RightCard = ({idx,img,intro,tag}) => {
    
  return (
    <div className="h-full overflow-hidden shrink-0 rounded-4xl relative w-1/3 bg-amber-50 ">
      <img
        className="h-full w-full object-cover"
        src={img}
        alt="img1"
      />

      <RightCardContent id={idx} intro={intro} tag={tag}/>
    </div>
  );
};

export default RightCard;
