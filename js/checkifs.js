function isName(value) {
    var pattern = /^[a-zA-Z\s\'\-]{2,}$/;
    return pattern.test(value);
  }
  
  function isPhone(value) {
    var pattern =
      /^(((\+?64\s*[-\.]?[3-9]|\(?0[3-9]\)?)\s*[-\.]?\d{3}\s*[-\.]?\d{4})|((\+?64\s*[-\.\(]?2\d{1}[-\.\)]?|\(?02\d{1}\)?)\s*[-\.]?\d{3}\s*[-\.]?\d{3,5})|((\+?64\s*[-\.]?[-\.\(]?800[-\.\)]?|[-\.\(]?0800[-\.\)]?)\s*[-\.]?\d{3}\s*[-\.]?(\d{2}|\d{5})))$/;
    return pattern.test(value);
  }
  
  function isEmail(value) {
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(value);
  }
  
  function isURL(value) {
    var pattern =
      /^(http|https|ftp)\:\/\/([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&%\$\-]+)*@)?((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4})(\:[0-9]+)?(\/[^\/][a-zA-Z0-9\.\,\?\'\\/\+&%\$#\=~_\-@]*)*[\/]*$/;
    return pattern.test(value);
  }
  
  function isNumeric(value) {
    var pattern = /^[\d]{1,}(\.[\d]{1,})?$/;
    return pattern.test(value);
  }
  
  function isValueProvided(value) {
    var trimmedValue = value.trim();
  
    if (trimmedValue == "") {
      return false;
    } else {
      return true;
    }
  }