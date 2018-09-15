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
      <button type="button" @click="addListItem" class="btn btn-outline-dark list-group-item">Add Item</button>
    </ul>
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
    },

    editListItem() {

    },

    deleteListItem(item) {
      console.log(item);
      this.items = this.items.filter(i => i != item);
    }
  }
}
</script>
