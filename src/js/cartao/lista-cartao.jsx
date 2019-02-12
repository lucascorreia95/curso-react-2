import React from 'react'
import Cartao from './cartao'
import Busca from '../busca/busca'

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
        this.setState({
            dados:[
                {
                    titulo: 'Titulo 1',
                    descricao: 'Descicao 1',
                    detalhe: 'Detalhe 1',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link1'
                },
                {
                    titulo: 'Titulo 2',
                    descricao: 'Descicao 2',
                    detalhe: 'Detalhe 2',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link2'
                },
                {
                    titulo: 'Titulo 3',
                    descricao: 'Descicao 3',
                    detalhe: 'Detalhe 3',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link3'
                },
                {
                    titulo: 'Titulo 4',
                    descricao: 'Descicao 4',
                    detalhe: 'Detalhe 4',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link4'
                },
                {
                    titulo: 'Titulo 5',
                    descricao: 'Descicao 5',
                    detalhe: 'Detalhe 5',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link5'
                },
                {
                    titulo: 'Titulo 6',
                    descricao: 'Descicao 6',
                    detalhe: 'Detalhe 6',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link6'
                },
                {
                    titulo: 'Titulo 7',
                    descricao: 'Descicao 7',
                    detalhe: 'Detalhe 7',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link7'
                },
                {
                    titulo: 'Titulo 8',
                    descricao: 'Descicao 8',
                    detalhe: 'Detalhe 8',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link8'
                },
                {
                    titulo: 'Titulo 9',
                    descricao: 'Descicao 9',
                    detalhe: 'Detalhe 9',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link9'
                },
            ],
            servidor:[
                {
                    titulo: 'Titulo 1',
                    descricao: 'Descicao 1',
                    detalhe: 'Detalhe 1',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link1'
                },
                {
                    titulo: 'Titulo 2',
                    descricao: 'Descicao 2',
                    detalhe: 'Detalhe 2',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link2'
                },
                {
                    titulo: 'Titulo 3',
                    descricao: 'Descicao 3',
                    detalhe: 'Detalhe 3',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link3'
                },
                {
                    titulo: 'Titulo 4',
                    descricao: 'Descicao 4',
                    detalhe: 'Detalhe 4',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link4'
                },
                {
                    titulo: 'Titulo 5',
                    descricao: 'Descicao 5',
                    detalhe: 'Detalhe 5',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link5'
                },
                {
                    titulo: 'Titulo 6',
                    descricao: 'Descicao 6',
                    detalhe: 'Detalhe 6',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link6'
                },
                {
                    titulo: 'Titulo 7',
                    descricao: 'Descicao 7',
                    detalhe: 'Detalhe 7',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link7'
                },
                {
                    titulo: 'Titulo 8',
                    descricao: 'Descicao 8',
                    detalhe: 'Detalhe 8',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link8'
                },
                {
                    titulo: 'Titulo 9',
                    descricao: 'Descicao 9',
                    detalhe: 'Detalhe 9',
                    imagem: 'https://materializecss.com/images/office.jpg',
                    link: '#link9'
                },
            ]
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