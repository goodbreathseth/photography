<template>
    <meta name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
    <h1>Create a Photographer's Account</h1>

    <div id="profile">
        <div class="img-div">
            <div id="img-cont" @click="addPhoto">
                <i class='far fa-user-circle'></i>
                <h2>Upload Photo</h2>
            </div>
        </div>
        <div class="prof">
            <form @submit.prevent="register">
                <h3>Personal</h3>
                <input type="text" v-model="fName" placeholder="First Name" required>
                <input type="text" v-model="lName" placeholder="Last Name" required>
                <input type="email" v-model="email" placeholder="Email" required>
                <input type="password" v-model="pwd" placeholder="Password" required>
                <textarea id="bio" type="text" v-model="bio" placeholder="Profile Biography" maxlength="500" required/>

                <h3>Location</h3>
                <input class="loc-text" type="text" v-model="city" placeholder="City" required>
                <input class="loc-text" type="text" v-model="state" placeholder="State" required>
                <input class="loc-text" type="text" v-model="country" placeholder="Country" required>
                <input id="spec" v-model="specialty" placeholder="Specialty" required>

                <button><h2>Submit</h2></button>
            </form>
        </div>
    </div>

</template>

<script>
import firebase from "@/firebaseConfig";

export default {
    data() {
        return {
            db: firebase.firestore(),
            fName: "",
            lName: "",
            email: "",
            pwd: "",
            bio: "",
            country: "",
            state: "",
            city: "",
            specialty: "",
        }
    },
    mounted() {
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/a076d05399.js');
      recaptchaScript.async = true;
      document.head.appendChild(recaptchaScript);
    },
    methods: {
      addPhoto() {
          alert("Updated photo!");
      },
      async register() {
        this.db.collection("users").add({
            fName: this.fName,
            lName: this.lName,
            email: this.email,
            pwd: this.pwd,
            bio: this.bio,
            country: this.country,
            state: this.state,
            city: this.city,
            specialty: this.specialty,
        })
        .then(() => {
            alert("Account successfully created!");
            this.resetForm();
            this.$router.push('/');
        })
        .catch((error) => {
            alert("Account not created - try again.");
            console.error("Error adding document: ", error);
        });
      },
      resetForm() {
        this.fName = "";
        this.lName = "";
        this.email = "";
        this.pwd = "";
        this.bio = "";
        this.country = "";
        this.state = "";
        this.city = "";
        this.specialty = "";
      }
  }
}
</script>

<style scoped>

i {
    align-self: center;
}

input {
    border-radius: 5px;
    border: 1px solid;
}

#bio {
    border: 1px solid;
    border-radius: 5px;
    resize: none;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background-color: #B9CFF7;
    text-align: center;
    border-radius: 5px;
    border-style: none;
}

button:hover {
    background-color: #9BBBF4;
}

@media only screen and (min-width: 961px) {
    #profile {
        padding: 0px 50px 50px 50px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .prof {
        flex: 75%;
    }

    .img-div {
        margin-right: 50px;
        flex: 25%;
    }
    
    .img-div:hover {
        cursor: pointer;
    }
    i {
        margin-top: 30px;
        font-size: 300px;
        align-self: center;
    }

    p {
        text-align: left;
    }

    h3 {
        text-align: left;
        width: 100%;
    }

    form {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    input {
        width: 317px;
        height: auto;
        padding: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
    }

    .loc-text {
        width: 200px;
    }

    #spec {
        width: 665px;
    }

    #bio {
        padding: 10px;
        width: 681px;
        height: 100px;
    }

    button {
        margin-bottom: 50px;
        width: 400px;
        height: auto;
    }
}
</style>
