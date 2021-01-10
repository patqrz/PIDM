import {Text, View, Button}  from 'react-native'
import React, {Component} from 'react';



export class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            cidades: [
                {cidade: "Fortaleza", qtd_votos:0},
                {cidade: "Quixadá", qtd_votos:0},
                {cidade: "Juazeiro", qtd_votos:0},
                {cidade: "Limoeiro", qtd_votos:0}

            ],
            menos_votadas: [],
            mais_votadas: []
        }
        
    }
    somar(index){

        console.log(index)
        let new_array = [...this.state.cidades];
        new_array[index].qtd_votos = this.state.cidades[index].qtd_votos + 1;
        
        
        let max = new_array[0].qtd_votos
        let maiores = []
        for(let i = 0; i < this.state.cidades.length;  i ++){
            if(new_array[i].qtd_votos >= max  ){
               maiores.push(new_array[i].cidade)
               maiores.push(" ")
            
            }
            

            
        }

        let min = new_array[0].qtd_votos
        let menores = []
        for(let i = 0; i < this.state.cidades.length;  i ++){
            if(new_array[i].qtd_votos < min &&   !maiores.includes(new_array[i].cidade)){
               menores.push(new_array[i].cidade)
               menores.push(" ")
            }
            
        }
 
        this.setState({
            cidades: new_array,
            menos_votadas: menores,
            mais_votadas: maiores
        })




    } 

    render(){
        let cidades = [];
       
        let mais_votadas = [];
        let botoes = [];
        let data_menos = [];
        
        this.state.cidades.map((pesquisa, index) => {
            cidades.push(<Text key={index}>{pesquisa.cidade}:  {pesquisa.qtd_votos} votos</Text>)
        
        botoes.push(<Button key={index}  title={pesquisa.cidade} onPress={()=>{this.somar(index)}}></Button>)
        
        })
      
        console.log(this.state.menos_votadas)
      
       

        return(
            <View>{cidades}
                    <Text>Menos votadas:  {this.state.menos_votadas}</Text>
                    <Text>Mais votadas:  {this.state.mais_votadas}</Text>
                      
                    {botoes}
            </View>
           
        )
    }        
}
export default Index