function addSubject() {
  let input = document.getElementById('subject-input');
  let subject = input.value.trim();
  if (subject) {
    let li = document.createElement('li');
    li.textContent = subject;
    document.getElementById('subject-list').appendChild(li);
    input.value = '';
  }
}

function addReminder() {
  let input = document.getElementById('reminder-input');
  let reminder = input.value.trim();
  if (reminder) {
    let li = document.createElement('li');
    li.textContent = reminder;
    document.getElementById('reminder-list').appendChild(li);
    input.value = '';
  }
}
