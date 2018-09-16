<template>
  <Card>
    <ul id="toDoList" class="list-group">
      <li v-for="item in items" class="list-group-item">
        <div class="row">
          <div class="col-10" @click="editListItem">
            <input type="text" name="" :value="item.noteContent" style="background: transparent; border: none;">
          </div>
          <div class="col-2 text-muted text-center" style="display: flex; align-items: center;">
            <strong @click="deleteListItem(item)" style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">X</strong>
          </div>
        </div>
      </li>
      <li class="list-group-item text-muted" style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">
        <input id="addItemForm" class="form-control" type="text" placeholder="Write your note here">
      </li>

    </ul>
    <div class="btn-group mt-3" role="group" style="width:100%;">
      <button type="button" @click="recoverListItems" class="btn btn-outline-dark">Recover Items</button>
      <button type="button" @click="addListItem" class="btn btn-outline-primary btn-block">Add Item</button>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/ToDoListCard'
export default {
  name: 'home',

  components: {
    Card
  },

  data() {
    return {
      items: [
        // blank array of items
      ],
    }
  },

  // mounted() {
  //
  // },

  methods: {
    addListItem() {
      var inputBox = document.getElementById('addItemForm');  // get input box DOM item
      var newItemText = inputBox.value;                       // get input box value
      if (newItemText !== "") {                               // if input box is not blank
        var newItem = {noteContent: newItemText };            // set content
        this.items.push(newItem);                             // add content object to items array containing all To-Do List items
        document.getElementById('addItemForm').value = "";    // reset input box value
      }

      // puts all ToDo text content into a single array
      var currentToDoListItems = [];
      for(var i = 0; i < this.items.length; i++) {
        currentToDoListItems[i] = this.items[i].noteContent;
      }

      window.localStorage.setItem('currentToDoListItems', currentToDoListItems);
    },

    editListItem() {

    },

    deleteListItem(item) {
      this.items = this.items.filter(i => i != item);
    },

    recoverListItems() {
      var currentToDoListItems = window.localStorage.getItem('currentToDoListItems').split(",");
      for(var i = 0; i < currentToDoListItems.length; i++) {
        var newItem = {noteContent: currentToDoListItems[i] };
        this.items.push(newItem);
      }
    }
  },

  mounted() {
    var currentToDoListItems = window.localStorage.getItem('currentToDoListItems').split(",");
    for(var i = 0; i < currentToDoListItems.length; i++) {
      var newItem = {noteContent: currentToDoListItems[i] };
      this.items.push(newItem);
    }
  },
}
</script>
