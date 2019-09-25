var numExams;
var scores= new Array();
var Exams=new Array();
var totalExams;
var highestExam;
var examIndex;
var displayExam;

function go() {
    numExams = prompt("Enter the number of exams:");
    totalExams=parseInt(numExams);
       getScores(); //after the user inputs the number of exams the get scores function is initiated

}

function getScores() {  //this function allows the user to input the scores for each exam
    for(var i=0; i<parseInt(numExams);i++ ){
        scores=prompt("Enter grade for Exam "+(i+1)+":" );
        Exams[i]=parseInt(scores);
    }
    maxExam();  //after the user inputs the scores for the exams the max exam function is initiated
}

function maxExam() {   //this function goes through all of the exams and compares them to find the highest score
    for (var i in Exams) {
        if (parseInt(i) == 0) {
            highestExam = Exams[i];
            examIndex = i;
        } else if (Exams[i] > highestExam) {
            highestExam = Exams[i];
            examIndex = i;
        } else {
            i = parseInt(i) + 1;
        }
    }
    document.writeln("The highest score " + highestExam + " was on exam " + (parseInt(examIndex) + 1)) ;
    outScores();  // the outscores function is initiated after the highest score is displayed
}

function outScores(){  //this function outputs all of the exams and their corresponding grade in a table
    displayExam="<table border = '1' ><tr>";
    for(var i=0;i<parseInt(numExams);i++ ){
        displayExam = displayExam + "<td>Exam " + (i+1) + "</td>";
    }
    displayExam = displayExam + "</tr><tr>";
    for(var j=0; j<parseInt(numExams);j++ ) {
        displayExam = displayExam + "<td>" + Exams[j] + "</td>";
    }
    displayExam = displayExam + "</tr></table>";
    document.writeln(displayExam);
}




