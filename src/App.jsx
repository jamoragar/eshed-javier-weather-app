import useFetch from "./hooks/UseFetch";
//Components
import Form from "./components/Form/Form";

function App() {
  const API_URL = "https://example-apis.vercel.app/api/weather";

  const { data, loading } = useFetch(API_URL);

  function submitForm(formData) {
    console.log(formData);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <Form onAddActivity={submitForm} />
        </div>
      )}
    </>
  );
}

export default App;
