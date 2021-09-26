import React from 'react'
import { AppRegistry, asset, Pano, Text, View } from 'react-vr'

export default class TestProjectVr extends React.Component {
  render() {
    return (
      <View>
        <Pano
          source={{
            uri: [
              '../static_assets/sahara_lf.jpg',
              '../static_assets/sahara_rt.jpg',
              '../static_assets/sahara_up.jpg',
              '../static_assets/sahara_dn.jpg',
              '../static_assets/sahara_bk.jpg',
              '../static_assets/sahara_ft.jpg',
            ],
          }}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('TestProjectVr', () => TestProjectVr)
