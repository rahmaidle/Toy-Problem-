function getStudentGrade() {
    let mark;
    /*while (true)*/ {
      mark = parseFloat(prompt("Enter student mark (between 0 and 100): "));
      if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        if (mark > 79) {
          console.log("Student grade: A");
          return;
        } else if (mark >= 60 && mark <= 79) {
          console.log("Student grade: B");
          return;
        } else if (mark >= 49 && mark <= 59) {
          console.log("Student grade: C");
          return;
        } else if (mark >= 40 && mark <= 49) {
          console.log("Student grade: D");
          return;
        } else {
          console.log("Student grade: E");
          return;
        }
      } else {
        console.log("Invalid input. Please enter a mark between 0 and 100.");
      }
    }
  }
  
  getStudentGrade();
