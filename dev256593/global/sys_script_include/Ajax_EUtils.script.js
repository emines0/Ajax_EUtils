var Ajax_EUtils = Class.create();
Ajax_EUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  /**
   * @function isPublic - Check if script include is public
   * @returns - true - if script include is public then it can be accessed from client script
   */

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

    var inputString = this.getParameter("sysparm_input_str").toString();
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

  amountFormatting: function () {
    /**
     * @function amountFormatting - Format amount to currency, add thousand separator and set decimal places to 2
     * @param sysparm_amount - Amount you want to format in client script
     * @var amount - Amount you want to format
     * @var regex - 2 decimal places, thousand separator is dot, decimal separator is comma
     * @var amountStr - Formated amount in case of comma decimal separator
     * @var formattedAmount - Formated amount with dot decimal separator and 2 decimal places
     * @returns - JSON.stringify(result) - Formated amount
     */

    var amount = this.getParameter("sysparm_amount").toString();
    var result = "";
    var regex = /^\d{1,3}(\.\d{3})*(,\d{2})?$/; //

    //Prevent to do formatting more then once if onChange is triggered multiple times
    if (regex.test(amount)) {
      return amount;
    }

    // Replace a comma decimal separator with a dot for uniformity
    amountStr = amount.replace(",", ".");

    // Ensure the resulting string is a valid number
    if (isNaN(parseFloat(amountStr))) {
      return false;
    }

    // Convert the amount to a fixed 2 decimal places string
    var formattedAmount = parseFloat(amountStr).toFixed(2);

    // Replace the decimal separator from "." to ","
    formattedAmount = formattedAmount.replace(".", ",");

    // Add thousand separators using a regular expression
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    result = formattedAmount;

    return JSON.stringify(result);
  },

  type: "Ajax_EUtils",
});
