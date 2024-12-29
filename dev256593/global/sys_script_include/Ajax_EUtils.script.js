var Ajax_EUtils = Class.create();
Ajax_EUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  isPublic: function () {
    return true;
  },

  isDateInPast: function () {
    /**
     * @param sysparm_picked_date - Date you want to check in client script
     * @var inputDate - Formated date to currentDate format
     * @var inputDateArr - Array of inputDate
     * @var inputTime - Time of inputDate
     * @var currentDate - Current date
     * @var tmpDate - Temporary date used for setting time of current date to 00:00:00
     * @returns - JSON.stringify(result) - true if inputDate is in the past, false if inputDate is in the future, current if inputDate is current
     */

    var inputDate = new GlideDateTime(
      this.getParameter("sysparm_picked_date").toString()
    );
    var inputDateArr = inputDate.toString();
    inputDateArr = inputDateArr.split(" ");

    var inputTime = "";

    for (var i = 0; i < inputDateArr.length; i++) {
      inputTime = inputDateArr[1];
    }

    // If inputTime is empty, set currentDate time to 00:00:00
    var currentDate = new GlideDateTime();
    if (inputTime == "") {
      var tmpDate = currentDate.getLocalDate() + " 00:00:00";
      currentDate = tmpDate;
    }

    var result = false;

    // Compare dates
    if (inputDate < currentDate) {
      result = true;
      return JSON.stringify(result);
    } else if (inputDate > currentDate) {
      result = false;
      return JSON.stringify(result);
    } else {
      result = "current";
      return result;
    }
  },

  type: "Ajax_EUtils",
});
