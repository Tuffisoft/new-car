export default function CarItem({ make, model, price, link, img, year, distance, ps, kmstand, notes, id}) {
    return (
        <div className="">
            <p>{id}</p>
            <a href={link} target="_blank">
            <div className="p-4 border-4 rounded-3xl font-karla text-white shadow-xl bg-slate-400">
                <img src={img} className="rounded-md w-48 h-32 flex "></img>
                <h3 className="text-2xl">{make} {model}</h3>
                <p>{price} €</p>
                <p>Baujahr: {year}</p>
                <p>Distanz von Grabbestraße: {distance} km</p>
                <p>{ps} ps</p>
                <p>{kmstand} km</p>
                <p>{notes}</p>    
                </div>
                </a>
        </div>
    )
}