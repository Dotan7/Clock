// // ----- GAME ----- //
const board = document.getElementById("board")
const dateLineText = document.getElementById("dateLineText")
const digClockLineText = document.getElementById("digClockLineText")
const secondsPointer = document.getElementById("secondsPointer")
const minutesPointer = document.getElementById("minutesPointer")
const hoursPointer = document.getElementById("hoursPointer")

// getDDMMYYYYformat returns the current Date in a DDMMYYYY format:
const getDDMMYYYYformat = () => {
  let date = new Date()
  // console.log(date)

  let yyyy = date.getFullYear().toString()
  let MM = date.getMonth() + 1 // Months start at 0!
  let DD = date.getDate()

  if (DD < 10) DD = "0" + DD
  if (MM < 10) MM = "0" + MM

  //   console.log("yyyy: ", yyyy)
  //   console.log("MM: ", MM)
  //   console.log("DD: ", DD)

  const DDMMYYYY = DD + "/" + MM + "/" + yyyy
  // console.log("DDMMYYYY: ", DDMMYYYY)

  return DDMMYYYY
}
dateLineText.innerText = getDDMMYYYYformat()

const getTime = () => {
  let date = new Date()
  let newDate = date.toString()
  let newNewDate = newDate.split(" ")
  let time = newNewDate[4]
  // console.log(time)
  return time
}

const timeUpdate = () => {
  const timeInterval = setTimeout(() => {
    // get time
    let time = getTime()
    digClockLineText.innerText = time

    // get time parts
    let seconds = time.split(":")[2]
    let minutes = time.split(":")[1]
    let hours = time.split(":")[0]
    if (hours > 12) hours = hours - 12
    console.log(hours, minutes, seconds)

    // different 0-30
    let defForHours = minutes / 2

    // set pointers
    secondsPointer.style.rotate = `${seconds * 6}deg`
    minutesPointer.style.rotate = `${minutes * 6}deg`
    hoursPointer.style.rotate = `${hours * 30 + defForHours}deg`

    timeUpdate()
    clearTimeout(timeInterval)
  }, 1000)
}
timeUpdate()
console.log("aaa")

// /////////////////////
