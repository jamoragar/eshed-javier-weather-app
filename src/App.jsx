import useLocalStorageState from 'use-local-storage-state'

import useFetch from "./hooks/UseFetch";
//Components
import Form from "./components/Form/Form";
import List from './components/List/List';

function App() {
  const API_URL = "https://example-apis.vercel.app/api/weather";
  const isGoodWeather = false;
  const [activities, setActivities] = useLocalStorageState("activities", {defaultValue: []});
  const { data, loading } = useFetch(API_URL);

  function handleAddActivity(formData) {
    setActivities([formData, ...activities]);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <Form onAddActivity={handleAddActivity} />
          <List activities={activities} isGoodWeather={isGoodWeather}/>
          {/* {
            activities.map((activity, i) => (
              <div key={i}>
                <h3>{activity.activityName}</h3>
                <h4>{activity.isForGoodWeather}</h4>
              </div>
            ))} */}
        </div>
      )}
    </>
  );
}

export default App;
