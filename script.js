let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string); // eval metod evaluate(addition, substraction, multiply, devide) the value of
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'AC') {
           string= "";
            document.querySelector('input').value = string;
            console.log(e.target); // target returns the element
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    })

});
