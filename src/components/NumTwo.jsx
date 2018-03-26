const React = require('react');
const createReactClass = require('create-react-class');

var NumTwo = createReactClass({
  getInitialState : function(){
    return {
      value : ''
    }
  },
  getNumTwo : function(e){
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
        <input type = "text" className="form-control" placeholder="NUMBER e.g 4231" onChange={this.getNumTwo} value ={this.state.value} style={imptWidth} />
      </div>
    );
  }
});

module.exports = NumTwo;
