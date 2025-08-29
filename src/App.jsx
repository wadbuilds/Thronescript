import './App.css'
import { Analytics } from "@vercel/analytics/react"
import Quote from "./Quote"


function App() {

  return (
    <>
      <div>
       <Quote></Quote>
        <Analytics />
      </div>
    </>
  )
}

export default App
