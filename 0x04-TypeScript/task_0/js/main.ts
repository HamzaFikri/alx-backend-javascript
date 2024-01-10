interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne: Student = {
	firstName: 'MohammedHamza',
	lastName: 'Fikri',
	age: 24,
	location: 'Safi'
}

const studentTwo: Student = {
	firstName: 'name1',
	lastName: 'lastname1',
	age: 31,
	location: 'Tanger'
}

const studentsList = [studentOne, studentTwo];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableHeaderCellElement = row.insertCell(0);
const th2: HTMLTableHeaderCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
studentsList.map((student) => {
	const newRow: HTMLTableRowElement = body.insertRow();
	const firstNameRow: HTMLTableCellElement = newRow.insertCell();
	const locationRow: HTMLTableCellElement= newRow.insertCell();
	firstNameRow.innerHTML = student.firstName;
	locationRow.innerHTML = student.location;
})
