// import moment from "moment";
// var _ = require('lodash');

export const emailValidation = email => {
  const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  const re1 =
    /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/;
  return re.test(String(email).toLowerCase());
};

export function passwordLengthValidation(password) {
  const isValidLength = password.length >= 6;
  return isValidLength;
}

export const passwordValidation = password => {
  var re = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/);
  return re.test(password);
};

export function nameValidation(password) {
  const isValidLength = password.length >= 3;
  return isValidLength;
}

export const errorHandlingMessage = response => {
  if (response.data.errors) {
    const errors = Object.values(response.data.errors);
    let errorString = '';
    for (let i = 0; i < errors.length; i++) {
      errorString =
        errorString === ''
          ? `${errors[i][0]}`
          : `${errorString}\n${errors[i][0]}`;
    }
    return errorString;
  } else if (response?.data?.detail) {
    return response?.data?.detail;
  } else if (response?.message) {
    return response?.message;
  } else if (typeof response.data.message === 'string') {
    return response.data.message;
  } else if (typeof response.data.message === 'object') {
    const errors = Object.values(response.data.message);
    let errorString = '';
    for (let i = 0; i < errors.length; i++) {
      errorString =
        errorString === ''
          ? `${errors[i][0]}`
          : `${errorString}\n${errors[i][0]}`;
    }
    return errorString;
  }
};

export const removeLastCharFromString = str => {
  return (str = str.slice(0, -1));
};

export const removeLast2CharFromString = str => {
  return (str = str.slice(0, -2));
};

export const set6MonthBeforeDate = () => {
  let fromDate = new Date();
  fromDate.setMonth(fromDate.getMonth() - 6);
  return fromDate;
};

export const set12MonthBeforeDate = () => {
  let fromDate = new Date();
  fromDate.setMonth(fromDate.getMonth() - 12);
  return fromDate;
};

// export const getFirstDayOfMonth = () => {
//     // let fromDate = new Date()
//     // fromDate.setMonth(fromDate.getMonth() - 12);
//     const startOfMonth = moment().startOf('month') //.format('YYYY-MM-DD hh:mm');
//     return startOfMonth
// }

// export const getLastDayOfMonth = () => {
//     // let fromDate = new Date()
//     // fromDate.setMonth(fromDate.getMonth() - 12);
//     const endOfMonth = moment().endOf('month') //.format('YYYY-MM-DD hh:mm');
//     return endOfMonth
// }

export const numberValidation = number => {
  // const re = /^[0-9]+$/;
  const re = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
  return re.test(number);
};

export const urlValidation = userInput => {
  const re =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  return re.test(userInput);
  // var res = userInput.match();
  // if (res == null)
  //     return false;
  // else
  //     return true;
};

export const firstLetterCapital = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getFirstLetterFromSpaceSeparateString = string => {
  var matches = string.match(/\b(\w)/g);
  matches = matches.join('');
  return matches;
};

export const getOnlyFirstLetterFromString = string => {
  return Array.from(string)[0];
};

export const currencyFormatter = amount => {
  // return new Intl.NumberFormat('en-IN', {
  //     style: 'currency',
  //     currency: 'INR'
  // }).format(amount);
  let formattedAmount = Number(amount)
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return removeLast2CharFromString(formattedAmount);
  // return Number(amount)
  //     .toFixed(1)
  //     .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
