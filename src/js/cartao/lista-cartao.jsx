import React from 'react'
import Cartao from './cartao'
import Busca from '../busca/busca'
import axios from 'axios'

class ListaCartao extends React.Component {
    constructor(props){
        super(props)
        this.state = { clicks: 0, busca: '', dados: [], servidor: []}
        this.addClick = this.addClick.bind(this)
        this.atualizaBusca = this.atualizaBusca.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    addClick(){
        // this.setState({clicks: this.state.clicks + 1})
        this.setState( prevState => ({
            clicks: prevState.clicks + 1
        }))
    }

    atualizaBusca(evento){
        this.setState({busca: evento.target.value})
        if(evento.target.value == ""){
            this.setState({dados: this.state.servidor})
        }
    }

    onSubmit(evento){
        let busca = this.state.busca
        let dados = this.state.servidor

        let novaLista = dados.filter( item => {
            if(item.titulo.toUpperCase().indexOf(busca.toLocaleUpperCase())> -1
            || item.descricao.toUpperCase().indexOf(busca.toLocaleUpperCase())> -1
            || item.detalhe.toUpperCase().indexOf(busca.toLocaleUpperCase())> -1
            ){
                return item
            }
        })
        this.setState({dados:novaLista})
    }

    componentDidMount(){
        let self = this
        axios.get('http://localhost:8000/servidor.php?dados=1').then( response => {
            self.setState({
                dados: response.data,
                servidor: response.data
            })
        })
    }

    render() {
        let noticias = this.state.dados;
        let aux = [];
        let novaLista = [];

        for(let k = 0; k < noticias.length; k++){
            aux.push(noticias[k]);
            if(aux.length == this.props.qtdLinha){
                novaLista.push(aux);
                aux = [];
            } else if(k == noticias.length - 1){
                novaLista.push(aux);
            }
        }

        let tamanhoCol = `col m${this.props.tamanhoCol}`

        let listaCartoes = (grupo, self) => {
            return grupo.map( (item, index) => {
                return(
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} addClick={self.addClick} />
                    </div>
                )
            })
        }

        let self = this;

        let linha = novaLista.map((grupo, index) => {
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo, self)}
                </div>
            );
        })

        return (
            <div>
                <div className="row">
                    <Busca
                        atualizaBusca={this.atualizaBusca}
                        busca={this.state.busca}
                        onSubmit={this.onSubmit}
                    />
                </div>
                <p>Quantidade de clicks: {this.state.clicks}</p>
                {linha}
            </div>
        );
    }
}

export default ListaCartao