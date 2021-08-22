// memory information

// 8Gb memory  
const zeroPriceMemory =document.getElementById('zero-price-memory');

// 16Gb memory 
const firstPriceMemory =document.getElementById('first-price-memory');

// extra-memory-cost
const extraMemoryPrice = document.getElementById('extra-price-memory')

// no extra memory cost function
zeroPriceMemory.addEventListener('click',function(){
    extraMemoryPrice.innerText = '0';
    updateTotal ();
});

// extra memory cost function
firstPriceMemory.addEventListener('click',function(){
    extraMemoryPrice.innerText = '180';
    updateTotal();
});


// ssd information

// 256Gb ssd  
const zeroPriceSsd =document.getElementById('zero-price-ssd');

// 512Gb ssd 
const firstPriceSsd =document.getElementById('first-price-ssd');

// 1TB ssd 
const secondPriceSsd =document.getElementById('second-price-ssd');

// extra-ssd-cost
const extraPriceSsd = document.getElementById('extra-price-ssd')

// no extra memory cost function
zeroPriceSsd.addEventListener('click',function(){
    extraPriceSsd.innerText = '0';
    updateTotal ();
    
});


// extra ssd cost function-1
firstPriceSsd.addEventListener('click',function(){
    extraPriceSsd.innerText = '100';
    updateTotal();
});
// extra ssd cost function-2
secondPriceSsd.addEventListener('click',function(){
    extraPriceSsd.innerText = '180';
    updateTotal();
});

// delivey
const zeroPriceDelivery =document.getElementById('zero-price-delivery');
const firstPriceDelivery =document.getElementById('first-price-delivery');

// delivery-charge
const  deliveryCharge= document.getElementById('delivery-charge')
// const  deliveryCharge1= document.getElementById('delivery-charge')

zeroPriceDelivery.addEventListener('click',function(){
    deliveryCharge.innerText = '0';
    updateTotal ();
});

firstPriceDelivery.addEventListener('click',function(){
    deliveryCharge.innerText = '20';
    updateTotal ();
});
// make-book- fixed-price
const fixedPrice = document.getElementById('make-book-price');
const fixedPriceText=fixedPrice.innerText;
const fixedPriceNumber = parseInt(fixedPriceText);
// total-price update
const total = document.getElementById ("total-price");
function updateTotal (){
    const totalMemoryPrice = Number (extraMemoryPrice.innerText);
    const totalSsdPrice = Number (extraPriceSsd.innerText);
    const totalDeliveryPrice = Number (deliveryCharge.innerText);
    grandTotal = totalMemoryPrice + totalSsdPrice + totalDeliveryPrice +fixedPriceNumber;
    total.innerText =grandTotal;

}





