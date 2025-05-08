function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else
        return input.toUpperCase();
}
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
function concatenateArrays(...arrays) {
    const res = arrays.flat();
    return res;
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
function processValue(value) {
    if (typeof (value) == "string") {
        return value.length;
    }
    else
        return value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    let max = products[0];
    for (const product of products) {
        if (product.price > max.price) {
            max = product;
        }
    }
    return max;
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
async function squareAsync(n) {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(("Error: Negative number not allowed"));
        }
        else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
}
