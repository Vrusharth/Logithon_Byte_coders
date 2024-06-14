import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

export default function Demandprediction() {
  return (
    <View style={{ flex:1,width: '100%', marginTop: 10, height: 600 }}>
    <WebView
      originWhitelist={['*']}
      source={{
        html: `
        <div style="left: 0; width: 100%; height:100%; position: relative;"><iframe src="https://demandprediction-ldfbxyju2wf9sqp27unhtb.streamlit.app/?embed=true" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div>
      `,
      }}
      style={{ flex: 1 }}
      onError={(error) => console.error('WebView error:', error)}
    />
  </View>
  )
}

const styles = StyleSheet.create({})