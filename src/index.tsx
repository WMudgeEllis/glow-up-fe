import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import reportWebVitals from "./reportWebVitals"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { ContextProvider } from "./utils/context"
import { BrowserRouter as Router } from "react-router-dom"

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
