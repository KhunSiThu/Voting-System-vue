let rollExample = (year,major) => {
    let rollexample = "";

    if (major === "Electronic Engineering") {
       
        rollexample = "example - "+year+"EC-"+"000";
    } else if (major === "Electrical Power Engineering") {
        
        rollexample = "example - "+year+"EP-"+"000";
    } else if (major === "Mechanical Engineering") {
        
        rollexample = "example - "+year+"MECH-"+"000";
    } else if (major === "Civil Engineering") {
      
        rollexample = "example - "+year+"C-"+"000";
    } else {
        return false; // Invalid major
    }

    return rollexample;
}

let checkRollNo = (year, major, rollno) => {
    let regex;

    if (major === "Electronic Engineering") {
        // Roll number format: (yearEC-1 to 3 digits)
        regex = new RegExp(`^${year}EC-\\d{1,3}$`);
        
    } else if (major === "Electrical Power Engineering") {
        // Roll number format: (yearEP-1 to 3 digits)
        regex = new RegExp(`^${year}EP-\\d{1,3}$`);
        
    } else if (major === "Mechanical Engineering") {
        // Roll number format: (yearMECH-1 to 3 digits)
        regex = new RegExp(`^${year}MECH-\\d{1,3}$`);
       
    } else if (major === "Civil Engineering") {
        // Roll number format: (yearC-1 to 3 digits)
        regex = new RegExp(`^${year}C-\\d{1,3}$`);
        
    } else {
        return false; // Invalid major
    }

    console.log(regex.test(rollno))

    return regex.test(rollno);
};

export {checkRollNo,rollExample};