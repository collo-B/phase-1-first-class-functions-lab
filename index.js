// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function(){
return(drivers.slice(0,2))
}

const returnLastTwoDrivers=function(){
return(drivers.slice(-2))
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier=function(value){
 return function(quad){
     return(value*quad)
 }
}

const fareDoubler=function(fare){
return(fare*2)
}
const fareTripler=function(tripleFare){
        return(tripleFare*3)
}
const selectDifferentDrivers=function(drivers , returnDrivers){
return returnDrivers(drivers)
}