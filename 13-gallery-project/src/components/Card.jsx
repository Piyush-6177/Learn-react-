
const Card = ({elem}) => {
  return (
    <div>
      <a href={elem.url} target="_blank">
        <div className="h-64 w-64 p-2 overflow-hidden ">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={elem.download_url}
            alt=""
          />
        </div>
        <h3 className="px-3 font-bold text-lg">{elem.author}</h3>
      </a>
    </div>
  );
};

export default Card;
