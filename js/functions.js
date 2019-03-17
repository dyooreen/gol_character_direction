function WriteDirections(newX, newY) {
    var thisX = newX - redGlassArr[0].x
    var thisY = newY - redGlassArr[0].y;
    if (thisX > 0) {
        thisX = Math.abs(thisX);
        thisX = thisX.toString();
        thisX = `+ ${thisX}`
    }
    else if (thisX == 0) {
        thisX = ""
    }
    else if (thisX < 0) {
        thisX = Math.abs(thisX);
        thisX = thisX.toString();
        thisX = `- ${thisX}`
    }
    if (thisY > 0) {
        thisY = Math.abs(thisY);
        thisY = thisY.toString();
        thisY = `+ ${thisY}`
    }
    else if (thisY == 0) {
        thisY = " "
    }
    else if (thisY < 0) {
        thisY = Math.abs(thisY);
        thisY = thisY.toString();
        thisY = `- ${thisY}`
    }
    $("#div2").append(`
        <code class="dirElem" data-x="${newX}" data-y="${newY}">    
        [this.x ${thisX},this.y ${thisY}],
        </code>`)
}
function DeleteDirections(x, y) {
    var count = $("#div2 .dirElem")
    for (var i = 0; i < count.length; i++) {
        var newX = count[i].attributes[1].nodeValue;
        var newY = count[i].attributes[2].nodeValue
        if (newX == x && newY == y) {
            count[i].remove()
        }
    }
}
function CreateMatrix(m) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }
    matrix[Math.floor(m / 2)][Math.floor(m / 2)] = 1
    return matrix;
}

$("#copycode").on("click", () => {
    var div1 = $("#div1")[0].innerText
    var div2 = $("#div2")[0].innerText
    var div3 = $("#div3")[0].innerText
    var copycode = div1 + "\n" + div2 + "\n" + div3 + "\n";
    var tempElement = $('<textarea>').val(copycode).appendTo('body').select();
    document.execCommand('copy');
    tempElement.remove();
})
$("#menu").on("click", () => {
    $("#main").css("margin-right", "0")
    $("#defaultCanvas0").css("z-index","-1")
})
$("#close").on("click", () => {
    $("#main").css("margin-right", "-470px")
})

function randomNum(){
    var x = Math.floor(Math.random() * 15 + 3);
    if(x % 2 == 1){
        return x;
    }
    else if(x % 2 == 0){
        return x +=1;
    }
}
    