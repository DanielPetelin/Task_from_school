let mass = [];

function inSq() {
    let result = document.querySelector('.num').value *= document.querySelector('.num').value;

    mass.push(1);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 1 )';
};

function del() {
    let result = document.querySelector('.num').value -= 5;

    mass.push(2);
    document.querySelector('#out').innerHTML = result + ' ваш выбор ( 2 )';
};

// console.log(mass);

function push() {
    let yourNum = document.querySelector('#yourNum').value;
    yourNum = mass;
    console.log(yourNum);

    if (yourNum == 21221) {
        document.querySelector('#out2').innerHTML = 'Вы победили!';
    } else {
        document.querySelector('#out2').innerHTML = 'Это неправильно! Попробуйте ещё раз.';
    };
};