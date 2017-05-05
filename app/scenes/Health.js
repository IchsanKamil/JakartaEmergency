import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Header, Body, Title, StyleProvider, Container, Content, ListItem } from 'native-base'
import getTheme from '../../native-base-theme/components'

class Health extends Component {
  constructor(){
    super()

    this.state = {
      data: [],
      statictoken: 'YOUR_TOKEN'
    }
  }

  componentWillMount(){
    fetch('http://api.jakarta.go.id/v1/emergency/petugasdinkes/', {
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

  _keyExtractor = (item, index) => item.userid

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
                  <Text style={{ color: '#2B2B2B', fontWeight: 'bold' }}>{item.nama}</Text>
                  <Text>Wilayah : {item.wilayah}</Text>
                  <Text>Alamat : {item.alamat}</Text>
                  <Text>Telepon : {item.phone}</Text>
                  <Text>Jabatan : {item.jabatan}</Text>
                </Body>
              </ListItem>
            }
          />
        </Content>
      </Container>
    )
  }
}

export default Health