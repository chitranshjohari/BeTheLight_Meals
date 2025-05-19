import RestaurentCard from "./RestaurentCard";
import resobj from "../utils/mockdata";
const Body = () => (
  <div className='body'>
    <div className='search-container'>
      <input></input>
      <button>Search</button>
    </div>
    <div className='res-container'>
      {resobj.map((data) => {
        return <RestaurentCard key={data.info.id} resdata={data} ></RestaurentCard>

      })}

    </div>
  </div>
)

export default Body;