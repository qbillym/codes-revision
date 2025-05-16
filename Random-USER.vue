<template>
  <div class="container">
    <img :src="picture" alt="user picture" />
    <h1>{{ firstname }} {{ lastname }}</h1>
    <p>{{ email }}</p>
    <button @click="getUser">Get User</button>
  </div>
</template>


<script>
export default {
  name: 'Random-USER',
  data() {
    return {
      firstname: 'Mucyo',
      lastname: 'Billy',
      email: 'mucyoobilly3@gmail.com',
      picture: 'src/assets/logo.png', // You can also import it if needed
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();

      this.firstname = data.results[0].name.first;
      this.lastname = data.results[0].name.last;
      this.email = data.results[0].email;
      this.picture = data.results[0].picture.large;
    }
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ecf0f1;
}

.container {
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  padding: 0 20px;
}

button {
  padding: 12px 28px;
  background: linear-gradient(135deg, #3498db, #2ecc71);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  background: linear-gradient(135deg, #2980b9, #27ae60);
}

.card {
  background: #1c1c1e;
  border-radius: 16px;
  padding: 25px;
  margin-top: 30px;
  display: inline-block;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.card img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid #2ecc71;
}

.card h2 {
  margin: 10px 0;
  font-size: 24px;
  color: #f1c40f;
}

.card p {
  margin: 8px 0;
  font-size: 15px;
  color: #bdc3c7;
}

p strong {
  color: #ffffff;
}

p:empty {
  display: none;
}

</style>