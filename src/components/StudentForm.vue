<template >
  <div class="container is-fluid is-half-desktop">
    
<form @submit.prevent="handleSubmit">
      <div class="field is-inline-block">
        <label class="label">Student Name</label>
        <input
          class="input "
          type="text"
          ref="first"
          v-model="student.name"
          :class="{'has-error':submitting &&invalidName}"
          @focus="clearStatus"
          @keypress="clearStatus"
        />
      </div>
      <br/>
      <div class="field is-inline-block">
        <label class="label">Student Email</label>
        <input
          class="input "
          type="email"
          :class="{'has-error':subitting &&invalidEmail}"
          v-model="student.email"
          @focus="clearStatus"
        />
      </div>
      <br/>
      <p
        v-if="error && submitting"
        class="help is-danger"
      >❗Please fill out all required fields</p>
      <p v-if="success" class="help is-success">✅ Student successfully added</p>
      <button class="button is-info is-">Add Student</button>
    </form>
  
    
  </div>
</template>

<script>
export default {
  name: "student-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      student: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();
      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }
      this.$emit("add:student", this.student);
      this.$refs.first.focus();
      this.student = {
        name: "",
        email: ""
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
    },
    clearStatus() {
      this.error = false;
      this.success = false;
    }
  },
  computed: {
    invalidName() {
      return this.student.name === "";
    },
    invalidEmail() {
      return this.student.email === "";
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>