document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const age = document.getElementById('age').value;

    const table = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = name;
    cell3.innerHTML = className;
    cell4.innerHTML = age;
    cell5.innerHTML = '<button onclick="deleteStudent(this)">Delete</button>';

    document.getElementById('student-form').reset();
});

function deleteStudent(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
