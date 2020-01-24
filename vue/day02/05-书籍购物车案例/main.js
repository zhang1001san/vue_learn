const app=new Vue({
  el:'#app',
  data:{
    shoppingCart:[
      {id:1,name:'算法导论',publishData:'2020-1-1',price:100,quantity:1},
      {id:2,name:'effective java',publishData:'2010-1-1',price:50,quantity:1},
      {id:3,name:'kafka实战',publishData:'2018-1-1',price:80,quantity:1}
    ]
  },
  methods:{
    increment(item){
      item.quantity++;
    },
    decrement(index){
        this.shoppingCart[index].quantity--;
    },
    removeItem(index){
      this.shoppingCart.splice(index,1);
    }
  },
  computed:{
    totalPrice(){
      let totalPrice=0;
      for(let item of this.shoppingCart){
        totalPrice+=item.price*item.quantity;
      }
      return totalPrice;

      // if(this.shoppingCart.length==0){
      //   return 0;
      // }
      // return  this.shoppingCart.map(book=>book.price*book.quantity).reduce((prev,current)=>{
      //   return prev+current;
      // })
    }
  },
  filters:{
    showPrice(price){
      return "￥"+price.toFixed(2);
    }
  }
});