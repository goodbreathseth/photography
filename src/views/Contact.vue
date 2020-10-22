<template>
  <div class="outer">
    <h1>About Us</h1>
    <h3>
      ConnectMe is a one-stop-shop for photographers that allows them to perform
      all tasks for their job.
    </h3>
    <h3>
      We are geared towards helping photographers find clients quickly and
      easily as well as create branding in an easy and professional way.
    </h3>

    <div class="decoration"></div>
    <a href="https://forms.gle/YSryXGcg4VPMYTCF8"><h2>Take our survey here</h2></a>
    <div class="decoration"></div>

    <form @submit.prevent="submit">
      <h3>Contact Us</h3>
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Your name"
        required
      />
      <input
        type="text"
        name="email"
        v-model="email"
        placeholder="Your email"
        required
      />
      <textarea
        id="message"
        type="text"
        v-model="message"
        placeholder="Message"
        maxlength="500"
        required
      />
      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
import firebase from "@/firebaseConfig";

export default {
  data() {
    return {
      db: firebase.firestore(),
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submit() {
      this.db
        .collection("contacts")
        .add({
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then(() => {
          alert("Message sent!");
          this.resetForm();
        })
        .catch((error) => {
          alert("Message not sent - try again.");
          console.error("Error sending message: ", error);
        });
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.outer {
  padding: 10%;
}

.decoration {
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  height: 0.5rem;
  width: 8rem;
  background: lavender;
  border-radius: 32px;
}
</style>
