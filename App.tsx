import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './src/screens/HomeScreen'
import useCachedResources from './src/hooks/useCachedResources'

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <HomeScreen />
        <StatusBar translucent backgroundColor="transparent" />
      </SafeAreaProvider>
    )
  }
}
