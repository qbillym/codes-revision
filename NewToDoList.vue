<template>
  <div class="container">
    <h1>My To-Do List</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Add a new task" required />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li
        v-for="(task, i) in tasks"
        :key="i"
        @click="toggleDone(i)"
        :class="{ completed: task.done }"
      >
        <span v-if="!task.editing">{{ task.text }}</span>
        <input
          v-else
          v-model="task.text"
          @blur="saveEdit(i)"
          @keyup.enter="saveEdit(i)"
        />

        <div class="task-actions">
          <button @click.stop="editTask(i)">
            {{ task.editing ? 'Cancel' : 'Edit' }}
          </button>
          <button @click.stop="deleteTask(i)">X</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      this.tasks.push({ text: this.newTask, done: false, editing: false });
      this.newTask = '';
    },
    toggleDone(i) {
      if (!this.tasks[i].editing) this.tasks[i].done = !this.tasks[i].done;
    },
    editTask(i) {
      this.tasks[i].editing = !this.tasks[i].editing;
    },
    saveEdit(i) {
      this.tasks[i].editing = false;
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    }
  }
};
</script>

<style scoped>
/* Keep your original CSS as it is */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
form {
  display: flex;
  margin-bottom: 20px;
}
input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  margin-right: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  background: #8dff64;
  cursor: pointer;
}
li.completed {
  text-decoration: line-through;
  color: #888;
}
.task-actions {
  display: flex;
  gap: 5px;
}
.delete-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
.delete-btn:hover {
  background: #cc0000;
}
.edit-btn {
  background: #4285f4;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
.edit-btn:hover {
  background: #3367d6;
}
</style>
