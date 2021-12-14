const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


let itemContent = document.getElementById("item-holder");
itemContent = '';

for(let i = 1; i < (items.length + 1); i++){
    if(i == 1){
        itemContent += `
        <div class="sliderdimension" id="items${i}">
            <div class="up"><i class="bi bi-arrow-up"></i></div>
            <img src="img/0${i}.jpg" class="w-100 h-100" alt="">
        </div>`
    }else if(i == 5){
        itemContent += `
        <div class="sliderdimension" id="items${i}">
            <div class="down"><i class="bi bi-arrow-down"></i></div>
            <img src="img/0${i}.jpg" class="w-100 h-100" alt="">
        </div>`
    }else{
        itemContent += `
            <div class="sliderdimension" id="items${i}">
                <img src="img/0${i}.jpg" class="w-100 h-100" alt="">
            </div>`
    }
}

const itemsContainer = document.querySelector('.items-container');
itemsContainer.innerHTML = itemContent;