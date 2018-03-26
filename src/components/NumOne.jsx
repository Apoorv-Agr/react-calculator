const React = require('react');
const createReactClass = require('create-react-class');

var NumOne = createReactClass({
  getInitialState : function(){
    return {
      value : ''
    }
  },
  getNumOne : function(e){
    var val = e.target.value;
    this.setState({value:e.target.value});
  },
  clear : function(){
    this.setState({value:''});
  },
  render : function(){
    const imptWidth = {
      width : '95%'
    };
    return(
      <div className="form-group">
        <input type = "text" className="form-control" placeholder="NUMBER e.g 1234" onChange={this.getNumOne} value ={this.state.value} style={imptWidth}/>
      </div>
    );
  }
});

module.exports = NumOne;
