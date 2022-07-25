import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="w-full h-[100vh] grid md:grid-cols-12 grid-cols-1">
      <div className="col-span-1 p-3 md:col-span-3">
        <Nav />
      </div>
      <div className="col-span-1 pt-3 pl-3 md:col-span-9">2</div>
      {/* <h2 className="text-5xl text-red-300"> hay dude !</h2> */}
    </div>
  );
}

export default App;
