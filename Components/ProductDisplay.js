
app.component('product-display', {
    
    template:
    /*html*/
    ` <div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img v-bind:src="image" alt="Product Image">
        </div>

        <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inStock>50">In Stock</p>
            <p v-else-if="inStock<=50 && inStock>0" style="color:red"><b>Hurry!!! only a few left</b></p>
            <p v-else="inStock">Out of Stock</p>
            <ul>
                <li v-for="details in detail">{{details}}</li>
            </ul>
            <div class="color-circle" v-for="(variants,index) in variant" :key="variants.id"
                :style="{backgroundColor: variants.color}" @mouseover="updateVarient(index)"></div>

            <button class="button" :class="{disaledButton:!inStock}" :disabled="!inStock" @click="addToCart">Add
                Item</button>
            <button class="button" :class="{disabledButtom:!cart}" :disabled="!cart" @click="removeFromCart">Remove
                Item</button>

        </div>
    </div>
</div>`,
data() {
    return {
        
        //image: './assets/images/asr-1.jpg',
        brand: 'Doge',
        product: 'Mobile Phone',
        selectedVariant:0,
       // inStock: false,
        detail: ['8 GB RAM', '256 GB Storage', 'A15 Bionic Chip'],
        variant: [{ id: 1, color: '#B76E79', image: './assets/images/asr-1.jpg', quantity: 49 },
        { id: 2, color: '#FFD700', image: './assets/images/asr-2.jpg',quantity:100 },
        { id: 3, color: '#343d46', image: './assets/images/asr-3.jpg',quantity:0 }
        ]

    }
},
methods: {
    addToCart() {
        this.cart += 1
    },
    removeFromCart() {
        this.cart -= 1
    },
    updateVarient(index) {
        this.selectedVariant = index
    }

},
computed: {
    title(){
        return this.brand+' '+this.product
    },
    image(){
        return this.variant[this.selectedVariant].image
    },
    inStock(){
        return this.variant[this.selectedVariant].quantity
    }

}
})