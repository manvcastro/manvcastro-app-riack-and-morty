import style from "./Card.module.css"


export default function Card({name, species, gender, image, onClose, id}) {
   return (  
   <div className={style.div}> 
      <button onClick={()=>onClose(id)} className={style.boton}>X</button>   
      <img className={style.imagen} src={image} alt="imagen de los personajes" />
   
      <h2 className={style.nombre}>{name}</h2>
         
      <div  className={style.divData} >
         <h2 className={style.especieGenero}>{species} </h2>
         <h2 className={style.especieGenero}>{gender}</h2>
       </div>
   </div>
   );
}
