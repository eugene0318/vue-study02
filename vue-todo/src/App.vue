<template>
  <div id="App">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"> </TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItem() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
  // created() {

  // },
  components: {
    TodoHeader,9
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
