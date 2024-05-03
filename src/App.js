import Card from './Components/Component/functional component/props';
import Data from './Components/Component/functional component/Data.json';

//data mapping and pass to the component
let element = Data.map((item) => <Card title= {item.Title} Desc = {item.Desc}/>)

function App() {
    return <div>
        {element}
    </div>
}

export default App;
