// Dot product
function dotProductVectors(vectors) {
    product = 0;
    for (var j = 0; j < vectors[0].length; j++) {
        vect = 1;
        for (var i = 0; i < vectors.length; i++) {
            vect *= vectors[i][j];
        };
        product += vect;
    }
    return product;
}

// Calculates the magnitude
function magnitude(vector) {
    return Math.sqrt(dotProductVectors([vector, vector])); 
}

// Actual calculation of the consine similarity
function calculateCosine(vectors) {
    var dot_product = dotProductVectors(vectors);
    var magnitudes = 1;

    for (var i = 0; i < vectors.length; i++) {
        magnitudes *= magnitude(vectors[i]);
    }
    console.log(dot_product/magnitudes);
    return dot_product/magnitudes;
}

// Reads the text in the textbox as long as they're space separated
function readVectorsFromTextBox() {
    var formattedVectorArray = [];
    var textBoxVectorStrings = document.getElementById("vectorBox").value.split("\n");
    for (var i = 0; i < textBoxVectorStrings.length; i++) {
        var lineVectors = textBoxVectorStrings[i].split(" ");
        var lineNumVector = [];
        for (var j = 0; j < lineVectors.length; j++) {
            lineNumVector.push(Number(lineVectors[j]));
        };
        formattedVectorArray.push(lineNumVector);
    };
    console.log(formattedVectorArray);
    return formattedVectorArray;
}

// Prints the results of the textbox calculation
function printTextBoxResult(text) {
    document.getElementById("answerLocation").innerHTML = 
        "<strong>Answer:</strong> " + text;
}

// Reads the values in the single text boxes, and adds them 
// to the data set of 50 documents.
// You can add more documents and have them appened to the set as well.
function readVectorFromIndexes() {
    var insertedArray = [];
    insertedArray.push(Number(document.getElementById("t1").value));
    insertedArray.push(Number(document.getElementById("t2").value));
    insertedArray.push(Number(document.getElementById("t3").value));
    insertedArray.push(Number(document.getElementById("t4").value));
    insertedArray.push(Number(document.getElementById("t5").value));
    insertedArray.push(Number(document.getElementById("t6").value));
    insertedArray.push(Number(document.getElementById("t7").value));
    insertedArray.push(Number(document.getElementById("t8").value));
    insertedArray.push(Number(document.getElementById("t9").value));
    insertedArray.push(Number(document.getElementById("t10").value));

    dataSet.push(insertedArray);
    console.log(dataSet);
    return dataSet;
}

// Prints the results of the textbox calculation
function printIndexResult(text) {
    document.getElementById("answerIndexLocation").innerHTML = 
        "<strong>Answer:</strong> " + text;
}

// This is my data set of 50 documents
var dataSet = [
[8, 9, 10, 5, 4, 1, 6, 7, 3, 2], [5, 1, 8, 7, 4, 2, 6, 10, 3, 9],
[1, 3, 2, 6, 7, 8, 5, 10, 4, 9], [3, 7, 9, 2, 8, 6, 10, 4, 1, 5],
[9, 3, 2, 1, 6, 5, 4, 8, 7, 10], [4, 7, 9, 10, 6, 1, 2, 5, 8, 3],
[5, 3, 7, 2, 1, 4, 8, 6, 9, 10], [4, 10, 2, 3, 1, 8, 6, 9, 5, 7],
[7, 4, 6, 1, 2, 5, 9, 10, 3, 8], [6, 1, 2, 10, 3, 8, 9, 7, 4, 5],
[2, 10, 8, 7, 4, 9, 1, 5, 6, 3], [5, 9, 6, 1, 10, 4, 3, 8, 2, 7],
[1, 3, 9, 5, 10, 4, 8, 2, 7, 6], [4, 7, 10, 5, 2, 1, 3, 6, 9, 8],
[4, 3, 5, 2, 10, 8, 6, 1, 9, 7], [7, 1, 10, 5, 2, 8, 4, 6, 9, 3],
[9, 7, 4, 8, 2, 1, 10, 6, 3, 5], [1, 8, 10, 9, 3, 6, 4, 5, 2, 7],
[4, 3, 2, 5, 9, 6, 1, 8, 7, 10], [4, 2, 9, 7, 8, 10, 3, 1, 5, 6],
[3, 9, 5, 2, 8, 10, 1, 7, 6, 4], [3, 9, 6, 5, 1, 7, 4, 8, 10, 2],
[6, 10, 1, 8, 3, 7, 9, 2, 5, 4], [10, 9, 3, 6, 5, 4, 2, 8, 7, 1],
[1, 6, 8, 3, 5, 4, 9, 10, 2, 7], [8, 3, 9, 10, 4, 5, 6, 7, 2, 1],
[7, 9, 1, 3, 6, 8, 4, 5, 2, 10], [3, 5, 10, 9, 1, 2, 6, 4, 8, 7],
[10, 1, 5, 6, 7, 9, 3, 8, 4, 2], [9, 3, 1, 2, 5, 8, 6, 7, 10, 4],
[7, 5, 8, 9, 10, 1, 3, 2, 6, 4], [9, 8, 6, 7, 3, 5, 1, 2, 4, 10],
[5, 1, 8, 9, 10, 3, 4, 7, 6, 2], [5, 2, 1, 7, 9, 4, 3, 6, 10, 8],
[1, 9, 5, 6, 4, 10, 8, 2, 7, 3], [4, 9, 6, 8, 5, 3, 7, 10, 2, 1],
[7, 6, 8, 2, 10, 1, 3, 9, 4, 5], [9, 7, 5, 8, 4, 6, 3, 10, 1, 2],
[3, 2, 5, 1, 6, 8, 7, 10, 9, 4], [3, 7, 6, 5, 8, 4, 10, 1, 9, 2],
[3, 9, 4, 7, 2, 8, 1, 6, 10, 5], [6, 3, 2, 9, 5, 4, 8, 1, 7, 10],
[10, 9, 4, 3, 1, 5, 6, 2, 8, 7], [6, 10, 8, 5, 3, 4, 9, 1, 2, 7],
[10, 6, 7, 8, 3, 9, 1, 5, 2, 4], [4, 5, 1, 7, 9, 6, 3, 10, 2, 8],
[8, 4, 7, 5, 3, 10, 9, 1, 6, 2], [4, 6, 7, 10, 3, 8, 2, 5, 9, 1],
[8, 10, 2, 4, 3, 6, 5, 9, 7, 1], [9, 3, 1, 10, 8, 5, 6, 7, 4, 2]];


/* Irrelevant code only meant for prettifying */

// Email sender with the contents of the mailing list
// Gets whatever text you've entered and adds that to a mailto link
function sendEmail() {
    var e = window.document.getElementById("email-reason");
    var title = e.options[e.selectedIndex].text;
    window.location='mailto:no-reply@jonalmeida.com?subject=' + 
        title + '&body=' + window.document.getElementById("emailText").value;
}