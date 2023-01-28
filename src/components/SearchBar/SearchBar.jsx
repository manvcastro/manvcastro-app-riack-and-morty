import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   const handleChange = (e) =>{
      
      setCharacter (e.target.value)
   }

   return (
      <div className={style.div}>
         <input type='search' placeholder='Buscar...' className={style.input} onChange={handleChange} />
      <button onClick={() => onSearch(parseInt (character))} className={style.boton}>Agregar</button>
      </div>
   );
}
