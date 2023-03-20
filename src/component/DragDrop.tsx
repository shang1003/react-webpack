
import update from "immutability-helper";
import React, { useCallback, useState ,useEffect} from "react";
import emitter from '../event';
import { Card } from "./Card.jsx";


type cardType={
  id:number,
text:string
}
const style = {
    width: 400,
  }


 const Container = () => {

  
    useEffect(()=>{
//     document.addEventListener("myEvent",(e)=>{
// console.log(
//   e,'myEvent'
// );
//     })
emitter.subscribe ('changeMessage',(data:any)=>{
  console.log(emitter,data,'subscribe');
})
  },[])

  
      const [cards, setCards] = useState([
          {
            id: 1,
            text: "Write a cool JS library",
          },
          {
            id: 2,
            text: "Make it generic enough",
          },
          {
            id: 3,
            text: "Write README",
          },
          {
            id: 4,
            text: "Create some examples",
          },
          {
            id: 5,
            text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
          },
          {
            id: 6,
            text: "???",
          },
          {
            id: 7,
            text: "PROFIT",
          },
        ]),
        moveCard = useCallback((dragIndex:number, hoverIndex:number) => {
          setCards((prevCards) => {
            return update(prevCards, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevCards[dragIndex]],
              ],
            });
          });
        }, []),
        renderCard = useCallback((card:cardType, index:number) => {
          return (
            <Card
              key={card.id}
              index={index}
              id={card.id}
              text={card.text}
              moveCard={moveCard}
            />
          );
        }, []);

      return (
        <>
          <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        </>
      );
    
  };

export default Container;
