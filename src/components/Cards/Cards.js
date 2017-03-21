import React, { Component } from 'react';
import './Cards.css'
import Card from '../Card/Card'

const Cards = ({ data }) => {
  if(!data){
    return (
      <div></div>
    )
  }

  const renderCards = () => {

    return data.map((card, i) => {
      return (
        <div className='cards' key={ i }>
          <h3> { card.name } </h3>
          <h4> { card.worldName } </h4>
          <h4> { card.planetInfo.population } </h4>
          <h4> { card.specieInfo.language } </h4>
        </div>
      )
    })
  }

  const renderCard = () => {
    return data.map((card, i) => {
      if(card.specieInfo === undefined){return}
      console.log(card.specieInfo);
      return(
        <div className='card' key={ i }>
          <Card
            cardInfo={ card }
            specieInfo={ card.specieInfo }
            />
        </div>
      )
    })
  }

  return (
    <section className="cards-section">
      <div className="cards-wrapper">
        { renderCard() }
      </div>
    </section>
  )
}

export default Cards

//
// const renderCards = () => {
//   const dataKeys = Object.keys(cards[0].data);
//   return cards.map((card, i) => {
//     return(
//       <div className="county-card selected" key={ i }>
//         <h3>{ card.location }</h3>
//         <ul className="county-stats">
//           {dataKeys.map((year, i) => {
//             if (cards[0].data[year] > 0.5) {
//               return (
//                 <li className="stat redStat" key={i}>{ year }: { card.data[year] }</li>
//               )
//             }
//             return (
//               <li className="stat" key={i}>{ year }: { card.data[year] }</li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   })
// }
//
//
