// const lib = require("")

const isLeapYear = (year) => {
    if (year === undefined) { throw new Error('year must exist') }
    if (typeof year !== 'number') { throw new Error('year must be number')} 
    if (year < 42) { throw new Error("year must be 42 or more") }
    if (!Number.isInteger(year)) { throw new Error('year must be integer') }

    const date = new Date(year, 2, 0)
    const days = date.getDate()
    console.log(days)
    return (days === 29)
}

module.exports = isLeapYear