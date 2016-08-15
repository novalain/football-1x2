Date.prototype.getWeekNumber = function(){
    const date = new Date(+this);
    date.setHours(0,0,0);
    date.setDate(date.getDate()+4-(date.getDay()||7));
    return Math.ceil((((date-new Date(date.getFullYear(),0,1))/8.64e7)+1)/7);
};