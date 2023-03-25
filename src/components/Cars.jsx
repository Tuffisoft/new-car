import cars from "../data/cars"
import CarItem from "./CarItem.jsx"

export default function Cars() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-4">
                 {cars.map(project => (
                     <CarItem
                        key={project.id}
                        make={project.make}
                        model={project.model}
                        link={project.link}
                        price={project.price}
                        img={project.img}
                        year={project.year}
                        distance={project.distance}
                        ps={project.ps}
                        kmstand={project.kmstand}
                        notes={project.notes}
                         
                />))}
            </div>
        </div>
    )
}