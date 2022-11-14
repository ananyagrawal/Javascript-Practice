let table = document.getElementById("table");

    var developer1 = {

        name: "Yash Porwal",
        dob: "19/10/2001",
        id: 10001,
        type: "Developer",
        salary: 1700000
    };

    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3 );
    cell1.innerHTML = developer1.name;
    cell2.innerHTML = developer1.dob;
    cell3.innerHTML = developer1.id;
    cell4.innerHTML = developer1.type;



    var developer2 = {

        name: "Anany Agrawal",
        dob: "06/9/2002",
        id: 10002,
        type: "Developer",
        salary: 3000000
        
    };

    row = table.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell1.innerHTML = developer2.name;
    cell2.innerHTML = developer2.dob;
    cell3.innerHTML = developer2.id;
    cell4.innerHTML = developer2.type;

    let admin = {

        name: "Vinay Chandola",
        dob: "14/05/2001",
        id: 10003,
        type: "Admin",
        calculateAverageSalDev: function(){
            return ((developer1.salary + developer2.salary)/2);
        }
    };

    row = table.insertRow(1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell1.innerHTML = admin.name;
    cell2.innerHTML = admin.dob;
    cell3.innerHTML = admin.id;
    cell4.innerHTML = admin.type;

    document.getElementById("avg").innerHTML= admin.calculateAverageSalDev();