import React from 'react'
import Cartao from './cartao'

class ListaCartao extends React.Component {
    render() {

        let noticias =[
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
            
        ];

        let aux = [];
        let novaLista = [];

        for(let k = 0; k < noticias.length; k++){
            aux.push(noticias[k]);
            if(aux.length == 4){
                novaLista.push(aux);
                aux = [];
            } else if(k == noticias.length - 1){
                novaLista.push(aux);
            }
        }

        let listaCartoes = grupo => {
            return grupo.map( (item, index) => {
                return(
                    <div key={index} className="col m3">
                        <Cartao />
                    </div>
                )
            })
        }

        let linha = novaLista.map((grupo, index) => {
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo)}
                </div>
            );
        })

        return (
            <div>
                {linha}
            </div>
        );
    }
}

export default ListaCartao