//java script file to add students and their grade
function quizGrade() {
    var numStudents=0;
    var sumGrade=0;
    var aveGrade=0;
    var grade;
    var minGrade = 0;
    var maxGrade = 10;
    var studentName;
    var studentList = "<table border=1>";
    while (studentName = prompt("Enter Student Name:")) { //prompt to enter a student name continues until user clicks cancel

        grade = prompt("Enter " + studentName + "'s" + "quiz grade");
        //student[studentName]=grade;
        while (isNaN(grade) || !(grade > minGrade) || !(grade < maxGrade)) {  //if a grade within the range is not entered the prompt pops up again
            grade = prompt("Enter " + studentName + "'s" + "quiz grade");

        }
        numStudents+=1; //increments a student after a new grade is entered for a student
        sumGrade+=parseInt(grade);  //adds grade after a new grade is entered
        aveGrade=parseInt(sumGrade)/numStudents; //averages the grades after new grade is entered
        if (grade == parseInt(grade)) {
            studentList = studentList + ("<tr><td>" + studentName + "</td><td>" + grade + "</td></tr>");
        } else {
            studentList = studentList + ("<tr><td>" + studentName + "</td><td>" + parseInt(grade).toFixed(1) + "</td></tr>");
        }
    }
    studentList=studentList+"</table>";
    document.writeln(studentList);
    document.write(numStudents+ " students received a total score of "+ sumGrade+"<br>")
    document.write("The average score is "+ aveGrade.toFixed(1));

}