const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="red mc_laren" />
        <h2>{props.username}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button>About</button>
    </div>
  )
}

export default Card