module.exports.dateToday = dateToday
function dateToday() {
    let today = new Date()
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options)
}

module.exports.dayToday = dayToday
function dayToday() {
    let today = new Date()
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options)
}