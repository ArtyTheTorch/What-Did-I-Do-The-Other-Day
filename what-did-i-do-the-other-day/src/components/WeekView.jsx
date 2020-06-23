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
            let thisday = moment(mondaysDate).add(i, 'days').format('MM/DD/YYYY')
            weekArray.push(
                <div id={thisday} className = 'date-box' key={i}>{thisday}</div> 
            )    
        }
        this.setState({
            weekArray
        }) 
        console.log(weekArray)
    }

    render(){
    return <div className='date-week-view'>
        {this.state.weekArray.map(day => {
            return day;
        }) }
        </div>  
    }
}

export default WeekView