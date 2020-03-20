import React from 'react';
class Listday extends React.Component{
state={
    Day1:"Monday",
    Day2:"Tuesday",
    Day3:"Wednesday",
    Day4:"Thursday",
    Day5:"Friday",
    Day6:"Saturday",
    Day7:"Sunday"
}
render(){
    return(
<div>
    <ul className="listDay">
        <li>Day 1: {this.state.Day1}</li>
        <li>Day 2: {this.state.Day2}</li>
        <li>Day 3: {this.state.Day3}</li>
        <li>Day 4: {this.state.Day4}</li>
        <li>Day 5: {this.state.Day5}</li>
        <li>Day 6: {this.state.Day6}</li>
        <li>Day 7: {this.state.Day7}</li>
    </ul>
</div>
    );
}
}
export default Listday;