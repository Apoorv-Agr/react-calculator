var React = require('react');
var createReactClass = require('create-react-class');
var NumOne = require('./NumOne.jsx');
var NumTwo = require('./NumTwo.jsx');
var calculatorForm = createReactClass({
  getInitialState : function(){
    return{
      finalRes : ''
    }
  },
  getAdd : function(e){
    if( this.refs.numOneRef.state.value == "" || this.refs.numTwoRef.state.value == "" ){
      alert('Enter Values');
    }else{
      if( isNaN(parseFloat(this.refs.numOneRef.state.value)) || isNaN(parseFloat(this.refs.numTwoRef.state.value))){
          this.refs.numOneRef.clear();
          this.refs.numTwoRef.clear();
          alert('Please Enter Numnbers');
      }else{
        var sum = parseInt(this.refs.numOneRef.state.value) + parseInt(this.refs.numTwoRef.state.value);
        console.log('the Sum is: ', sum);
        this.setState({finalRes:sum});
      }
    }
  },
  getSubs : function(e){
    if( this.refs.numOneRef.state.value == "" || this.refs.numTwoRef.state.value == "" ){
      alert('Enter Values');
    }else{
      if( isNaN(parseFloat(this.refs.numOneRef.state.value)) || isNaN(parseFloat(this.refs.numTwoRef.state.value))){
          this.refs.numOneRef.clear();
          this.refs.numTwoRef.clear();
          alert('Please Enter Numnbers');
      }else{
        var sum = parseInt(this.refs.numOneRef.state.value) - parseInt(this.refs.numTwoRef.state.value);
        console.log('the Subs is: ', sum);
        this.setState({finalRes:sum});
      }
    }
  },
  getMult : function(e){
    if( this.refs.numOneRef.state.value == "" || this.refs.numTwoRef.state.value == "" ){
      alert('Enter Values');
    }else{
      if( isNaN(parseFloat(this.refs.numOneRef.state.value)) || isNaN(parseFloat(this.refs.numTwoRef.state.value))){
          this.refs.numOneRef.clear();
          this.refs.numTwoRef.clear();
          alert('Please Enter Numnbers');
      }else{
        var sum = parseInt(this.refs.numOneRef.state.value) * parseInt(this.refs.numTwoRef.state.value);
        console.log('the Mul is: ', sum);
        this.setState({finalRes:sum});
      }
    }
  },
  getDev : function(e){
    if( this.refs.numOneRef.state.value == "" || this.refs.numTwoRef.state.value == "" ){
      alert('Enter Values');
    }else{
      if( isNaN(parseFloat(this.refs.numOneRef.state.value)) || isNaN(parseFloat(this.refs.numTwoRef.state.value))){
          this.refs.numOneRef.clear();
          this.refs.numTwoRef.clear();
          alert('Please Enter Numnbers');
      }else{
        var sum = parseInt(this.refs.numOneRef.state.value) / parseInt(this.refs.numTwoRef.state.value);
        console.log('the Dev is: ', sum);
        this.setState({finalRes:sum});
      }
    }
  },
  clearState : function(){
    this.setState({finalRes:''});
    this.refs.numOneRef.clear();
    this.refs.numTwoRef.clear();
  },
  render : function(){
    const headingStyle = {
      textAlign: 'center',
      fontSize: '26px',
      fontWeight: 'bolder'
    };
    const bckColor = {
      backgroundColor: '#bfbfbf'
    };
    const btnPadding = {
      paddingRight: '8px',
      paddingLeft: '8px'
    };
    const btnWidth = {
      width : '90%'
    };
      return(
        <div>
            <div className="panel panel-default" style={bckColor}>
              <h3 style={headingStyle}>Simple calculator</h3>
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <NumOne ref="numOneRef"/>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <NumTwo ref="numTwoRef"/>
                  </div>
                </div>
                <br />
                  <div className="row">
                    <div className="col-sm-3 col-lg-3">
                        <button className="btn btn-primary" onClick={this.getAdd} style={btnWidth}> + Add </button>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <button className="btn btn-primary" onClick={this.getDev} style={btnWidth}>/ Divide </button>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <button className="btn btn-primary" onClick={this.getSubs} style={btnWidth}>- Subtract </button>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <button className="btn btn-primary" onClick={this.getMult} style={btnWidth}>* Multiply </button>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className = "col-sm-9 col-lg-9">
                      <div className="form-group">
                        <input type = "text" className="form-control" placeholder="Result" disabled value ={this.state.finalRes} />
                      </div>
                    </div>
                    <div className = "col-sm-3 col-lg-3">
                      <button className="btn btn-danger" onClick={this.clearState} style={btnWidth}>Clear </button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      );
  }
});

module.exports = calculatorForm;
