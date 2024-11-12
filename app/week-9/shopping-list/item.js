import itemsJson from "./items.json";   
export default function Item({name, quantity, category, onSelect}){


    // let items = [...itemsJson];
    return(
        <div className="bg-slate-950 mx-4">
        <section onClick={() => onSelect()} className="bg-slate-900 m-4 p-2 max-w-sm">
            <h2
            onClick={() => onSelect()} 
            className="font-bold text-xl">{name}</h2>
            <p
            onClick={() => onSelect()} 
            className="text-sm">Buy {quantity} in {category}</p>
            
      </section>
      </div>
    );


}