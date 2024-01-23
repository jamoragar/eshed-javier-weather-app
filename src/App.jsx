import useLocalStorageState from "use-local-storage-state";
import useFetch from "./hooks/UseFetch";
//Components
import Form from "./components/Form/Form";
import List from "./components/List/List";
// Styles
import "./App.css";

function App() {
  const API_URL = "https://example-apis.vercel.app/api/weather/";
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const { data, loading, error } = useFetch(API_URL);

  function handleAddActivity(formData) {
    setActivities([formData, ...activities]);
  }

  function handleDeleteActivity(activityName, index) {
    const newActivitiesList = activities.filter((activity, i) => {
      return ((i !== index));
    });
    setActivities(newActivitiesList)
  }


  
  if(error){
    return (
      <h1>Error!!!</h1>
    )
  }

  return (
    <>
      {(loading ) && <div>Loading...</div>}
      {data && (
        <main className={`main-container ${data.isGoodWeather ? 'good' : 'bad'}-weather-app`}>
          <Form onAddActivity={handleAddActivity} isGoodWeather={data.isGoodWeather}/>
          <List
            activities={activities}
            weatherData={data}
            onDeleteActivity={handleDeleteActivity}
          />
        </main>
      )
        
    }
    </>
  );
}

export default App;
