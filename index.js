
function returnFirstTwoDrivers (drivers) {
    const newArray = [];
    newArray.push(drivers[0], drivers[1]);
    return newArray;
}

function returnLastTwoDrivers (drivers) {
    const newArray = [];
    newArray.push(drivers[2], drivers[3]);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare) {
    return function (multiplier) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers)
}