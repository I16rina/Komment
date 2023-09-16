// счетчик лайков комментария

const likePlus = document.querySelector('.img-plus');
const likeMinus = document.querySelector('.img-minus');

let output = document.querySelector('.counter-input');

likePlus.addEventListener('click', plus);
likeMinus.addEventListener('click', minus);

function plus() {
    let result = Number(output.innerHTML) + 1;

    if (result >= 0) {
        output.innerHTML = result;
    }
}

function minus() {
    let result = Number(output.innerHTML) - 1;
    output.innerHTML = result;
}

// счетчик лайков ответа на комментарий

const likePlusAnswer = document.querySelector('.img-plus-answer');
const likeMinusAnswer = document.querySelector('.img-minus-answer');

let outputAnswer = document.querySelector('.counter-input-answer');

likePlusAnswer.addEventListener('click', plusAnswer);
likeMinusAnswer.addEventListener('click', minusAnswer);

function plusAnswer() {
    let result = Number(outputAnswer.innerHTML) + 1;

    if (result >= 0) {
        outputAnswer.innerHTML = result;
    }
}

function minusAnswer() {
    let result = Number(outputAnswer.innerHTML) - 1;
    outputAnswer.innerHTML = result;
}