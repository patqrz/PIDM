import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { estilo } from '../Style/style'
import Card from './Card'
import CardItem from './CardItem'

export class AlbumDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            musicas:[]
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums/'+this.props.id+'/tracks.json')
        .then((response) => response.json())
        .then((responseJson) =>(
            this.setState({
                musicas: responseJson.tracks,
            })
        ))
    }


    render() {

        let lista = []
        this.state.musicas.map((item, index) => {
        lista.push(<Text key={index}>{item.title}</Text>)
    })

        return (
            <View>
                <Card>
                    <CardItem>
                        <Text style={estilo.title}>
                            {this.props.title}
                        </Text>

                        <Text>
                            {this.props.artista}
                        </Text>
                    </CardItem><br />
                
                    <CardItem>
                        <Image source={"https://raw.githubusercontent.com/san650/ten/master/apps/music"+this.props.imagem} style={estilo.imagem}></Image>
                    </CardItem><br />

                    <CardItem>
                        <View style={estilo.buttonsecundario}><Button color="#74C129" title="Ver músicas" onPress={()=>{this.props.navigation.navigate("Modal", {album: this.props.title, lista: lista})}}></Button></View>
                        <View style={estilo.buttonsecundario}><Button color="#EE594A" title="Comprar"></Button></View>

                    </CardItem>
                </Card>
            </View>
        )
    }
}

export default AlbumDetail
