import Data from './Data.jsx'
import { getImageUrl } from './Utils.jsx';
import './App.css'


// export and import two things


export default function App() {

  const items = Data.map(data =>
    // eslint-disable-next-line react/jsx-key
    <li>
      <div className='li-container'>
        <div className='img-container'><img src={getImageUrl(data)} alt="" /></div>
        <div className='img-description'>
          <h3>{data.name}</h3>
          <p>{data.profession} is known for {data.accomplishment}</p>
        </div>
      </div>
    </li>
  )

  return (
    <ul>
      {items}
    </ul>
  )
}
