<template>
    <div>
     <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtName">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="txtgender">英雄名称</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data(){
        return {
            formData:{
                name:'',
                gender:''
            }
        }
    },
    mounted(){
        loadData()
    },
    methods:{
        loadData(){
            axios
                .get(`http://127.0.0.1:3001/heroes/${this.id}`)
                .then((response) => {
                    this.formData =response.data;
                })
                .catch(() => {
                    console.log(err);
                    
                })
        }
    }
}
</script>

<style>

</style>
