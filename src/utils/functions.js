import { v1 } from 'uuid'
export default {
  removeDuplicateInArray (arr) {
    const fillterObj = {}
    for (let i = 0; i < arr.length; i++) {
      fillterObj[arr[i]] = 0
    }
    return Object.keys(fillterObj)
  },
  generateRandomKey () {
    return v1()
  },
  getDuplicateValuesInArr (arr) {
    const fillterObj = {}
    for (let i = 0; i < arr.length; i++) {
      fillterObj[arr[i]] = fillterObj[arr[i]] ? (fillterObj[arr[i]] + 1) : 1
    }
    return Object.keys(fillterObj).filter((value) => fillterObj[value] > 1)
  }
}
