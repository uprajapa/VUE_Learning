var app = new Vue({
    el: '#app',
    data: {
        name: 'Urvish',
        imageSource: 'img/1.jpg',
        images: [ 
            {
            imgId: 1,
            imgSrc: 'img/1.jpg'
            },
            {
            imgId: 2,
            imgSrc: 'img/2.jpg'
            }
        ]   ,
        
    },
    methods:{
        updateImg: function(imgSrc){
            this.imageSource = imgSrc 
        }            
    }     
})
