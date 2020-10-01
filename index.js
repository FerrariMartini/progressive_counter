let queuedDateTime = "Thu Oct 01 2020 07:45:00";
let serverDate = Date.parse(Date("Thu Oct 01 2020 07:45:46"));
let timeOffSet = Date.now() - serverDate;
console.log('>>>>>>>> timeOffSet', timeOffSet) 




function queuedDurationRealTime(queuedDateTime) {
  let dateNow = Date.now() - timeOffSet
  console.log(">>>>>>>> dateNow", dateNow);

  const nowDateParse = dateNow; 
  console.log(">>>>>>>> nowDateParse", nowDateParse);

  const oldDateParse = Date.parse(queuedDateTime); // date come Elastic
  console.log(">>>>>>>> oldDateParse", oldDateParse);

  const hourCalculate = 1000 * 60;
  console.log(">>>>>>>> hourCalculate", hourCalculate);

  const duration_value = (
    (nowDateParse - oldDateParse) /
    hourCalculate
  ).toFixed(2);

  console.log(">>>>>>>> duration_value", duration_value);
  return duration_value;
}

function formatTime(inputTime) {
  if (inputTime != null) {
    var date = new Date(1970, 0, 1);
    console.log(">>>>>>>> date", date);

    let setSeconds = date.setSeconds(inputTime * 60);
    console.log(">>>>>>>> setSeconds", setSeconds);

    let finalDate = date
      .toTimeString()
      .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

    return finalDate;
  } else {
    return "";
  }
}

setInterval(() => {
  let durationValue = queuedDurationRealTime(queuedDateTime);
  let finalTime = formatTime(durationValue);
  console.log(">>>>>>>>>>> FINAL TIME", finalTime);
}, 1000);

/* 
function formatDateTime() {
    const data = new Date(value);
    return (
      data.toLocaleDateString("pt-BR") +
      " " +
      data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  }
  */
