
Component.register('my-custom-page', {
    

    methods: {
        createdComponent() {
            // call the $tc helper function provided by Vue I18n 
            const myCustomText = this.$tc('detail.addProduct');

            console.log(myCustomText);
        }
    }
    
});

//let button= document.querySelector('.btn-buy');
//button.addEventListener('click', () => button.getElementsByClassName.backgroundColor = 'Lightgreen')