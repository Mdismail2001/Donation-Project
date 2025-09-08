
// get the donation button id for add event listener
document.getElementById('donation-btn').addEventListener('click', function(){
    // call the function which is come from  utilitiz.js file and pass the id
    // console.log('donation button click');
    pageRelod('card-section');
});


//get the history button id for add event listener  
document.getElementById('history-btn').addEventListener('click', function(){
    console.log('history button click');
    // call the function which is come from  utilitiz.js file and pass the id
    pageRelod('history-section');
})


// get the blog button id for add event listener
document.getElementById('blog-btn').addEventListener('click', function(){
    console.log('blog button click');
    // call the function which is come from  utilitiz.js file and pass the id
    pageRelod('blog-section');
})

