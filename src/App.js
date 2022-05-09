import Board from "./Components/Board";
import Card from './Components/Card'
function App() {
  return (
    <div className="flexbox">
      <Board id="board-1" className="board">
      <Card id="card-1" className="card">
          <p>Card one</p>
          {/* <p>Card Two</p> */}
      </Card>
    </Board>

    <Board id="board-2" className="board">
      <Card id="card-2" className="card">
          <p>Card Two</p>
          {/* <p>Card Two</p> */}
      </Card>
    </Board>
   
    </div>
  );
}

export default App;
