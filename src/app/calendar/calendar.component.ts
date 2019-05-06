import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  todayDate = new Date();

  mockData:any = [
    {date: new Date((new Date()).valueOf() - 1000*60*60*24*6), quantity: 1, eventType: 'Forklift rental per day', isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 6, firstTaskStart: new Date(2018, 0, 0, 1, 0, 0, 0), lastTaskEnd: new Date(2018, 0, 2, 20, 0, 0, 0)},
    {date: new Date((new Date()).valueOf() - 1000*60*60*24*5), quantity: 2, eventType: 'Forklift rental per hour', isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: false, isApproved: true, isRejected: false, tasksCount: 2, firstTaskStart: new Date(2018, 11, 24, 8, 33, 30, 0), lastTaskEnd: new Date(2018, 11, 24, 15, 13, 30, 0)},
    {date: new Date((new Date()).valueOf() - 1000*60*60*24*4), quantity: 3, eventType: 'Forklift rental per hour', isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: false, isRejected: false, tasksCount: 15, firstTaskStart: new Date(2018, 11, 24, 8, 17, 30, 0), lastTaskEnd: new Date(2018, 11, 24, 15, 33, 30, 0)},
    {date: new Date((new Date()).valueOf() - 1000*60*60*24*3), quantity: 4, eventType: 'Fine', isExpenseType: false, isHoursEventType: true, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 0, firstTaskStart: new Date(2018, 11, 24, 8, 33, 30, 0), lastTaskEnd: new Date(2018, 11, 24, 15, 33, 30, 0)},
    {date: new Date((new Date()).valueOf() - 1000*60*60*24*2), quantity: 5, eventType: 'Forklift rental per day', isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: false, isApproved: true, isRejected: false, tasksCount: 0, firstTaskStart: new Date(2018, 11, 24, 8, 33, 30, 0), lastTaskEnd: new Date(2018, 11, 24, 15, 33, 30, 0)},
    {date: new Date((new Date()).valueOf() - 1000*60*60*24), quantity: 6, eventType: 'Forklift rental per hour', isExpenseType: true, isHoursEventType: false, isAdditionalHoursEventType: false, isWorkHour: true, isApproved: true, isRejected: false, tasksCount: 7, firstTaskStart: new Date(2018, 11, 24, 8, 33, 30, 0), lastTaskEnd: new Date(2018, 11, 24, 15, 33, 30, 0)},
    {date: new Date(), quantity: 7, eventType: 'Fine', isExpenseType: false, isHoursEventType: false, isAdditionalHoursEventType: true, isWorkHour: false, isApproved: true, isRejected: false, tasksCount: 9, firstTaskStart: new Date(2018, 11, 24, 15, 33, 30, 0), lastTaskEnd: new Date(2018, 11, 24, 15, 33, 30, 0)},
  ];


  totalHours(i) {
      let totalHours = this.mockData[i].lastTaskEnd.valueOf() - this.mockData[i].firstTaskStart.valueOf();

    let hrs = Math.floor((totalHours % 86400000) / 3600000);
    let mins = Math.round(((totalHours % 86400000) % 3600000) / 60000);

  if(totalHours==0){
      return "-";
    }else if (mins>10){
      return hrs + ":" + mins
      }else if(mins<10){
      return hrs + ":0" + mins
      }
  }

  taskBulb(i) {
    if (this.mockData[i].isApproved){
      return {
        'background': 'green',
        'width': '5px',
        'height': '5px',
        'border-radius': '50%'
      }
    }
    // else if(this.mockData[i].isWorkHour){
    //
    // }else if(this.mockData[i].isWorkHour){
    //
    // }
    return {}
  }

  constructor() {
  }

  ngOnInit() {
  }

}
