import React from 'react'
import { View } from 'react-native'
// import { Toolbar, ToolbarContent } from 'react-native-paper'
import {
  Card,
  CardContent,
  Title,
  Paragraph,
} from 'react-native-paper'

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

export default Home
