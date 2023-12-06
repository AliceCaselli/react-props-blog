// Partendo dall’esercizio di ieri e dall’array di posts allegato, l’obiettivo è creare dinamicamente gli articoli all’interno della pagina tramite un componente dedicato ad ogni articolo.
// I dati relativi a ciascun post dovranno essere passati come props ai componenti.
// Ogni post ha una proprietà published, e gli articoli devono essere mostrati solo se questa proprietà è impostata su true.
// Assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css ecc…

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import TheHeader from './components/TheHeader'
import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'
// import Card from './components/card'
// import posts from './data/dbPosts.js'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheHeader />

      <TheMain />
      <TheFooter />
    </>
  )
}

export default App
