<template>
  <form class="main-page-container" @submit="submit">
    <section>
      <label for="name">Suplier list</label>
      <select name="" id=""></select>
    </section>
    <h1>Numbers</h1>
    <section class="main-page-container_text-area-section">
      <textarea
        placeholder="numbers"
        v-model="numberText"
        @input="onNumberTextChange()"
      />
      <div
        v-if="numbersInfo.total >= 1"
        class="main-page-container_text-area-section_info"
      >
        <p>Total numbers : {{ numbersInfo.total }}</p>
        <p>Duplicate numbers : {{ numbersInfo.duplicateAmount }}</p>
        <p>Unvalid numbers: {{ numbersInfo.amountOfWrongNumbers }}</p>
        <p>Duplicate number list: {{ numbersInfo.duplicates }}</p>
        <p>Unvalid number list: {{ numbersInfo.wrongNumbers }}</p>
      </div>
    </section>
     <p v-if="!!numberListError" class="main-page-container_error-msg">{{numberListError}}</p>
    <h1>Codes</h1>
    <section class="main-page-container_text-area-section">
      <textarea
        placeholder="codes"
        v-model="codeText"
        @input="onCodeTextChange()"
      />
      <div
        v-if="codesInfo.total >= 1"
        class="main-page-container_text-area-section_info"
      >
        <p>Total codes : {{ codesInfo.total }}</p>
        <p>Duplicate codes : {{ codesInfo.duplicateAmount }}</p>
        <p>Duplicate codes list: {{ codesInfo.duplicates }}</p>
      </div>
    </section>
    <p v-if="!!codeListError" class="main-page-container_error-msg">{{codeListError}}</p>
    <button class="main-page-container_submit-btn">Submit</button>
    <p  class="main-page-container_error-msg" v-if="!!error">{{error}}</p>
  </form>
</template>

<script>
import Validate from '../utils/Validate'
import functions from '../utils/functions'

export default {
  name: 'SimChargePage',
  data: () => ({
    numbersInfo: { total: 0 },
    codesInfo: { total: 0 },
    numberText: '',
    codeText: '',
    suplier: '',
    error: '',
    numberListError: '',
    codeListError: ''
  }),
  methods: {
    onNumberTextChange () {
      if (this.numberText.length > 5500) {
        this.numberListError = 'Please enter a list with at least 500 numbers each number should have 10 chars'
        return
      }
      this.numberListError = ''
      let numberList = this.numberText.split('\n')
      numberList =
        numberList.length >= 1
          ? numberList.filter((num) => !!num)
          : [this.numberText]
      const total = numberList.length
      const duplicates = functions.getDuplicateValuesInArr(numberList)
      const wrongNumbers = numberList.filter(
        (number) => !Validate.isValidIsraeliPhoneNumber(number)
      )
      this.numbersInfo = {
        total,
        duplicateAmount: duplicates.length,
        duplicates,
        amountOfWrongNumbers: wrongNumbers.length,
        wrongNumbers
      }
    },
    onCodeTextChange () {
      let codeList = this.codeText.split('\n')
      codeList =
        codeList.length >= 1
          ? codeList.filter((num) => !!num)
          : [this.codeText]
      if (codeList.length > 500) {
        this.codeListError = 'Please enter a list with at least 500 codes'
        return
      }
      this.codeListError = ''
      const total = codeList.length
      const duplicates = functions.getDuplicateValuesInArr(codeList)
      this.codesInfo = {
        total,
        duplicateAmount: duplicates.length,
        duplicates
      }
    },
    submit () {
      if (!!this.numberListError || !!this.codeListError) {
        return
      }
      if (this.codesInfo.total === 0 || this.numbersInfo.total === 0) {
        this.error = 'One or Both of the lists are empty'
        return
      }
      if (this.codesInfo.total !== this.numbersInfo.total) {
        this.error = 'The number list and code list arent match in size'
        return
      }
      this.error = ''
    }
  }
}
</script>

<style lang="scss">
.main-page-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .main-page-container_error-msg{
    margin: 1rem;
    color: rgb(219, 13, 13);
    font-weight: bold;
  }
  .main-page-container_text-area-section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    textarea {
      width: 50%;
      height: 25vh;
    }
    .main-page-container_text-area-section_info {
      max-height: 25vh;
      width: 40%;
      overflow-y: auto;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      textarea {
        width: 100%;
        height: 25vh;
      }
      .main-page-container_text-area-section_info {
        max-height: 25vh;
        width: 100%;
        overflow-y: auto;
      }
    }
  }
  .main-page-container_submit-btn {
    border: none;
    background: lightblue;
    width: 30%;
    margin: 2rem auto;
    padding: 1rem;
    box-shadow: 1px 1px 1px 1px rgb(174, 191, 197);
    &:hover {
      font-weight: bold;
    }
  }
}
</style>
