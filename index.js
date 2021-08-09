class Formatter {
  static capitalize(string) {
    let result = string.charAt(0).toUpperCase() + string.slice(1);
    return result
  }
  static sanitize(string) {
    let newString = string.replace(/[^A-Za-z0-9 '-]/g, '');
    return newString
  }
  static titleize(string) {
    let dontTouch = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let stringArray = string.split(' ')
    for (let i in stringArray) {
      
      if (!dontTouch.includes(stringArray[i])) {
        
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
      } else if (stringArray[i] === stringArray[0]) {
        
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
      }
    }
    let result = stringArray.join(" ");
    return result
  }
}