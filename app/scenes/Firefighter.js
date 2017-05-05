import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import { Header, Body, Title, Container, StyleProvider, ListItem, Content } from 'native-base'
import getTheme from '../../native-base-theme/components'

class Firefighter extends Component {
  constructor(){
    super()

    this.state = {
      data: [],
      statictoken: 'YOUR_TOKEN'
    }
  }

  componentWillMount(){
    fetch('http://api.jakarta.go.id/v1/emergency/pospemadam/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.state.statictoken
      }
    }).then((response) => response.json()).then((data) => {
      this.setState({data: data.data})
    })
  }

  renderHeader(){
    const { title } = this.props
    return (
      <Header noShadow={ true }>
        <Body>
          <Title>{ title }</Title>
        </Body>
      </Header>
    )
  }

  _keyExtractor = (item, index) => item.NO

  render() {
    return (
      <Container>
        <StyleProvider style={getTheme()}>
          { this.renderHeader() }
        </StyleProvider>
        <Content style={{ marginBottom: 35 }}>
          <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => 
              <ListItem>
                <Body>
                  <Text style={{ color: '#2B2B2B', fontWeight: 'bold' }}>{item.POS_PEMADAM}</Text>
                  <Text>{item.ALAMAT}</Text>
                  <Text>RT / RW : {item.RT_RW}</Text>
                </Body>
              </ListItem>
            }
          />
        </Content>
      </Container>
    )
  }
}

export default Firefighter