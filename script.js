let questions = [
    {
        "question": "Was sind Vorteile eines CMS gegenüber einem statischen Internetauftritt?",
        "answer_1": "Einfache Erweiterbarkeit durch modulares System",
        "answer_2": "Einfache Erweiterbarkeit durch integrales System",
        "answer_3": "Single-User-Zugriff für effizientes Arbeiten",
        "answer_4": "Aktualisierung der Inhalte nur durch den Dienstleister",
        "right_answer": 1

    },

    {
        "question": "Für welche Bereiche bietet sich ein CMS an?",
        "answer_1": "Als Suchmaschine für Firmen-Webseiten",
        "answer_2": "Dateiablage privater Personen",
        "answer_3": "Vereins-Hompages",
        "answer_4": "keine",
        "right_answer": 3

    },

    {
        "question": "Strukturierte und objektorientierte Programmierung?",
        "answer_1": "Phyton",
        "answer_2": "C++",
        "answer_3": "Delphi",
        "answer_4": "Java",
        "right_answer": 2

    },

    {
        "question": "Welche Aussagen zum Refactoring sind richtig?",
        "answer_1": "Die Funktionalitäten der Software dürfen dabei verändert werden.",
        "answer_2": "Das Refactoring ist eine Methode, um neue Software vor der Veröffentlichung zu optimieren.",
        "answer_3": "Der Quellcode wird analysiert, aber darf nicht verändert werden.",
        "answer_4": "Das Refactoring ist eine Methode, um bestehende Software nachträglich zu verbessern.",
        "right_answer": 4

    },

    {
        "question": "Was sind Vorteile eines CMS gegenüber einem statischen Internetauftritt?",
        "answer_1": "Einfache Erweiterbarkeit durch modulares System",
        "answer_2": "Einfache Erweiterbarkeit durch integrales System",
        "answer_3": "Single-User-Zugriff für effizientes Arbeiten",
        "answer_4": "Aktualisierung der Inhalte nur durch den Dienstleister",
        "right_answer": 1

    },

    {
        "question": "Für welche Bereiche bietet sich ein CMS an?",
        "answer_1": "Als Suchmaschine für Firmen-Webseiten",
        "answer_2": "Dateiablage privater Personen",
        "answer_3": "Vereins-Hompages",
        "answer_4": "keine",
        "right_answer": 3

    },

    {
        "question": "Strukturierte und objektorientierte Programmierung?",
        "answer_1": "Phyton",
        "answer_2": "C++",
        "answer_3": "Delphi",
        "answer_4": "Java",
        "right_answer": 2

    },

    {
        "question": "Welche Aussagen zum Refactoring sind richtig?",
        "answer_1": "Die Funktionalitäten der Software dürfen dabei verändert werden.",
        "answer_2": "Das Refactoring ist eine Methode, um neue Software vor der Veröffentlichung zu optimieren.",
        "answer_3": "Der Quellcode wird analysiert, aber darf nicht verändert werden.",
        "answer_4": "Das Refactoring ist eine Methode, um bestehende Software nachträglich zu verbessern.",
        "right_answer": 4

    },
]

let currentquestion = 0;
let rightquestions = 0;

let Audiosucces= new Audio('sound/right.mp3');
let Audiofail =  new Audio('sound/wrong.mp3');

function init() {
    document.getElementById('zahl').innerHTML = questions.length;



    showquestion();

}


function showquestion() {

    if (currentquestion >= questions.length) {

        document.getElementById('end-body').style = '';
        document.getElementById('question-body').style = 'display : none;';
        document.getElementById('zahl-question').innerHTML = questions.length;
        document.getElementById('amount-of-right-question').innerHTML = rightquestions;
        document.getElementById('bild-end').src = 'img/pokal.png';
        document.getElementById('progress-bar').style = 'width: 100%;';
        document.getElementById('progress-bar').innerHTML = `100%`;
    } else {

        let percent = currentquestion / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;

        let question = questions[currentquestion];
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

        document.getElementById('number-of-question').innerHTML = currentquestion + 1;


    }
}




function answer(selection) {
    let question = questions[currentquestion];
    console.log('selected answer is', selection)
    let selectedquestionnumber = selection.slice(-1);
    console.log('selectedquestionnumber is', selectedquestionnumber)
    console.log('current question is', question['right_answer']);


    let idwithrightanswer = `answer_${question['right_answer']}`;

    if (selectedquestionnumber == question['right_answer']) {
        document.getElementById(selection).classList.add('btn-success');
        console.log('Richtige Antwort');
        rightquestions++;

        Audiosucces.play();


    } else {
        console.log('Falsche Antwort!!!');
        document.getElementById(selection).classList.add('btn-danger');
        document.getElementById(idwithrightanswer).classList.add('btn-success');
        Audiofail.play();
    }

    document.getElementById('next-button').disabled = false;

}


function nextquestion() {
    currentquestion++;
    showquestion();

    document.getElementById('next-button').disabled = true;
    resetanswer();



}

function resetanswer() {

    document.getElementById('answer_1').classList.remove('btn-success');
    document.getElementById('answer_1').classList.remove('btn-danger');
    document.getElementById('answer_2').classList.remove('btn-success');
    document.getElementById('answer_2').classList.remove('btn-danger');
    document.getElementById('answer_3').classList.remove('btn-success');
    document.getElementById('answer_3').classList.remove('btn-danger');
    document.getElementById('answer_4').classList.remove('btn-success');
    document.getElementById('answer_4').classList.remove('btn-danger');

}

function restart() {
    document.getElementById('bild-end').src = 'img/Frage.jpg';

    document.getElementById('question-body').style = '';
    document.getElementById('end-body').style = 'display : none;';

    currentquestion = 0;
    rightquestions = 0;

    init();


}