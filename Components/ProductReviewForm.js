app.component('review-form',{
    template:
    /*html*/
    `
    <form class="form" @submit.prevent="onSubmit">
    <h3>Write a Review</h3>
    <label for ="name" >Name: </label>
    <input id ="name" v-model="name"><br>
    <label for = "review">Review: </label>
    <textarea id ="review" v-model="review"></textarea><br>
    <label for ="rating">How would you rate this product?</label>
    <select id ="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>

    </select><br>
    <input class="button" value ="submit"  type ="submit">
    </form>
    `,
    data(){
        return {
            name:'',
            review:'',
            rating:null
        }
    },
    methods:{
        onSubmit(){
            if(this.name==='' || this.review===''|| this.rating===null){
                alert("Please fill out all the fields.")
            }
           let productReview = {
            name:this.name,
            review: this.review,
            rating : this.rating
            }
            this.$emit('review-submitted',productReview)

            this.name='',
            this.review='',
            this.rating= null
        }

    }
})