import React from 'react'

class Cartao extends React.Component {
    render() {
        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://materializecss.com/images/office.jpg" />
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Titulo<i className="material-icons right">more_vert</i></span>
                <p>Descricao</p>
                </div>
                <div className="card-action">
                    <a href="#">Ver mais ...</a>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Detalhe com um texto</p>
                </div>
            </div>
        );
    }
}

export default Cartao