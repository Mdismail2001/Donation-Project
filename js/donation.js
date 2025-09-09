
// card 1 doanation button event handler function
document.getElementById('card-1-btn').addEventListener('click', function(e){
    e.preventDefault();
    // button click checked
        // console.log('card 1 button clicked');
    const amount = parseFloat(document.getElementById('card-1-amount').value);
    const mainCurrentBalance = parseFloat(document.getElementById('main-current-balance').innerText);
    const cart1CurrentBalance = parseFloat(document.getElementById('cart-1-current-balance').innerText);
    // type of amount and amount checked
        // console.log( cart1CurrentBalance, typeof cart1CurrentBalance);

        // validation check
        if( !isNaN(amount) && amount <= mainCurrentBalance ){
            const newCart1Balance = cart1CurrentBalance + amount;
            const newMainBalance = mainCurrentBalance - amount;
            // update the new balance to the card-1 UI
            document.getElementById('cart-1-current-balance').innerText = newCart1Balance + ' BDT';
            // update the new balance to the main balance UI
            document.getElementById('main-current-balance').innerText = newMainBalance + ' BDT';

            // update the transaction history UI
            const historySection = document.getElementById('history-section');
            const div = document.createElement('div');
            div.innerText =`${amount}, Taka is Donated for Flood Noakhali, Bangladesh`;
            div.classList.add('border', 'p-2', 'my-2', 'rounded', 'bg-gray-100'); 

            // time added
            const time = document.createElement('span');
            const currentTime = new Date();
            time.innerText = ` Date: ${currentTime.toLocaleString()}`;
            time.classList.add('text-sm', 'text-gray-500' ,'gap-5');
            div.appendChild(time);
            historySection.appendChild(div);

            alert('Donation Successful');

        }else{
            alert('Please enter a valid amount');
        }
});



// card 2 doanation button event handler function
document.getElementById('card-2-btn').addEventListener('click', function(e){
    e.preventDefault();
    // button click checked
        // console.log('card 1 button clicked');
    const amount = parseFloat(document.getElementById('cart-2-amount').value);
    const mainCurrentBalance = parseFloat(document.getElementById('main-current-balance').innerText);
    const cart2CurrentBalance = parseFloat(document.getElementById('cart-2-current-balance').innerText);
    // type of amount and amount checked
        // console.log( cart1CurrentBalance, typeof cart1CurrentBalance);

        // validation check
        if( !isNaN(amount) && amount <= mainCurrentBalance ){
            const newCart1Balance = cart2CurrentBalance + amount;
            const newMainBalance = mainCurrentBalance - amount;
            document.getElementById('cart-2-current-balance').innerText = newCart1Balance + ' BDT';
            document.getElementById('main-current-balance').innerText = newMainBalance + ' BDT';

            // update the transaction history UI
            const historySection = document.getElementById('history-section');
            const div = document.createElement('div');
            div.innerText =`${amount}, Taka is Donated for Flood Relief in Feni, Bangladesh`;
            div.classList.add('border', 'p-2', 'my-2', 'rounded', 'bg-gray-100'); 
            
            // time added
            const time = document.createElement('span');
            const currentTime = new Date();
            time.innerText = ` Date: ${currentTime.toLocaleString()}`;
            time.classList.add('text-sm', 'text-gray-500' ,'gap-5');
            div.appendChild(time);
            historySection.appendChild(div);


            alert('Donation Successful');
        }else{
            alert('Please enter a valid amount');
        }
});



// card 3 doanation button event handler function
document.getElementById('card-3-btn').addEventListener('click', function(e){
    e.preventDefault();
    // button click checked
        // console.log('card 1 button clicked');
    const amount = parseFloat(document.getElementById('cart-3-amount').value);
    const mainCurrentBalance = parseFloat(document.getElementById('main-current-balance').innerText);
    const cart3CurrentBalance = parseFloat(document.getElementById('cart-3-current-balance').innerText);
    // type of amount and amount checked
        // console.log( cart1CurrentBalance, typeof cart1CurrentBalance);

        // validation check
        if( !isNaN(amount) && amount <= mainCurrentBalance ){
            const newCart1Balance = cart3CurrentBalance + amount;
            const newMainBalance = mainCurrentBalance - amount;
            document.getElementById('cart-3-current-balance').innerText = newCart1Balance + ' BDT';
            document.getElementById('main-current-balance').innerText = newMainBalance + ' BDT';

            // update the transaction history UI
            const historySection = document.getElementById('history-section');
            const div = document.createElement('div');
            div.innerText =`${amount}, Taka is Donated for Aid for Injoured in the Quota Movement, Bangladesh`;
            div.classList.add('border', 'p-2', 'my-2', 'rounded', 'bg-gray-100'); 
            
            // time added
            const time = document.createElement('span');
            const currentTime = new Date();
            time.innerText = ` Date: ${currentTime.toLocaleString()}`;
            time.classList.add('text-sm', 'text-gray-500' ,'gap-5');
            div.appendChild(time);
            historySection.appendChild(div);


            alert('Donation Successful');
        }else{
            alert('Please enter a valid amount');
        }
});