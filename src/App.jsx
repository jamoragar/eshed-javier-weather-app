import useLocalStorageState from 'use-local-storage-state'
import useFetch from "./hooks/UseFetch";
import { useEffect, useState } from 'react';
//Components
import Form from "./components/Form/Form";
import List from './components/List/List';
// Styles
import './App.css';

function App() {
  const API_URL = "https://example-apis.vercel.app/api/weather";
  const [isGoodWeather, setIsGoodWeather] = useState(false);
  const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []});
  const { data, loading } = useFetch(API_URL);

  useEffect(() => {
    if(data){
      setIsGoodWeather(data?.isGoodWeather);
    }
  }, [data])
  

  function handleAddActivity(formData) {
    console.log(isGoodWeather)
    setActivities([formData, ...activities]);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <main className='main-container'>
          <Form onAddActivity={handleAddActivity} />
          <List activities={activities} isGoodWeather={isGoodWeather}/>

        </main>
      )}
    </>
  );
}

export default App;
