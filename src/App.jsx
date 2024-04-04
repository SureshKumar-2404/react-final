import './App.css'

function App() {

  return (
    <>
      <h1>{import.meta.env.VITE_APPWRITE_URL}</h1>
      <h1>{import.meta.env.VITE_APPWRITE_PROJECT_ID}</h1>
      <h1>{import.meta.env.VITE_APPWRITE_DATABASE_ID}</h1>
      <h1>{import.meta.env.VITE_APPWRITE_COLLECTION_ID}</h1>
      <h1>{import.meta.env.VITE_APPWRITE_BUCKET_ID}</h1>
      <h1>Hello From Context Api</h1>
    </>
  )
}

export default App
