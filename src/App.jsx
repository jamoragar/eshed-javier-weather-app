import useFetch from './hooks/UseFetch';

function App() {

  const API_URL = 'https://example-apis.vercel.app/api/weather/sahara';

  const {data, loading} = useFetch(API_URL);

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </>
  )
}

export default App
