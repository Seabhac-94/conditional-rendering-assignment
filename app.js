const app = Vue.createApp({

    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            showTasks: true
        }

    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue),
            this.enteredTaskValue = ''
        },
        showOrHideTasks(){
            this.showTasks = !this.showTasks
            console.log(this.showTasks)
        }
    }


}).mount("#assignment")