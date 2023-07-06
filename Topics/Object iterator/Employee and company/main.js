function employeeAndCompany(arrayOfObjects) {
    for (let obj of arrayOfObjects) {
        console.log(`Employee ${obj.name} works for ${obj.company}`);
    }
}