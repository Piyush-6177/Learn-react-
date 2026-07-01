import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

const App = () => {

  const users = [
    {
      img : "https://images.unsplash.com/photo-1734365295020-fdeea8b0fe80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cupiditate. Obcaecati voluptas eum dolor eos.",
      tag : "Satisfied"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1661284907488-ce9e763a6314?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
      intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse necessitatibus eaque distinctio.",
      tag : "Underserved"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1673289670385-362cce1ac848?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
      intro : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi totam sunt numquam saepe.",
      tag : "Underbanked"
    },
    {
      img : "https://images.unsplash.com/photo-1663743556587-b0cd1a9cd61d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      intro : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dicta fugit dolorum aliquid eius.",
      tag : "Undercover"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1661645746892-6db165857d91?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      intro : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi velit perspiciatis, officiis nobis nulla architecto.",
      tag : "Underworld"
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App