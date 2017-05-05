import React, { Component } from 'react'
import { Text } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { Icon } from 'native-base'
import Firefighter from './scenes/Firefighter'
import Police from './scenes/Police'
import Health from './scenes/Health'
import Transportation from './scenes/Transportation'
import Ambulance from './scenes/Ambulance'

class TabIcon extends Component {
  render(){
    const title = this.props.title
    let icon = ''

    if(title === "POS Pemadam"){
      icon = "flame"
    }else if(title === "POS Polisi Daerah"){
      icon = "people"
    }else if(title === "Dinas Kesehatan"){
      icon = "medkit"
    }else if(title === "Dinas Perhubungan"){
      icon = "shuffle"
    }else if(title === "Ambulan"){
      icon = "car"
    }
    return (
      <Icon name={ icon } style={{ color: this.props.selected ? '#FF3B30' : '#8E8E93' }} />
    )
  }
}

class Main extends Component {
  componentWillMount(){
    this.scenes = Actions.create(
      <Scene key="root" tabs={ true }>
        <Scene key="tabbar" tabs={ true } tabBarStyle={{ backgroundColor: '#f7f7f7' }}>
          <Scene key="Firefighter" icon={ TabIcon } component={ Firefighter } title="POS Pemadam" hideNavBar={ true } />
          <Scene key="Police" icon={ TabIcon } component={ Police } title="POS Polisi Daerah" hideNavBar={ true } />
          <Scene key="Health" icon={ TabIcon } component={ Health } title="Dinas Kesehatan" hideNavBar={ true } />
          <Scene key="Transportation" icon={ TabIcon } component={ Transportation } title="Dinas Perhubungan" hideNavBar={ true } />
          <Scene key="Ambulance" icon={ TabIcon } component={ Ambulance } title="Ambulan" hideNavBar={ true } />
        </Scene>
      </Scene>
    )
  }
  render() {
    return <Router scenes={ this.scenes } />
  }
}

export default Main