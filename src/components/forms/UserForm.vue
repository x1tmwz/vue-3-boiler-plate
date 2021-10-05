<template>
    <form class="user-form" @submit="submit()">
        <section>
            <label for="name">{{'user name'}}:</label>
            <input type="text" v-model="userName" />
        </section>
        <section>
            <label for="password">{{'password'}}:</label>
            <input type="text" v-model="password" />
        </section>
        <section>
            <label for="password">{{'roles'}}:</label>
            <select v-model="role">
                  <option disabled value="">Please select role</option>
                  <option v-for="roleItem in roleList" :key="roleItem.name" :value="roleItem.value">{{roleItem.name}}</option>
                </select>
        </section>
        <button>Submit</button>
    </form>
</template>

<script>
import roles from "../../data/roles";
export default {
    name: 'UserForm',
    props: {
        user: {
            type: Object,
            default: () => ({
                userName: "",
                role: ""
            })
        }
    },
    created() {
        this.userName = this.user.userName
        this.role = this.user.role
        this.roleList = Object.keys(roles).reduce((prev, key) => {
            if (roles[key] !== roles.ADMIN) {
                prev.push({ name: key, value: roles[key] })
            }
            return prev
        }, [])
    },
    data: () => ({
        userName: '',
        password: '',
        role: '',
        roleList: []
    }),
    methods: {
        submit() {
            this.$emit('submit', { userName: this.userName, role: this.role, password: this.password })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(245, 233, 233);
    box-shadow: 2px 2px 2px 2px rgb(92, 92, 92);
    width: 40%;
    padding: 1rem;
    section {
        display: flex;
        justify-content: space-between;
        width :70%;
        margin: 0.5rem;
        input,select {
            width: 70%;
            padding: 0.2rem;
        }
        label {
            text-align: end;
        }
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
}
@media (max-width: 500px) {
      .user-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(245, 233, 233);
    box-shadow: 2px 2px 2px 2px rgb(92, 92, 92);
    width: 40%;
    padding: 1rem;
    section {
        display: flex;
        justify-content: space-between;
        width :70%;
        margin: 0.5rem;
        input,select {
            width: 70%;
            padding: 0.2rem;
        }
        label {
            text-align: end;
        }
    }
}
}
</style>
