function departmentLine(department) {
    return "<tr class='departmentsRow'>" +
        `<td class='departmentId'>${department.id}</td>` +
        `<td class='departmentName'>${department.name}</td>` +
        "</tr>"
}

function displayDepartments(departments) {
    if (departments.length === 4) {
        let departmentsTable = "<table class='departmentsTable'>" +
            "<thead><tr>" +
            "<td>#</td>" +
            "<td>Name</td>" +
            "</tr></thead>";

        departments.forEach(department => departmentsTable += departmentLine(department));

        document.getElementById("departments").innerHTML = departmentsTable
            + "</table>" +
            "<h1 style='color: green'>Passed departments test</h1>";
    }
}

<<<<<<< HEAD
const deptUrl = "http://" + window.location.hostname + "/department/"
=======
const deptUrl = "http://" + window.location.hostname + "/department"
>>>>>>> d1700cadc177b6203e79aa10199c01e5319cf3ff
fetch(deptUrl)
    .then(response => response.json())
    .then(data => displayDepartments(data));
