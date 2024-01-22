import { useState } from "react";
import useFetch from "./hooks/UseFetch";
//Components
import Form from "./components/Form/Form";

function App() {
  const API_URL = "https://example-apis.vercel.app/api/weather";

  const [activities, setActivities] = useState([]);

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
          {
            activities.map((activity, i) => (
              <div key={i}>
                <h3>{activity.activityName}</h3>
                <h4>{activity.isForGoodWeather}</h4>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default App;
