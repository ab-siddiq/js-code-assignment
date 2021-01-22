//github link:  https://github.com/ab-siddiq/js-code-assignment

//question 1: kilometer to meter conversion
function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer < 0 || kilometer == -0) {
        return "you can not give negative value !";
    }

    else {
        meter = kilometer * 1000;
        return meter
    }
}
console.log(kilometerToMeter(10));





//question 2: budget calculator
function budgetCalculaator(watch, mobile, laptop) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    var totalPrice = 0;

    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "you can not give negative value !";
    }

    else {
        totalPrice = (watch * watchPrice) + (mobile * mobilePrice) + (laptop * laptopPrice);
        return totalPrice;
    }
}
console.log(budgetCalculaator(0, 1, 0));




//question 3: hotel cost calculation
function hotelCost(days) {
    var firstTenDaysRent = 100;
    var afterTenDaysRent = 80;
    var afterTwentyDaysRent = 50;
    var totalCost = 0;

    if (days < 0) {
        return "days can not be a negative value !";
    }
    else {

        if (days >= 0 && days <= 10) {
            totalCost = firstTenDaysRent * days;
            return totalCost;
        }

        else if (days > 10 && days <= 20) {
            totalCost = firstTenDaysRent * 10 + Math.abs(afterTenDaysRent * (days - 10));
            return totalCost;
        }

        else {
            totalCost = firstTenDaysRent * 10 + afterTenDaysRent * 10 + Math.abs(afterTwentyDaysRent * (days - 20));
            return totalCost;
        }
    }
}
console.log(hotelCost(43));



//question 4: find max length depending on first word in case of same length string
function megaFriend(names) {
    var nameSize = 0;
    var maxSizeName;
    if (names.length == 0 || names == '' && names.length != 0) {
        return "empty array !";
    }
    else {
        for (var i = 0; i < names.length; i++) {

            if (names[i].length > nameSize) {
                nameSize = names[i].length;
                maxSizeName = names[i];
            }
        } return maxSizeName;
    }
}
var names = ['abul kabul', 'kabul abul', 'babull', 'sabillll'];
// var names = ['   ',''];

console.log(megaFriend(names)); 