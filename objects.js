const car = {
    color : 'black',
    type : 'minivan',
    registered : 'true',
    capacity : '7',
    displayInfo : function() {
        console.log(`The car is of color ${ car.color }, type: ${ car.type } and has capacity of ${ car.capacity } people`);
    }
}
car.displayInfo();