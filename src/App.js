import "./styles/style.css"
import Search from "./components/SearchMovies"

export default function App(){
    return(
        <div className="flex flex-col items-center bg-white">
            <h1 className=" mt-4 text-4xl text-black">Movie Search app</h1>
            <Search/>
        </div>
    )
}