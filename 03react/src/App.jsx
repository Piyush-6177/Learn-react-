import Card from "./components/Card"

const App = () => {

  const arr = [
  {
    "id": 1,
    "name": "Jonas Kahnwald",
    "actor": "Louis Hofmann",
    "show": "Dark",
    "imageUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 2,
    "name": "Walter White",
    "actor": "Bryan Cranston",
    "show": "Breaking Bad",
    "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 3,
    "name": "Eleven",
    "actor": "Millie Bobby Brown",
    "show": "Stranger Things",
    "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 4,
    "name": "Thomas Shelby",
    "actor": "Cillian Murphy",
    "show": "Peaky Blinders",
    "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 5,
    "name": "Jon Snow",
    "actor": "Kit Harington",
    "show": "Game of Thrones",
    "imageUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 6,
    "name": "Michael Scott",
    "actor": "Steve Carell",
    "show": "The Office",
    "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 7,
    "name": "Geralt of Rivia",
    "actor": "Henry Cavill",
    "show": "The Witcher",
    "imageUrl": "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 8,
    "name": "Rust Cohle",
    "actor": "Matthew McConaughey",
    "show": "True Detective",
    "imageUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 9,
    "name": "Saul Goodman",
    "actor": "Bob Odenkirk",
    "show": "Better Call Saul",
    "imageUrl": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80"
  },
  {
    "id": 10,
    "name": "Villanelle",
    "actor": "Jodie Comer",
    "show": "Killing Eve",
    "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
  }
]

  return (
    <>
      <div className="card-container">
        {arr.map(function(elem){
          return <Card 
            key={elem.id}
            name={elem.name} 
            actor={elem.actor} 
            show={elem.show} 
            imageUrl={elem.imageUrl}
          />
        })}
      </div>
    </>
  )
}

export default App