<template>
    <div>
     <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtName">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="txtgender">英雄名称</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="性别">
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // 1.绑定文本框
    // 2.导入axios
    // 3.点击按钮,获取post过去的数据,发送post请求
    // 4.添加成功,重新加载表格数据
    data(){
        return {
            formData:
            {
            name:'',
            gender:'',
            }
        }
    },
    methods:{
        handleAdd(){
            axios
                .post('http://127.0.0.1:3001/heroes',this.formData)
                .then((response) => {
                    if(response.status === 201){
                        alert('添加成功');
                        // 跳转到列表页面
                        this.$router.push('/heroes')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    
                })
        }
    }
}
</script>

<style>

</style>
