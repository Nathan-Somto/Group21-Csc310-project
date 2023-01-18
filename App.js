                                        /*
                                        WELCOME TO THE JAVASCRIPT FILE FOR MY IMPLEMENTATION  OF AN IOS CALCULATOR
                                          */
// all the elements in the HTML that we would like to manipulate
const current = document.getElementById("currentOperand");
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const clear = document.getElementById('allClear');
const expression = document.getElementById("expression");
const clearError = document.getElementById('clear');
const equal = document.getElementById('equals');

// created a Calculator class
class Calculator {
    constructor (){
        this.previousOperand = "";
        this.currentOperand = "";
        this.operator = '';
    }
    // method to handle the updating of the display for the calculator
    updateDisplay(e)
    {
        if(this.currentOperand && this.currentOperand.length > 0)
        {

        current.textContent = `${this.currentOperand}`;
    
    }
     if(this.previousOperand != '' && this.operand != '')
    {
        expression.textContent = `${this.previousOperand}${this.operand}`;
    }
        else{
            return;
        }
    }
    // handles the resetting of the calculator
    clear(e)
    {
        expression.textContent = '';
        current.textContent = '0';
        this.previousOperand = '';
        this.currentOperand = '';
        this.operand = '';
    }
    // makes use of the three object properties to handle calculation.
    // for the scientific calculator more features will be added here
    Operate(){
        let evaluate;
        const a = parseFloat(this.previousOperand);
        const b = parseFloat(this.currentOperand);
        switch(this.operand){
            case '+' :
                evaluate = a + b;
                break;
            case '-':
                evaluate = a -b;
                break;
            case '/' :
                if (b === 0) 
                 {
                    this.clear();
                    alert("Division error");
                    this.previousOperand = 0;
                    return 0;
                 }
                else{
                evaluate = a / b;
                }
                break;
            case '*':
                evaluate = a*b;
                break;
            case '%' :
                evaluate = a % b;
                break;
            default :
            this.updateDisplay();
            return this.currentOperand;
        }
        this.previousOperand = evaluate;
        this.currentOperand = '';
        this.operand = '';
        return evaluate;

    }
    // this method is called when the user selects an Operator 
    //which breaks off the appending of the first operand
    chooseOperator(e){
        if(this.currentOperand != "")
        {
        this.previousOperand = this.currentOperand;
        }
        if (current.textContent === '0'){
            this.previousOperand = "0";
        }
        this.currentOperand = "";
        this.operand =e.target.dataset.operator.toString();
        current.textContent = "";
    }
   // this is where the numbers for operand 1 and 2 are appended to create digits
    appendNumber(e)
    {
        let Number = e.target.dataset.number;
        let Dot = this.currentOperand.split('.');
     if (Dot.length > 1 && Number === '.') 
     {
         return;
        }
        this.currentOperand += Number.toString();
        this.updateDisplay(e);
    }
   // method is called when the user clicks the equals to button evaluates the expression
    evaluate()
    {
        current.textContent = '';
        current.textContent = `${this.Operate()}`;
        this.updateDisplay();
    }
    // the change sign button has not been fully implemented as of yet
    clearE()
    {
        if (typeof this.currentOperand != 'string')
        {
            this.currentOperand = this.currentOperand.toString();
            
        }
        this.currentOperand = this.currentOperand.slice(0, this.currentOperand.length-1);
        current.textContent=`${this.currentOperand}`;
   
}
}
// this where we create a calc object that will make use of the Calculator class methods
const calc = new Calculator();
// event listeners
// Due to the fact that this looses it meaning when called directly in a function
// we have to wrap it in an Anon Function
// goes through all the number buttons appends a number
numbers.forEach((number) =>{number.addEventListener('click',(e) => {calc.appendNumber(e)})});

    // An eventListener to look out for click events on the operator buttons
        operators.forEach( 
            operator => 
            {
                operator.addEventListener('click' , 
                (e) => 
                {
                    calc.chooseOperator(e)
                })
            }
            );
//An eventListener to look out for click events on the change sign button
clearError.addEventListener('click',
(e) =>
{ 
    calc.clearE();
}
);
// looks out for the equal to button when it is clicked.
equal.addEventListener('click',
 (e) => 
{
    calc.evaluate(e)
}
);
// for the all clear button resets the calculator
clear.addEventListener('click',(e) => 
{
    calc.clear(e)
}
);
// still looking for how to add  a clear button

// this will be displayed in the console to show that it is working
console.log("working");