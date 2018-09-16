<template>
    <Card fromColor="#9FFFF5" toColor="rgba(0,0,0,0)">
        <div slot="title">Todo</div>
        <div id="todo">
            <div v-for="item in items" class="todo-item text-white">
                <div class="row">
                    <div class="col-10" @click="editListItem">
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

        mounted() {

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

            editListItem() {

            },

            deleteListItem(item) {
                console.log(item);
                this.items = this.items.filter(i => i != item);
            }
        }
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