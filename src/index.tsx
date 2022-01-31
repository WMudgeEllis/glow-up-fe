import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { ContextProvider } from "./utils/context"
import { BrowserRouter } from "react-router-dom"

const client = new ApolloClient({
  uri: "https://glow-up-api.herokuapp.com/graphql",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
