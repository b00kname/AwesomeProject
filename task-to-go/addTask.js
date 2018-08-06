import React, {Component} from 'react';
import {View, Text, TextInput, DatePickerAndroid, timePickerAndroid, StyleSheet} from 'react-native';

Date.prototype.formatted= function() {
    let day= this.getDay();
    let month= this.getMonth();
    let year= this.getFullYear();
    let date= this.getDate();
    let daysText= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let monthsText= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return '$(daysText[day]), $(monthText[month]), $(date), $(year)';
}
export default class addTask extends Component {
    constructor(props) {
        super(props)
        this.state= {
            task: '',
            date: new Date(),
            daysText: ''
        }
    }

    openDatePicker= async()=> {
        try {
            const {action, year, month, day}= await DatePickerAndroid.open({
                date: this.state.date,
                minDate: new Date(2015, 0, 1),
                maxDate: new Date(2099, 11, 31),
                mode: 'calendar'
            })
        }

        if (action !== DatePickerAndroid.dismissedAction) {
            let selectedDate= new Date(year, month, day);
0
.
3            this.setState({
                date: selectedDate,
                dateText: selectedDate.formatted()
            })
        }
    }

    render() {
        return(

        );
    }
}