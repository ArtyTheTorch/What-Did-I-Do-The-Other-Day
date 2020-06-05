import React, {Component} from 'react';
import moment from 'moment';

class WeekView extends Component{
    constructor(props){
        super(props)
        this.state = {
            weekArray: []
        }
    }

    componentDidMount() {
        let weekNumber = moment().week()
        let mondaysDate = moment().day("Monday").week(weekNumber)
        let weekArray = []

        for(let i = 0; i < 5; i++) {
            console.log(mondaysDate.add('days', i).format('MM/DD/YYYY'))
            weekArray.push(
                <div key={i}>{mondaysDate.add('days', i).format('MM/DD/YYYY')}</div> 
            )    
        }
        this.setState({
            weekArray
        }) 
        console.log(weekArray)
    }

    render(){
    return <div>
        {this.state.weekArray.map(day => {
            return day;
        }) }
        </div>  
    }
}

export default WeekView