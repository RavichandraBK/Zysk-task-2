import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard";
import myContext from "./Contexts/MyContext";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState(data);
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const getData = response.data;
      setData(getData);
      setContent(getData);
    }
    fetchData();
  },[])
  // console.log(data);
  return (
    <div className="">
      <myContext.Provider value={{data,content,setContent}}>
      <Dashboard/>
      </myContext.Provider>
    </div>
  );
}

export default App;
