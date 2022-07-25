import { Nav } from "./components/Nav";
import PreviewPanel from "./components/PreviewPanel";

function App() {
  return (
    <div className="w-full  h-[100vh]  flex flex-col md:flex-row bg-primary">
      <div className="col-span-1 p-3 ">
        <Nav />
      </div>
      <div className="flex-grow pt-3 md:px-3 ">
        <PreviewPanel />
      </div>
      {/* <h2 className="text-5xl text-red-300"> hay dude !</h2> */}
    </div>
  );
}

export default App;
