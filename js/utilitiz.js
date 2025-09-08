
// this function for rimove page using id 
function pageRelod(id){
    // check the id
    // console.log(id);

    // hide both section first
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');

    // show the section which id is passed in the function for clicked button
    document.getElementById(id).classList.remove('hidden');
};



function pageRelod(id){
    // check the id
    // console.log(id);

    // hide both section first
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');


    // show the section which id is passed in the function for clicked button
    document.getElementById(id).classList.remove('hidden');
};

//  this function for change button color when clicked
function buttonColorChange(id){
    // console.log(id);
    
    // first remove all button bg color
    document.getElementById('donation-btn').classList.remove('bg-green-400');
    document.getElementById('history-btn').classList.remove('bg-green-400');
    // document.getElementById('blog-btn').classList.remove('bg-green-400');

    // then add the bg color to the clicked button using id
    document.getElementById(id).classList.add('bg-green-400');
};
