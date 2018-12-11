import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gambar:'',
      gambar1:'',
    }
  }
  generate(){
    var gambar1 = this.refs.img.value;
    var random = Math.floor(Math.random() * 4) + 1;
    var url = `https://robohash.org/${gambar1}?set=set${random}`;

    this.setState({gambar:url})
  }
  render() {
    return (
    <center>
      <div className="container">
        <div className="form-group">
          <br/><br/>
          <input style={{maxWidth:"500px"}} ref='img' className="form-control rounded mr-auto ml-auto" type="text" placeholder="Ketik nama Anda..."/>
          <br/><br/>
          <button onClick={()=>{this.generate()}} className="btn btn-success">Buat Profile Picture!</button>
        </div>
        <div><img className="rounded-circle" src={this.state.gambar} gambar1={this.img}/></div>
      </div>
    </center>
    );
  }
}

export default App;
