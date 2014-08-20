var utils = require('./lib/utils');

var easterDay = utils.easterDay;
var offsetDays = utils.offsetDays;
var nextWeekday = utils.nextWeekday;

module.exports = function(year) {
    var easter = easterDay(year);
    var easterOffset = function(days) { return offsetDays(easter, days); };

    return [
        new Date(year, 0, 1),                   //nyårsdagen
        new Date(year, 0, 6),                   //trettonddag jul
        new Date(year, 4, 1),                   //1 maj
        new Date(year, 5, 6),                   //Nationaldagen
        new Date(year, 11, 24),                 //Julafton
        new Date(year, 11, 25),                 //Juldagen
        new Date(year, 11, 26),                 //Annandag Jul
        new Date(year, 11, 31),                 //Nyårsafton
        nextWeekday(new Date(year, 5, 20), 6),  //Midsommardagen
        nextWeekday(new Date(year, 9, 31), 6),  //Alla helgons dag
        easterOffset(-2),                       //Långfredag
        easterOffset(1),                        //Annandag påsk
        easterOffset(39),                       //Kristi himmelsfärds dag
    ];
};
