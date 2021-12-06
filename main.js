const app = Vue.createApp({
    data() {
        return {
            cart: 0,
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