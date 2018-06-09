import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import Navigator from './config/routes'

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#37474f',
//     accent: '#cfd8dc',
//   },
//   roundness: 4,
// }

const App = () => (
  <PaperProvider>
    <Navigator />
  </PaperProvider>
)

export default App

//  "react-native": "~0.55.2",
