<template>
    <div>
        <h3>temp: {{ this.$store.state.todoItems }}</h3>
        <input type="text" v-model="todoItem" v-on:keyup.enter="addTodoItem">
        <button v-on:click="addTodoItem">add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoItem: ''
        }
    },
    methods: {
        addTodoItem() {
            if ( this.todoItem !== '') {
                // LocalStorage에 key, value 형태로 입력 받은 할일을 저장
                localStorage.setItem(this.todoItem, this.todoItem);
                
                // mutation 호출하여 Store의 state 저장
                this.$store.commit('addTodoItem', this.todoItem);
                
                // input element clear
                this.todoItem = '';
            }
        }
    }
    
}
</script>

<style>

</style>