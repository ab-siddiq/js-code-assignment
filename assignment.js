//question 1: kilometer to meter conversion
function kilometerToMeter(kilometer) {
    //check negative input
    if (kilometer < 0 || kilometer == -0) {
        return false;
    }
    //for positive number
    else {
        return kilometer * 1000;
    }
}
console.log(kilometerToMeter(10));
// kilometerToMeter(10);




//question 2: budget calculator
function budgetCalculaator(watch, mobile, laptop) {
    watchPrice = 50;
    mobilePrice = 100;
    laptopPrice = 500;
    //check negative value and -0 value
    if (watch < 0 || mobile < 0 || laptop < 0 || watch == -0 || mobile == -0 || laptop == -0) {
        return false;
    }
    //for correct input budget calculation
    else {
        return (watch * watchPrice) + (mobile * mobilePrice) + (laptop * laptopPrice);
    }
}
console.log(budgetCalculaator(1, 1, 1)); //with console.log
// budgetCalculaator(1, -0, 1); //without console.log



//question 3: hotel cost calculation
function hotelCost(days) {
    firstTenDaysRent = 100;
    afterTenDaysRent = 80;
    afterTwentyDaysRent = 50;

    if (days < 0) {
        return false;
    }
    else {
        //for 10 days cost
        if (days >= 0 && days <= 10) {
            return firstTenDaysRent * days;
        }
        //for 20 days cost
        else if (days > 10 && days <= 20) {
            //Math.abs() for negative to positive conversion
            return firstTenDaysRent * 10 + Math.abs(afterTenDaysRent * (days - 10));
        }
        //for more than 20 days cost
        else {
            //Math.abs() for negative to positive conversion
            return firstTenDaysRent * 10 + afterTenDaysRent * 10 + Math.abs(afterTwentyDaysRent * (days - 20));
        }
    }
}
console.log(hotelCost(43)); //with console.log
// hotelCost(43);  //without console.og



//question 4: find max length depending on first word in case of same length string
function megaFriend(names) {
    var size = 0;
    var max;
    for (var i = 0; i < names.length; i++) {

        if (names[i].length > size) {
            size = names[i].length;
            max = names[i];
        }
    } return max;
}
var names = ['abul kabul', 'kabul abul', 'babull', 'sabillll'];
console.log(megaFriend(names)); //with console.log
// megaFriend(names); //without console.log