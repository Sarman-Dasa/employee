<template>
    <div class="container">
      <div class="table mt-3 table-active table-striped">
        <div class="row bg-info p-4">
            <div class="col">
                Id
            </div>
            <div class="col">
               Name
            </div>
            <div class="col">
              Email
            </div>
            <div class="col">
               Phone
            </div>
            <div class="col">
               Job
            </div>
            <div class="col">
               City
            </div>
            <div class="col">
                Gender
            </div>
            <div class="col">
                Action
            </div>
        </div>
        <div class="row  p-2 bg-gradient"  v-for="employee in employees" :key="employee.id">
            <div class="col">
                {{ employee.id }}
            </div>
            <div class="col">
                {{ employee.name }}
            </div>
            <div class="col">
                {{ employee.email }}
            </div>
            <div class="col">
                {{ employee.phone }}
            </div>
            <div class="col">
                {{ employee.job }}
            </div>
            <div class="col">
                {{ employee.city }}
            </div>
            <div class="col">
                {{ employee.gender }}
            </div>
            <div class="col">
                <router-link :to="{name:'EditEmployee', params:{id:employee.id}}" class="btn m-2 text-bg-info">edit</router-link>
                <button @click="deleteEmployee(employee.id)" class="btn  text-bg-danger">Delete</button>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name:"ListEmployees",
        data() {
            return {
                employees:[],
            }
        },
        methods: {
            async loadData() {
                let employees = await axios.get("http://localhost:3000/employees");
                this.employees = employees.data;
            },
            async deleteEmployee(id) {
                await axios.delete("http://localhost:3000/employees/"+id);
                this.loadData();
            }
        },
        async mounted() {
           this.loadData();
        },
        
    }
</script>