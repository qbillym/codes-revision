<template>
  <UserCard name="Maxime" email="maxime@gmail.com" />
  <UserCard name="Andy" email="andy@gmail.com" />
</template>
<script>
import UserCard from './components/UserCard.vue';
export default {
  name: 'App',
  components: {
    UserCard
  },
}
</script>