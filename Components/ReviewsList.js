
app.component('reviews-list',{
    props:{
        reviews:{
            type:Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-display">
    <h3>Reviews</h3>
    <ul>
    <li v-for="(review,index) in reviews" :key="index">
    {{review.name}} gave it {{review.rating}} star.
    <br>
    {{reviews.review}}
    </li>
    </ul>
    </div>

    `
})