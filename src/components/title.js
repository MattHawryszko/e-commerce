import React, { Component } from 'react';
export default class App extends Component {
handleEvent = event => {
  const props = this.props;

    props.history.push(props.url)
};
componentWillMount(){

}
componentDidMount(){

}
render() {
    const isURL = this.props.url;
    let url;

    if(isURL){
      url = (
        <div className="row pt-3 justify-content-center pb-5">
        <li id="contact" onClick={this.handleEvent} class="btn btn--sm btn-orange text-white text-uppercase" role="button">{this.props.btnText}</li>
      </div>
      );
    }
    return (
      <div className={"container-fluid "+this.props.bg}>
        
          <div className="row justify-content-center">
            <div className="col-6">
              <h1 className={"pt-5 text-center font-weight-bold "+this.props.class}>{this.props.text}</h1>
            </div>
          </div>
          <div className="row pt-3 justify-content-center">
            <div className={this.props.dash}></div>
          </div>

          {url}

      </div>

      );
  }
};

