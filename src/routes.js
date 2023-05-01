import { createWebHistory,createRouter } from "vue-router";
import Home from "./components/Home.vue";
import AddEmployee from "./components/AddEmployee.vue";
import ListEmployees from "./components/ListEmployee.vue"

const routes = [
    {
        name: "HomePage",
        path: "/home",
        component:Home
    },
    {
        name: "AddEmployee",
        path: "/add-employee",
        component: AddEmployee
    },
    {
        name: "ListEmployees",
        path: "/employee-list",
        component: ListEmployees
    },
    {
        name: "EditEmployee",
        path: "/edt-employee/:id",
        component: AddEmployee
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;