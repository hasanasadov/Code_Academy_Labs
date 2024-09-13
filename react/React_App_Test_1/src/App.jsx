import React from 'react'
import Card from './components/card'

const CARDS = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Description 1',
    isActive: true
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Description 2',
    isActive: false
  }
]

function App() {

  return (
    <>
      <h1>App</h1>
      <div className="cards">
        {CARDS.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  )
}

export default App
