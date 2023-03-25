import Cars from "./components/Cars"

export default function App() {
  

  return (
    <div className=" bg-slate-200">
      <div className="flex justify-between items-center p-10 text-center text-slate-500 shadow-lg font-karla text-4xl ">
      <img src="./public/fred.png" className="w-24"></img>
      <h1
        className="pr-32">
        Neues Auto 2023
        </h1>
        </div>
      <Cars />
    </div>
  )
}


