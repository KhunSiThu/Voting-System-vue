import getStudentLimit from "./getStudentLimit";

const rollExample = (year, major) => {
    let rollexample = "";

    if (major === "Electronic Engineering") {
        rollexample = `example - ${year}EC-000`;
    } else if (major === "Electrical Power Engineering") {
        rollexample = `example - ${year}EP-000`;
    } else if (major === "Mechanical Engineering") {
        rollexample = `example - ${year}MECH-000`;
    } else if (major === "Civil Engineering") {
        rollexample = `example - ${year}C-000`;
    } else {
        return false; // Invalid major
    }

    return rollexample;
};

const checkRollNo = async (year, major, rollno) => {
    let regex;

    try {
        const limits = await getStudentLimit();
        if (limits.value) {
            let end;

            if (major === "Electronic Engineering") {
                end = limits.value.EC;
                // Roll number format: (yearEC-001 to yearEC-{end})
                regex = new RegExp(`^${year}EC-(0[0-9]{2}|[1-9][0-9]{0,2}|${end})$`);
            } else if (major === "Electrical Power Engineering") {
                end = limits.value.EP;
                // Roll number format: (yearEP-001 to yearEP-{end})
                regex = new RegExp(`^${year}EP-(0[0-9]{2}|[1-9][0-9]{0,2}|${end})$`);
            } else if (major === "Mechanical Engineering") {
                end = limits.value.MECH;
                // Roll number format: (yearMECH-001 to yearMECH-{end})
                regex = new RegExp(`^${year}MECH-(0[0-9]{2}|[1-9][0-9]{0,2}|${end})$`);
            } else if (major === "Civil Engineering") {
                end = limits.value.CE;
                // Roll number format: (yearC-001 to yearC-{end})
                regex = new RegExp(`^${year}C-(0[0-9]{2}|[1-9][0-9]{0,2}|${end})$`);
            } else {
                return false; // Invalid major
            }

            // Check if the numeric part is within the valid range (001 to end)
            const numericPart = parseInt(rollno.split('-')[1], 10);
            const isValidRange = numericPart >= 1 && numericPart <= end;

            console.log(regex.test(rollno) && isValidRange);

            return regex.test(rollno) && isValidRange;
        } else {
            console.warn("No student limits found in Firebase.");
            return false;
        }
    } catch (error) {
        console.error("Error fetching student limits:", error);
        return false;
    }
};

export { checkRollNo, rollExample };