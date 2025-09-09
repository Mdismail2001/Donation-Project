
// get the donation button id for add event listener
document.getElementById('donation-btn').addEventListener('click', function(){
    // call the function which is come from  utilitiz.js file and pass the id
    // console.log('donation button click');
    pageRelod('card-section');
});


//get the history button id for add event listener  
document.getElementById('history-btn').addEventListener('click', function(){
    // console.log('history button click');
    // call the function which is come from  utilitiz.js file and pass the id
    pageRelod('history-section');
})


// get the blog button id for add event listener 
document.getElementById('blog-btn').addEventListener('click', function(){
    // console.log('blog button click');
    // call the function which is come from  utilitiz.js file and pass the id
    pageRelod('blog-section');
})


            // button  bg color change function



// this function for change button color when clicked
document.getElementById('donation-btn').addEventListener('click', function(){
    buttonColorChange('donation-btn');
});



// this function for change button color when clicked
document.getElementById('history-btn').addEventListener('click', function(){
    buttonColorChange('history-btn');
});


// this function for change button color when clicked
document.getElementById('blog-btn').addEventListener('click', function(){
    buttonColorChange('blog-btn');
});


// alert box colse button event handler
document.getElementById('colse-alert-btn').addEventListener('click', function(){
    document.getElementById('alert-box').classList.add('hidden');
});
