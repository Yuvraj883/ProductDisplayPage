const app = Vue.createApp({
    data(){
        return{
            cart :0,
            image:'./assets/images/asr-1.jpg',
            product : 'Mobile Phone',
            inStock: true,
            detail: ['8 GB RAM', '256 GB Storage', 'A15 Bionic Chip'],
            variant:[{id:1, color:'#B76E79',image:'./assets/images/asr-1.jpg' },
            {id:2, color:'#343d46',image:'./assets/images/asr-2.jpg' },
            {id:3, color:'#FFFFFF',image:'./assets/images/asr-3.jpg' }
        ]

        }
    },
    methods: {
        addToCart(){
            this.cart +=1
        },
        removeFromCart(){
            this.cart -=1
        },
        updateImage(variantImage){
this.image = variantImage
        }

    }
})