<template>
    <div>
        <h3>{{ name }}</h3> 
        <p>Email: {{ email }}</p>  
        <p>Message: {{ Message }}</p> 
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        name: { 
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    data() { 
        return {
            Message: 'Our Website is created using Vue framework.'  
        };
    }
}
</script>