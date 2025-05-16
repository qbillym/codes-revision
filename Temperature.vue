<template>
    <div class="container">
      <h2>Temperature Converter</h2>
        <label>Celsius (°C):</label>
        <input type="number" v-model.number="celsius" @input="convertToFahrenheit" />
        <label>Fahrenheit (°F):</label>
        <input type="number" v-model.number="fahrenheit" @input="convertToCelsius" />
      </div>
  </template>
  <script>
  export default {
    data() {
      return {
        celsius: 0,
        fahrenheit: 0
      };
    },
    methods: {
      convertToFahrenheit() {
        if (this.celsius !== null) {
          this.fahrenheit = (this.celsius * 9/5) + 32;
        } else {
          this.fahrenheit = null;
        }
      },
      convertToCelsius() {
        if (this.fahrenheit !== null) {
          this.celsius = (this.fahrenheit - 32) * 5/9;
        } else {
          this.celsius = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: #262525;
    border-radius: 8px;
    text-align: center;
  }
  input {
    margin: 10px;
    padding: 8px;
    width: 200px;
    font-size: 16px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  </style>
  