import React from 'react'

class Busca extends React.Component{
    constructor(props){
        super(props)
        this.atualizaBusca = this.atualizaBusca.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    atualizaBusca(evento){
        this.props.atualizaBusca(evento)
    }

    onSubmit(evento){
        this.props.onSubmit(evento)
        evento.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="input-field col s6">
                    <input
                        placeholder="Digite sua busca"
                        type="text"
                        value={this.props.busca}
                        onChange={this.atualizaBusca}
                    />
                    <label>Busca</label>
                </div>
            </form>
        )
    }
}

export default Busca