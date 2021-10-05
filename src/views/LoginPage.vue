<template>
    <div class="login-form-container">
        <form class="login-form" @submit="login()">
            <h1>Login</h1>
            <input type="text" placeholder="user name" v-model="userName" />
            <input type="password" placeholder="password" v-model="password" />
            <button>Login</button>
            <p v-if="error">{{error}}</p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'loginPage',
    props: {
        submit: {
            type: Function,
            default: () => ({})
        }
    },
    mounted() {
        if (this.$store.getters['auth/isAuth']) {
            this.$router.push({ name: 'dashBoard' })
        }
    },
    data: () => ({
        userName: '',
        password: '',
        error: ''
    }),
    methods: {
        async login() {
            this.error = ''
            if (!this.userName || !this.password) {
                this.error = 'Please enter user name and password'
                return
            }
            await this.$store.dispatch('auth/login', { username: this.userName, password: this.password })
            if (this.$store.getters['auth/isAuth']) {
                this.$router.push({ name: 'dashBoard' })
            }
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    background-color: lightslategray;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(245, 233, 233);
    font-size: 100%;
    box-shadow: 2px 2px 2px 2px rgb(92, 92, 92);
    min-width: 30%;
    padding: 5rem;
    input {
        margin: 0.2rem;
        padding: 0.5rem;
        width: 70%;
    }
    button {
        margin: 0.5rem;
        padding: 0.2rem 1rem;
        border: none;
        font-weight: 400;
        font-size: 1.2rem;
        background-color: rgb(172, 245, 130);
        box-shadow: 1px 1px 1px 1px rgb(92, 92, 92);
        &:hover {
            background-color: rgb(152, 236, 103);
        }
    }
    @media (max-width: 500px) {
        padding: 1rem;
    }
}
</style>
