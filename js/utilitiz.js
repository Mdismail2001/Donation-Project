
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



