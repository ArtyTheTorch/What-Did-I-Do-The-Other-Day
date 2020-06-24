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
        this.getWeekView()
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedDate !== prevProps.selectedDate || this.props.notesList.length !== prevProps.notesList.length) {
            this.getWeekView()
        }
    }

    getWeekView = () => {
        let weekNumber = moment().week()
        let mondaysDate = moment().day("Monday").week(weekNumber)
        let weekArray = []

        for(let i = 0; i < 5; i++) {
            let thisday = moment(mondaysDate).add(i, 'days').format('MM/DD/YYYY')
            const todaysNotes = this.props.notesList.filter(note => {
                return thisday === note.day})
            weekArray.push(
                <div 
                    id={thisday} 
                    className = {`date-box ${this.props.selectedDate === thisday ? 'today-date' : ''}`} 
                    key={i} 
                    onClick = {() => this.props.handleSelectDate(thisday)}>
                        {thisday}
                        {todaysNotes.map(note => <div key={note.title+note.day}>{note.contents}</div>)}
                </div> 
            )    
        }
        this.setState({ weekArray })
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