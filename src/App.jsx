import Header from "./components/Header"
import Content from "./components/Content"
import React from "react"
import './App.css'
function App() {

  const [isLoading, setIsLoading] = React.useState(true)
  const [allMemes, setAllMemes] = React.useState([])

  const APIFetch = async ()=> {

      const url = "https://api.imgflip.com/get_memes";

      try{
          const response = await fetch(url);
          if(!response.ok){
              console.log(response);
              const errMessage = `${response.status}`;
              throw new Error(errMessage);
          }

          const APIData = await response.json();

          return APIData;

      } catch (error) {
          console.log(error.message);
      }
      

  }

  React.useEffect(()=> {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      APIFetch().then(APIData => {
          console.log("data fetched")
          setAllMemes(APIData.data.memes)
          setIsLoading(false);
      });
  },[])

  return (
    <>
      <Header />
      {isLoading ? <h1>Loading...</h1>: <Content allMemes = {allMemes}/>}
    </>
  )
}

export default App
