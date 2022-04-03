<script setup>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>

<template>
  <header>
    <h1>Todo List!</h1>
  </header>

  <main>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </main>

  <footer>
    <TodoFooter></TodoFooter>
  </footer>
</template>

<style>

</style>
