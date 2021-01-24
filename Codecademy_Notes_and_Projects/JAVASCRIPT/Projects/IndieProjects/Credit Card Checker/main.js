// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] // is invalid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] // is valid
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] // is invalid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] // is invalid
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] // is valid
const mystery6 = [7, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] // is valid


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6]


// Add your functions below:

function validateCred(array) {

    let testArray = [];
    for (let i = array.length - 1; i >= 0; i -= 2) {
        testArray.unshift(array[i]);
        
        if (!((i-1) < 0)) {
            let x = array[i-1];
            x *= 2;

            if (x > 9) {
                x -= 9;
            }

            testArray.unshift(x);
        }
        
    }

    // console.log(testArray);

    let sum = testArray.reduce(function(a,b) {
        return a + b    
    }, 0);

    // console.log(`Sum of "testArray" : ${sum}`);
    // console.log(`Modulo: ${sum % 10}`);

    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    }

};

function findInvalidCards(arrayBatch) {
    let invalidList = [];

    for (let i = 0; i < arrayBatch.length; i++) {
        if (validateCred(arrayBatch[i]) === false) {
            invalidList.push(arrayBatch[i]);
        }
    }

    return invalidList;
}

function idInvalidCardCompanies(arrayBatch) {
    let companyList = [];

    const amex = cardNumber => cardNumber[0] === 3;
    const visa = cardNumber => cardNumber[0] === 4;
    const masterCard = cardNumber => cardNumber[0] === 5;
    const discover = cardNumber => cardNumber[0] === 6;
    const other = cardNumber => cardNumber[0] < 3 || cardNumber[0] > 6;

    if (arrayBatch.some(amex)) {
        companyList.push(`American Express`);
    } 
    if (arrayBatch.some(visa)) {
        companyList.push(`Visa`);
    } 
    if (arrayBatch.some(masterCard)) {
        companyList.push(`Mastercard`);
    } 
    if (arrayBatch.some(discover)) {
        companyList.push(`Discover`);
    } 
    if (arrayBatch.some(other)) {
        companyList.push(`Company not found`);
    }

    return console.log(`List of companies that have sent out invalid card numbers: ${companyList.join(", ")}`);
    
}

// console.log(validateCred(mystery5));
// console.log(findInvalidCards(batch));
idInvalidCardCompanies(findInvalidCards(batch));




