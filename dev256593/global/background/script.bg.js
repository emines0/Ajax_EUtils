// sn-scriptsync - Received from background script tab via SN Utils.

// var pickedDate = '23/12/2024';
// Get date you want to check in client script dd/MM/yyyy
// var inputDate = this.getParameter("sysparm_picked_date");
var inputDate = new GlideDateTime("2024/12/23");

// Get current date in client script dd/MM/yyyy
var currentDate = new GlideDateTime();
var tmpDate = currentDate.getLocalDate() + "00:00:00";
currentDate = tmpDate;

gs.print("Input Date: " + inputDate);
gs.print("Current Date: " + currentDate);

var result = false;

// Compare dates
if (inputDate < currentDate) {
  result = true;
  gs.print(JSON.stringify(result));
} else {
  result = false;
  gs.print(JSON.stringify(result));
}
