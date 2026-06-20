
const Card = ({ name, actor, show, imageUrl }) => {
  return (
    <div className="card">
      
      {/* Centered Circular Image - Floating over the top half */}
      <div className="image">
        <img 
          src={imageUrl} 
          alt={name} 
        />
      </div>

      {/* Content Spacer for the floating avatar */}
      <div className="">
        {/* Show Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300 bg-cyan-500/20 rounded-full mb-4 uppercase backdrop-blur-sm">
          {show}
        </span>
        
        {/* Character Name */}
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
          {name}
        </h2>
        
        {/* Actor Info */}
        <p className="text-sm text-slate-300/80">
          Played by <span className="text-white font-medium">{actor}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;