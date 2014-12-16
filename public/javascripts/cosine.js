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
    document.getElementById("answerLocation").innerHTML = "<strong>Answer:</strong> " + text;
}

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

    // console.log("Array to add: " + insertedArray);
    dataSet.push(insertedArray);
    console.log(dataSet);
    return dataSet;
    // return insertedArray;
}

// Prints the results of the textbox calculation
function printIndexResult(text) {
    document.getElementById("answerIndexLocation").innerHTML = "<strong>Answer:</strong> " + text;
}

var dataSet = [
[2, 5, 3, 0, 8, 10, 1, 7, 6, 9], [8, 3, 7, 1, 9, 0, 6, 4, 2, 5],
[7, 9, 0, 10, 5, 6, 4, 8, 3, 2], [5, 0, 7, 4, 1, 10, 9, 8, 2, 3],
[7, 4, 1, 9, 5, 10, 0, 3, 2, 6], [5, 0, 8, 9, 10, 1, 7, 3, 2, 4],
[8, 5, 6, 3, 10, 4, 9, 2, 1, 7], [0, 6, 1, 7, 4, 10, 8, 3, 9, 5],
[5, 2, 1, 7, 0, 9, 3, 6, 8, 10], [2, 0, 7, 8, 5, 1, 4, 3, 6, 10],
[3, 7, 4, 0, 10, 5, 1, 2, 6, 9], [6, 1, 7, 3, 10, 9, 4, 2, 5, 8],
[5, 9, 0, 4, 2, 1, 3, 8, 10, 7], [0, 5, 8, 7, 6, 1, 9, 4, 10, 3],
[0, 3, 6, 7, 2, 9, 8, 4, 1, 5], [1, 9, 3, 2, 8, 0, 7, 4, 10, 5],
[1, 9, 4, 2, 5, 0, 6, 3, 8, 7], [2, 1, 5, 4, 9, 6, 0, 3, 7, 8],
[9, 3, 4, 6, 10, 1, 7, 0, 2, 5], [8, 5, 2, 1, 7, 9, 10, 4, 0, 3],
[6, 8, 5, 4, 2, 1, 0, 7, 10, 3], [7, 3, 0, 5, 10, 2, 1, 8, 6, 9],
[4, 9, 3, 5, 1, 7, 0, 8, 6, 2], [0, 8, 5, 7, 2, 6, 3, 4, 9, 1],
[10, 8, 6, 0, 1, 5, 2, 3, 9, 4], [8, 0, 7, 6, 5, 9, 3, 1, 2, 4],
[8, 0, 5, 3, 7, 6, 10, 2, 1, 4], [6, 2, 10, 7, 0, 9, 8, 3, 4, 1],
[8, 6, 2, 9, 5, 7, 1, 3, 4, 0], [2, 6, 4, 8, 3, 0, 7, 10, 1, 9],
[6, 2, 4, 3, 5, 9, 8, 0, 7, 1], [9, 3, 10, 0, 6, 2, 8, 1, 5, 4],
[10, 2, 8, 0, 5, 4, 3, 7, 9, 1], [2, 9, 7, 6, 3, 0, 1, 5, 4, 10],
[8, 4, 5, 9, 3, 1, 6, 10, 2, 7], [5, 0, 1, 4, 7, 2, 3, 10, 9, 8],
[7, 2, 9, 1, 10, 5, 8, 4, 3, 0], [3, 8, 4, 1, 9, 7, 2, 5, 10, 0],
[4, 6, 7, 3, 10, 2, 8, 9, 1, 5], [9, 8, 4, 0, 3, 10, 7, 6, 2, 1],
[10, 8, 3, 5, 2, 1, 0, 7, 9, 4], [4, 5, 9, 7, 3, 8, 2, 6, 1, 10],
[8, 6, 1, 10, 7, 5, 3, 2, 0, 4], [4, 3, 5, 7, 0, 10, 8, 1, 6, 2],
[4, 5, 8, 0, 9, 3, 10, 6, 2, 7], [7, 1, 4, 2, 5, 3, 8, 6, 0, 9],
[9, 10, 1, 3, 5, 6, 4, 7, 8, 2], [1, 0, 10, 2, 3, 8, 9, 5, 6, 7],
[2, 1, 7, 9, 10, 3, 4, 5, 6, 8], [4, 3, 10, 9, 1, 7, 5, 0, 2, 8]];