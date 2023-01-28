import Card from "../Card/Card";
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   console.log(props)
   return (
      <div className={style.cards}>
         {characters.map(c => 
         <Card
               key={c.name}
               onClose={props.onClose}
               name={c.name}
               species={c.species}
               gender={c.gender}
               image={c.image}
               id={c.id}
         />)}
      </div>
   )
}
