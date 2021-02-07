class Calculation{

    constructor(prevOperandElement, currOperandElement){
        this.prevOperandElement = prevOperandElement;
        this.currOperandElement = currOperandElement;
        this. clearDisplay();
    }

    chooseOperation(operation) {
        if (this. currOperand === '') return;
        if (this. prevOperand !== '') {
            this.computeResult();
        }
        this.operation = operation;
        this. prevOperand = this. currOperand;
        this. currOperand = '';
    }

    computeResult() {
        let result;
        const previous = parseFloat(this. prevOperand);
        const current = parseFloat(this. currOperand);
        if (isNaN(previous) || isNaN(current)) return;
        switch (this.operation) {
            case '÷':
                result = previous / current;
                break;
            case '×':
                result = previous * current;
                break;
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            default:
                return;
        }
    this.currOperand = result;
    this.operation = undefined;
    this.prevOperand = '';    
    }

    decimalOutput(number) {
        const stringNumber = number.toString();
        const intDigits = parseFloat(stringNumber.split('.')[0]);
        const decDigits = stringNumber.split('.')[1];
        let intDisplay;
        if (isNaN(intDigits)) {
            intDisplay = '';
        } else {
            return number;
        }
        if (decDigits != null) {
            return `${intDisplay}.${decDigits}`;
        } else {
            return intDisplay;
        }
    }

    updateOutput() {
        this.currOperandElement.innerText = this.decimalOutput(this. currOperand);
        if (this.operation != null) {
            this.prevOperandElement.innerText = `${this.decimalOutput(this. prevOperand)} ${this.operation}`;
        } else {
            this.prevOperandElement.innerText = '';
        }
    }

    clearDisplay() {
        this.currOperand = '';
        this.prevOperand = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === '.' && this. currOperand.includes('.')) return;
        this. currOperand = this. currOperand.toString() + number.toString();
    }

    deleteNumber() {
        this. currOperand = this. currOperand.toString().slice(0, -1);
    }
}
const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const prevOperandElement = document.querySelector('[data-previous-operand]');
const currOperandElement = document.querySelector('[data-current-operand]');

const calculations = new Calculation(prevOperandElement, currOperandElement);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculations.appendNumber(button.innerText);
        calculations.updateOutput();
    });
});

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculations.chooseOperation(button.innerText);
        calculations.updateOutput();
    });
});

equalBtn.addEventListener('click', button => {
    calculations.computeResult();
    calculations.updateOutput();
});

clearBtn.addEventListener('click', button => {
    calculations. clearDisplay();
    calculations.updateOutput();
});

deleteBtn.addEventListener('click', button => {
    calculations.deleteNumber();
    calculations.updateOutput();
});
