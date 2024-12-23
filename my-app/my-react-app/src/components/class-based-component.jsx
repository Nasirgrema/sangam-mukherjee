import { Component } from 'react';


class ClassBasedComponent extends Component {
    //state
    state = {
        showText: false,
    };
  handleClick = () => {
  console.log('Button clicked');
   //this is not recommended
  //   this.state.showText = !this.state.showText;
  this.setState({
      showText: !this.state.showText,
  });
  };

    render(){
        console.log(this.state);
        return( 
        <div>
            {
                this.state.showText ?
                <h4>Class Based Component</h4> : null
            }
            <button onClick={this.handleClick}>Toggle Text</button>
        </div>
    );
}
}
export default ClassBasedComponent;