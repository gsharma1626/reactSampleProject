import React from 'react';

class Clickevent extends React.Component{

    constructor(props){
        super(props);
        this.state={count:0};
    };
    incrementClick = () => {
        this.setState({count:this.state.count +1}) 
    };
    decrementhandleClick = () => {
        if(this.state.count < 1){
            this.setState({
                count:0
            }); 
          }
          else 
        {this.setState({count:this.state.count -1}) 
          }
    };
    // // getDrivedStateFromProbs
    // static getDerivedStateFromProps(props, state){
    //      return{count:props.number};
    //  }

    // //ComponentDidMout
    //   componentDidMount(){
    //       setTimeout(() =>{
    //           this.setState({count: 1})
    //       },5000)
    //   }
  //shouldComponentUpdate()

//   shouldComponentUpdate(){
//       return true;
//   }

    render(){
        return(
            <div>
<p>My Button: {this.state.count}</p>
<button onClick={this.incrementClick}>Plus</button>
<button onClick={this.decrementhandleClick}>Minus</button>

            </div>
        );
    }
}
export default Clickevent;