<template>
    <Card fromColor="#9FFFF5" toColor="rgba(0,0,0,0)">
        <div slot="title">Todo</div>
        <div id="todo">
            <div v-for="item in items" class="todo-item text-white">
                <div class="row">
                    <div class="col-10">
                        <input type="text" name="" :value="item.noteContent"
                               style="background: transparent; border: none;">
                    </div>
                    <div class="col-2 text-muted text-center" style="display: flex; align-items: center;">
                        <span @click="deleteListItem(item)"
                                style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"><font-awesome-icon icon="times"/></span>
                    </div>
                </div>
            </div>
            <div class="input-group mb-0 p-3" style="padding-top: 0.5rem !important; padding-bottom: 0.8rem !important;">
                <input id="addItemForm" type="text" class="form-control" placeholder="Enter a task..." aria-label="Task" style="background: none; color: white;">
                <div class="input-group-append">
                    <button @click="addListItem" class="btn btn-outline-light" type="button">Add</button>
                </div>
            </div>
        </div>
      </li>
      <li class="list-group-item text-muted" style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">
        <input id="addItemForm" class="form-control" type="text" placeholder="Write your note here">
      </li>

    </ul>
    <div class="btn-group mt-3" role="group" style="width:100%;">
      <button type="button" @click="addListItem" class="btn btn-outline-primary btn-block">Add Item</button>
    </div>
  </Card>
</template>

<script>
    const STORAGE_KEY = 'hello-tab-todo';
    import Card from '@/components/Card';
    var todoStorage = {
        fetch: function () {
            var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            todos.forEach(function (todo) {
                this.items.push(todo);
            });
            return todos;
        },
        save: function (todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        }
    };

    export default {
        name: 'todo',

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

      localStorage.setItem('currentToDoListItems', currentToDoListItems);
    },

        },

        methods: {
            addListItem() {
                var inputBox = document.getElementById('addItemForm');  // get input box DOM item
                var newItemText = inputBox.value;                       // get input box value
                if (newItemText !== "") {                               // if input box is not blank
                    var newItem = {noteContent: newItemText};            // set content
                    this.items.push(newItem);                             // add content object to items array containing all To-Do List items
                    document.getElementById('addItemForm').value = "";    // reset input box value
                }
              },

    deleteListItem(item) {
      this.items = this.items.filter(i => i != item);
    },

    recoverListItems() {
    let items = localStorage.getItem('currentToDoListItems') || ''
      let currentToDoListItems = items.split(",");
      for(var i = 0; i < currentToDoListItems.length; i++) {
        var newItem = {noteContent: currentToDoListItems[i] };
        this.items.push(newItem);
      }
    }
  },

  mounted() {
    let items = localStorage.getItem('currentToDoListItems')
    if (!items) return
    items = items.split(",");
    for(var i = 0; i < items.length; i++) {
      var newItem = {noteContent: items[i] };
      this.items.push(newItem);
    }
  },
}
</script>

<style>
    .todo-item {
        border-radius: 4px;
        background: #fff;
        z-index: 512;
        position: relative;
        padding: 0.5rem;
        margin: 0.5rem;
        box-shadow: 0 0.15rem 0.45rem rgba(0, 0, 0, .5);
    }
</style>