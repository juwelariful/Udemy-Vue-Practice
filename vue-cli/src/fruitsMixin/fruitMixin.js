export const fruitMixin= {
    data(){
        return{
            fruits: [
                'apple', 'orange', 'banana'
            ],
            filterText:''
        }
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element)=> {
                return element.match(this.filterText)
            })
        }
    },
    created(){
        console.log('created')
    }
}