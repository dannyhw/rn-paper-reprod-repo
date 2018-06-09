import React from 'react'
import { Provider as PaperProvider, Card, CardContent, Title, Paragraph } from 'react-native-paper'
import { View } from 'react-native'

const Home = () => (
  <View>
    <Card>
      <CardContent>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </CardContent>
    </Card>
  </View>
)

const App = () => (
  <PaperProvider>
    <Home />
  </PaperProvider>
)

export default App
