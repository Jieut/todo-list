<template>
    <div>
        <button v-on:click="removeAllTodoItem">remove all</button>
    </div>
  
</template>

<script>
export default {
    methods: {
        removeAllTodoItem() {
            // localstorage에 있는 모든 데이터를 지운다.
            localStorage.clear();
            // mutation 호출하여 Store의 state도 모두 지워준다.
            this.$store.commit('removeAllTodoItem');
        }
    }
}
</script>

<style>

</style>