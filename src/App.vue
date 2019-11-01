<template>
  <div id="app" class="small-container">
    <h1>Students</h1>
    <student-form @add:student="addStudent" />
    <student-table :students="students" @delete:student="deleteStudent" @edit:student="editStudent" />
  </div>
</template>

<script>
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
export default {
  name: "app",
  components: {
    StudentForm,
    StudentTable
  },
  data() {
    return {
      students: [
        {
          id: 11111,
          name: "Ali Çelik",
          email: "ali.celik@myuniv.edu"
        },
        {
          id: 11112,
          name: "Veli Demir",
          email: "veli.demir@myuniv.edu"
        },
        {
          id: 11113,
          name: "Ayşe Korkmaz",
          email: "ayse.korkmaz@myuniv.edu"
        }
      ]
    };
  },
  methods: {
    addStudent(student) {
      const lastId =
        this.students.length > 0
          ? this.students[this.students.length - 1].id
          : 11110;
      const id = lastId + 1;
      const newStudent = { ...student, id };
      this.students = [...this.students, newStudent];
    },
    deleteStudent(id) {
      this.students = this.students.filter(student => student.id !== id);
    },
    editStudent(id, updatedStudent){
      this.students = this.students.map(student => student.id === id ? updatedStudent: student)
    }
  }
};
</script>

<style lang="sass">
  @import "~bulma/bulma.sass"
</style>


