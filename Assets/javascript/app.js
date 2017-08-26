function getQuestionHTML() {
    return "something";
}

function loadQuestions(questions) {
    shuffle(questions);
    for (var i in questions) {
        var header = $("<h2/>").html(questions[i].question);
        questions[i].others.push(questions[i].answer);
        shuffle(questions[i].others);
        var answers = questions[i].others.map(function (a) {
            return $("<input type='radio' name='question" + i + "' value='" + a + "'/>").data('correct', questions[i].answer === a); //Change format to <div><label/><input/></div>
        });
        $('.questions').append(header);
        for (var j in answers) {
            $('.questions').append(answers[j]);
        }
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

$(function () {
    $.getJSON('Assets/javascript/questions.json', loadQuestions);

});
