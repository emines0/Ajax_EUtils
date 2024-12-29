var Ajax_EUtils = Class.create();
Ajax_EUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  isPublic: function () {
    return true;
  },

  whichTimeline: function () {
    /**
     * @function whichTimeline - Check if input date is in the past, future or current
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

  isThereOnlyNumbers: function () {
    /**
     * @function isThereOnlyNumbers - Check if input string contains only numbers
     * @param sysparm_input_string - String you want to check in client script
     * @var inputString - String you want to check
     * @returns - JSON.stringify(result) - true if inputString contains only numbers, false if inputString contains anything else
     */

    var inputString = this.getParameter("sysparm_input_string").toString();
    var result = false;

    if (/^\d+$/.test(inputString)) {
      result = true;
      return JSON.stringify(result);
    } else {
      result = false;
      return JSON.stringify;
    }
  },

  isThereOnlyLetters: function () {
    /**
     * @function isThereOnlyLetters - Check if input string contains only letters
     * @param sysparm_input_string - String you want to check in client script
     * @var inputString - String you want to check
     * @returns - JSON.stringify(result) - true if inputString contains only letters, false if inputString contains anything else
     */

    var inputString = this.getParameter("sysparm_input_string").toString();
    var result = false;

    if (/^[a-zA-Z]+$/.test(inputString)) {
      result = true;
      return JSON.stringify(result);
    } else {
      result = false;
      return JSON.stringify(result);
    }
  },

  isThereOnlyLettersAndNumbers: function () {
    /**
     * @function isThereOnlyLettersAndNumbers - Check if input string contains only letters and numbers
     * @param sysparm_input_string - String you want to check in client script
     * @var inputString - String you want to check
     * @returns - JSON.stringify(result) - true if inputString contains only letters and numbers, false if inputString contains anything else
     */

    var inputString = this.getParameter("sysparm_input_string").toString();
    var result = false;

    if (/^[a-zA-Z0-9]+$/.test(inputString)) {
      result = true;
      return JSON.stringify(result);
    } else {
      result = false;
      return JSON.stringify(result);
    }
  },

  isTherSpace: function () {
    /**
     * @function isTherSpace - Check if input string contains space
     * @param sysparm_input_string - String you want to check in client script
     * @var inputString - String you want to check
     * @returns - JSON.stringify(result) - true if inputString contains space, false if inputString does not contain space
     */

    var inputString = this.getParameter("sysparm_input_string").toString();
    var result = false;

    if (/\s/.test(inputString)) {
      result = true;
      return JSON.stringify(result);
    } else {
      result = false;
      return JSON.stringify(result);
    }
  },

  isThereOnlyLettersAndSpace: function () {
    /**
     * @function isThereOnlyLettersAndSpace - Check if input string contains only letters and space
     * @param sysparm_input_string - String you want to check in client script
     * @var inputString - String you want to check
     * @returns - JSON.stringify(result) - true if inputString contains only letters and space, false if inputString contains anything else
     */

    var inputString = this.getParameter("sysparm_input_string").toString();
    var result = false;

    if (/^[a-zA-Z\s]+$/.test(inputString)) {
      result = true;
      return JSON.stringify(result);
    } else {
      result = false;
      return JSON.stringify(result);
    }
  },

  isThereOnlyNumbersAndSpace: function () {
    /**
     * @function isThereOnlyNumbersAndSpace - Check if input string contains only numbers and space
     * @param sysparm_input_string - String you want to check in client script
     * @var inputString - String you want to check
     * @returns - JSON.stringify(result) - true if inputString contains only numbers and space, false if inputString contains anything else
     */

    var inputString = this.getParameter("sysparm_input_string").toString();
    var result = false;

    if (/^[0-9\s]+$/.test(inputString)) {
      result = true;
      return JSON.stringify(result);
    } else {
      result = false;
      return JSON.stringify(result);
    }
  },

  isThereEmail: function () {
    /**
     * @function isThereEmail - Check if input string is email
     * @param sysparm_input_string - String you want to check in client script
     * @var inputString - String you want to check
     * @returns - JSON.stringify(result) - true if inputString is email, false if inputString is not email
     */

    var inputString = this.getParameter("sysparm_input_string").toString();
    var result = false;

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputString)) {
      result = true;
      return JSON.stringify(result);
    } else {
      result = false;
      return JSON.stringify(result);
    }
  },

  type: "Ajax_EUtils",
});
