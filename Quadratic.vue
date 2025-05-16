<template>
  <Complex :a="1" :b="-3" :c="2" />
  <!-- 
  <div :data-theme="theme">
    <header>
      <div class="logo">
        <span><</span><strong>Developer B</strong><span>/></span>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button id="theme-toggle" @click="toggleTheme" aria-label="Toggle dark mode">
          <i :class="themeIcon"></i>
        </button>
      </nav>
    </header>

    <Portfolio />

    <footer class="fade-in delay-3">
      <p>© {{ new Date().getFullYear() }} Billy Mucyo. All rights reserved.</p>
      <div class="social-links">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-x"></i></a>
      </div>
    </footer>
  </div> 
  -->
</template>

<script>
// import { ref, onMounted } from 'vue'
// import Portfolio from './components/Portfolio.vue'

import Complex from './components/Complex.vue';
// import Quadratic from './components/Quadratic.vue';

export default {
  name: 'App',
  components: {
    Complex,
    // Grades
    // Temperature
    // NewToDoList
    // Comparison,
  },
}

// const theme = ref(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
// const themeIcon = ref(theme.value === 'dark' ? 'fas fa-sun' : 'fas fa-moon')

// const toggleTheme = () => {
//   theme.value = theme.value === 'dark' ? 'light' : 'dark'
//   themeIcon.value = theme.value === 'dark' ? 'fas fa-sun' : 'fas fa-moon'
//   localStorage.setItem('theme', theme.value)
// }
</script>
