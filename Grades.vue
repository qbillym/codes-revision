<template>
    <div class="container">
        <h1>
            Grades Checking
        </h1>
        <label for="marks">Enter Marks:</label>
        <input type="number" v-model.number="marks"><br><br>
 <button @click="calculateGrade">Calculate Grade</button>
         <p v-if="result">{{ result }}</p>
                
    </div>
</template>
<script>
export default{
   
    data(){
        return{
            marks: '',
            result:0
        }
    },
    methods:{
      calculateGrade(){
        
        if(this.marks>100 && this.marks<0){
            this.result='Invalid'
        }
        else if(this.marks>=90){
            this.result='Grade A'
        }
         else if(this.marks>=80){
            this.result='Grade B'
        }
         else if(this.marks>=70){
            this.result='Grade C'
        }
         else if(this.marks>=60){
            this.result='Grade D'
        }
         else if(this.marks>=50){
            this.result='Grade E'
        }
        else if(this.marks<50){
            this.result='Grade F'
        }
      }  
    }
}

</script>