<template >
  <div>
    <p v-if="students.length < 1" class="empty-table">No Students</p>
    <table v-else>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Studen Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td v-if="editing===student.id">
            <input type="text" v-model="student.id" />
          </td>
          <td v-else>{{student.id}}</td>
          <td v-if="editing===student.id">
            <input type="text" v-model="student.name" />
          </td>
          <td v-else>{{student.name}}</td>
          <td v-if="editing===student.id">
            <input type="text" v-model="student.email" />
          </td>
          <td v-else>{{student.email}}</td>
          <td v-if="editing===student.id">
            <button @click="editStudent(student)">Save</button>
            <button class="muted-button" @click="editing = null">Cancel</button>
          </td>
          <td v-else>
            <button @click="$emit('delete:student',student.id)">Delete</button>
            <button @click="editMode(student.id)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "student-table",
  data() {
    return {
      editing: null
    };
  },
  props: {
    students: Array
  },
  methods: {
    editMode(id) {
      this.editing = id;
    },
    editStudent(student) {
      if (student.name === "" || student.email === "") return;
      this.$emit("edit:student", student.id, student);
      this.editing = null;
    }
  }
};
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}
</style>