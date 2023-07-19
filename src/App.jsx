import ClassBasedComponent from "./components/ClassBasedComponents";
import FunctionBasedComponents from "./components/FunctionBasedComponents";

function App(){
    return(
        <div style={{ color: "red"}}>
           < ClassBasedComponent/>
           <FunctionBasedComponents/>
        </div>
    );

}
export default App;