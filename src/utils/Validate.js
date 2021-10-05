class Validate {
  static isTokenExpires (tokenCreateTimestamp) {
    const halfDay = 60 * 60 * 12 * 1000
    const timePass = new Date() - tokenCreateTimestamp
    return timePass > halfDay
  }

  static isValidIsraeliPhoneNumber (number = '') {
    if (number.length !== 10) {
      return false
    }
    if (number[0] !== '0' || number[1] !== '5') {
      return false
    }
    return true
  }
}

export default Validate
