import itemsJson from "./items.json";   
export default function Item({name, quantity, category}){


    let items = [...itemsJson];
    return(
        <div className="bg-slate-950 mx-4">
        <section className="bg-slate-900 m-4 p-2 max-w-sm">
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category}</p>
            
      </section>
      </div>
    );


}