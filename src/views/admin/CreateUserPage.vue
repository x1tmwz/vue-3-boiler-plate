<template>
    <div class="create_user_page_container">
      <h1>Create user</h1>
        <UserForm />
    </div>
</template>

<script>
import UserForm from '../../components/forms/UserForm.vue'
export default {
    name: 'CreateUserPage',
    components: { UserForm },
    data: () => ({

    }),
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.create_user_page_container{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 85vh;

}

</style>
