<template>
    <meta name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
    <div id="content">
        <h1>Create a Photographer's Account</h1>

        <div id="profile">
            <div class="img-div">
                <div id="img-cont">
                    <input id="img-input" type="file" accept="image/*" @change="uploadPhoto" title="">
                    <i class='far fa-user-circle'></i>
                    <h2>Upload Photo</h2>
                </div>
            </div>
            <div class="prof">
                <form @submit.prevent="register">
                    <h3>Personal</h3>
                    <div class="info-cont">
                        <input type="text" v-model="fName" placeholder="First Name" required>
                        <input type="text" v-model="lName" placeholder="Last Name" required>
                    </div>
                    <div class="info-cont">
                        <input type="email" v-model="email" placeholder="Email" required>
                        <input type="password" v-model="pwd" placeholder="Password" required>
                    </div>
                    <textarea id="bio" type="text" v-model="bio" placeholder="Profile Biography" maxlength="500" required/>

                    <h3>Location</h3>
                    <div id="loc-cont">
                        <input class="loc-text" type="text" v-model="city" placeholder="City" required>
                        <input class="loc-text" type="text" v-model="state" placeholder="State" required>
                        <input class="loc-text" type="text" v-model="country" placeholder="Country" required>
                    </div>
                    <input id="spec" v-model="specialty" placeholder="Specialty" required>

                    <button><h2>Submit</h2></button>
                </form>
            </div>
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
      uploadPhoto() {
          alert("file uploaded!");
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

    h1 {
        color: #081144;
    }

    #content {
        margin-top: 10%;
    }

    #profile {
        padding: 0px 50px 50px 50px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .prof {
        flex: 60%;
        display: flex;
        flex-direction: column;
    }

    .info-cont {
        display: flex;
        flex: 100%;
    }

    #loc-cont {
        display: flex;
        flex: 100%;
    }

    .img-div {
        flex: 25%;
    }

    #img-input {
        position: absolute;
        flex: 100%;
        height: 400px;
        cursor: pointer;
        opacity: 0;
    }

    #img-input:hover {
        title: "";
    }

    i {
        margin-top: 30px;
        font-size: 300px;
        align-self: center;
        color: #081144
    }

    h2 {
        color: #081144;
    }

    p {
        text-align: left;
    }

    h3 {
        text-align: left;
        width: 100%;
        color: #081144;
    }

    form {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    input {
        width: 100%;
        height: auto;
        padding: 10px;
        margin: 0 10px 10px 0px;
        border-radius: 5px;
        border: 1px solid #2c3e50;
    }

    .loc-text {
        flex: 33.3%;
    }

    #spec {
        flex: 100%;
    }

    #bio {
        padding: 10px;
        margin-right: 10px;
        flex: 100%;
        height: 100px;
        border: 1px solid #2c3e50;
        border-radius: 5px;
        resize: none;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    button {
        width: 100%;
        margin-right: 10px;
        height: auto;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: white;
        background-color: #081144;
        border: none;
        text-align: center;
        border-radius: 5px;
    }

    button h2 {
        color: white;
    }

    button:hover {
        background-color: #060c2d;
        color: white;
    }
</style>
