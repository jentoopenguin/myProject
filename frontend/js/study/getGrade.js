function getGrade(score){
    if (score === 100){
        return 'A';
    } else if (score >= 90){
        return 'B';
    } else {
        return 'C';
    }
    
}

const grade = getGrade(70);
console.log(grade);