import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../Style/style'
import AlbumDetail from './AlbumDetail'
import Header from './Header'

export class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            albuns: [],
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
        .then((response)=>response.json())
        .then((responseJson)=>{this.setState({
            albuns: responseJson.albums
        })
    })
    }

    render() {

        let cards = [];
        this.state.albuns.map((item, index) => {
            cards.push(<AlbumDetail key={index} title={item.name} artista={item.artist} imagem={item.image} id={item.id} navigation={this.props.navigation}></AlbumDetail>)
        })

        return (
            <View style={estilo.titleprincipal}>
                <Header title="Álbuns"></Header><br />

                <Text style={estilo.titleprincipal}>
                    Lista de álbuns 
                </Text><br />
                
                <View style={estilo.container}>{cards}</View>
            </View>
        )
    }
}

export default AlbumList
