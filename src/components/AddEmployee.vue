<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <ul>
                    <li v-for="item in  errors" v-bind:key="item" class="text-danger">
                        {{ item }} is required
                    </li>
                </ul>
            </div>
        </div>
        <div class="table mt-5 table-bordered">
            <div class="row">
                <div class="col text-bg-info text-center text-black p-2">
                    <label for="" class="form-label display-6" ref="header"> Add Employee </label>
                   
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Enter employee name" v-model="form.name">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Enter employee email" v-model="form.email">
                </div>
            </div>

            <div class="row mt-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Enter employee phone" v-model="form.phone">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Enter job" v-model="form.job">
                </div>
            </div>

            <div class="row mt-3">
                <div class="col">
                    <select name="city" id="" class="form-select text-black" v-model="form.city">
                        <option value="0" selected disabled>---Select City---</option>
                        <option value="Gandhinagar">Gandhinagar</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Porbandar">Porbandar</option>
                        <option value="Surat">Surat</option>
                        <option value="Ahmedabad">Ahmedabad</option>

                    </select>
                </div>
                <div class="col">
                    <label for="">select gender</label>
                    <input type="radio" value="Male" id="rdomale" name="gender" v-model="form.gender">
                    <label for="rdomale">Male</label>
                    <input type="radio" value="Female" id="rdofemale" name="gender" v-model="form.gender">
                    <label for="rdofemale">Female</label>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col offset-5" v-if="form.add">
                    <button class="btn btn-info text-center" @click="addEmployee">Add employee</button>
                </div>
                <div class="col offset-5" v-if="!form.add">
                    <button class="btn btn-info text-center" @click="updateEmployee">Update employee</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "AddEmployee",
    data() {
        return {
            form: {
                name: null,
                email: null,
                phone: null,
                job: null,
                gender: null,
                city: 0,
                add: true,
            },
            errors: []

        };
    },
    methods: {
        formValidation() {
            this.errors = [];
            for (let item in this.form) {
                if (this.form[item] === null || this.form[item].length === 0) {
                    this.errors.push(item);
                }
            }
            console.log(this.errors);
            if (this.errors.length === 0)
                return 1;
            return 0;
        },
        async addEmployee() {
            if (this.formValidation()) {
                let result = await axios.post("http://localhost:3000/employees", {
                    name: this.form.name,
                    email: this.form.email,
                    phone: this.form.phone,
                    job: this.form.job,
                    gender: this.form.gender,
                    city: this.form.city,
                });
                this.form = [];
                this.form.city = 0;
                console.log(result);
            }
        },
        async updateEmployee() {
            if (this.formValidation()) {
                let result = await axios.put("http://localhost:3000/employees/" + this.$route.params.id, {
                    name: this.form.name,
                    email: this.form.email,
                    phone: this.form.phone,
                    job: this.form.job,
                    gender: this.form.gender,
                    city: this.form.city,
                });
                this.add = true;
                this.form = null;
                this.$router.push({ name: "ListEmployees" });
                console.log(result);
            }
        }
    },
    async mounted() {
        if (this.$route.params.id) {
            let employee = await axios.get("http://localhost:3000/employees/" + this.$route.params.id);
            this.form = employee.data;
            this.$refs.header.textContent = "Update employee";
            this.add = false;
        }
    }

}
</script>

<style scoped>
.container {
    width: 50%;
}
</style>