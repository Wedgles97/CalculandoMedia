export default function getIntervalBetweenOneNumber(number) {
    if (number >= 0 && number <= 10) {
      return "0 a 10";
    } else if (number > 10 && number <= 20) {
      return "10 a 20";
    } else if (number > 20 && number <= 30) {
      return "20 a 30";
    } else if (number > 30 && number <= 40) {
      return "30 a 40";
    } else if (number > 40 && number <= 50) {
      return "40 a 50";
    } else if (number > 50 && number <= 60) {
      return "50 a 60";
    } else if (number > 60 && number <= 70) {
      return "60 a 70";
    } else if (number > 70 && number <= 80) {
      return "70 a 80";
    } else if (number > 80 && number <= 90) {
      return "80 a 90";
    } else if (number > 90 && number <= 100) {
      return "90 a 100";
    } else {
      return "Acima do limite";
    }
  }