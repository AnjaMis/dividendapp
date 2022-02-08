import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

var shareList = []
var companyNames = []
var dividendLastYear = []
var prices = []
var tyield = []

fetch(
  'https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/b916a9e3d40aef926bf7e3b9b4db308d7da1ca5d/shares.json',
)
  .then((response) => response.json())
  .then((data) => {
    shareList = data
    for (var i = 0; i < shareList.length; i++) {
      companyNames.push(shareList[i].share)
      prices.push(shareList[i].price)
      dividendLastYear.push(shareList[i].dividendHistory[0].dividend)
      tyield.push((prices[i] / dividendLastYear[i]).toFixed(2))
    }
    console.log(companyNames)
    console.log(prices)
    console.log(dividendLastYear)
    console.log(tyield)

    for (var i = 0; i < tyield.length; i++) {
      console.log(
        'For company ' +
          companyNames[i] +
          " previous year's dividend yield compared to current price is " +
          tyield[i],
      )
    }
  })
  .catch((err) => console.error(err))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
