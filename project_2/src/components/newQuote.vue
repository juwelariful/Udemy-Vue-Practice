<template>
<div class="row">
<form>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label></label>
        <textarea class="form-control" v-model="quote"></textarea>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
       <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
    </div>
</form>
</div>

</template>

<script>

export default {
    data: function(){
        return{
            quote:''
        }
    },
    methods:{
        createNew(){
           this.$emit('quoteAdd', this.quote)
           this.quote= '' 
        }
    }
}
</script>

<style scoped>
/*  */
</style>