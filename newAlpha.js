const newAlpha = (str) => {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var newAlpha = 'bcdEfghIjklmnOpqrstUvwxyzA';
    var answer = '';

    for (var i = 0; i < str.length; i++) {
        var index = alpha.indexOf(str[i]);
        if (index !== -1) {
            answer += newAlpha[index];
        } else {
            answer += str[i];
        }
    }
    return answer;
}


console.log(newAlpha('abcABC'))