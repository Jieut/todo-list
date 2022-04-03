<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem">{{ todoItem }}
                <button v-on:click="removeItem(todoItem, index)">delete</button>
            </li>
        </ul>
    </div>
  
</template>

<script>
export default {
    methods: {
        removeItem(todoItem, index) {
            // localstorage에서 해당 item 삭제
            localStorage.removeItem(localStorage.getItem(todoItem));
            // mutation 호출하여 Store의 state에서도 해당 item 삭제
            this.$store.commit('removeTodoItem', index);
        }
    }
}
</script>

<style>

</style>