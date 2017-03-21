import React, { Component } from 'react';
import './Cards.css'




const Cards = ({ data }) => {
  if(!data){
    return (
      <div></div>
    )
  }

  const renderCards = () => {

    return data.map((card, i) => {

      // const homeworld = card.homeworld

      // fetch(homeworld)
      //   .then((response) => {
      //     return response.json()
      //   })
      //   .then((json) => {
      //     card.worldName = getFromApi(json)
      //   })
      //
      // const getFromApi = (json) => {
      //   if(!json){return}
      //
      //   console.log('woot', card)
      //
      //   console.log(json.name);
      //   return json.name
      // }

      console.log(data[0]);
      return (
        <div className='cards' key={ i }>
          <h3> { card.name }</h3>
          <h4> { card.worldName } </h4>
        </div>
      )
    })
  }
  return (
    <section className="cards">
      <div className="compare-wrap">
        { renderCards() }
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
