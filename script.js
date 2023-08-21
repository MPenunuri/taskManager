const addTaskButton = document.getElementById("addTaskButton");
const formContainer = document.getElementById('formContainer');
const form = document.getElementById('form');
const rootElement = document.documentElement;

addTaskButton.addEventListener('click', () =>{
    rootElement.style.backgroundColor = 'var(--alternate-color-focus)';
    formContainer.style.height = '100vh'
    form.style.display = 'flex';
});

const cancelButton =document.getElementById('cancelButton');

cancelButton.addEventListener('click', () =>{
    rootElement.style.backgroundColor = 'rgb(167, 88, 240)';
    formContainer.style.height = '0vh'
    form.style.display = 'none';
});

class Task {
    constructor(name, description, categorie, 
        startDate, conclusionDate, status,
        notes, subtasks) {
      this.name = name;
      this.description = description;
      this.categorie = categorie;
      this.startDate = startDate;
      this.conclusionDate = conclusionDate;
      this.status = status;
      this.notes = notes;
      this.subtasks = subtasks;
    }
    setName(name){this.name = name};
    getName(){return this.name};
    setDesctiption(description){this.description = this.description};
    getDescription(){return this.description};
    setCategorie(categorie){this.categorie = categorie};
    getCategorie(){return this.categorie};
    setStartDate(startDate){this.startDate = startDate};
    getStartDate(){return this.startDate};
    setConclusionDate(conclusionDate){this.conclusionDate = conclusionDate};
    getConclusionDate(){return this.conclusionDate};
    setStatus(status){this.status = status};
    getStatus(){return this.status};
    setNotes(notes){this.notes = notes};
    getNotes(){return this.notes};
    //pendiente añadir opción set subtasks
    getSubtasks(){return this.subtasks};
  }

const subtasksQuestion = document.getElementById('subtasks');
const subtasksInputsContainer = document.getElementById('subtasksInputsContainer');
const addSubtaskButtonContainer = document.getElementById('addSubtaskButtonContainer');

subtasksQuestion.addEventListener('change', ()=>{
    if(subtasksQuestion.value === 'yes'){
        subtasksInputsContainer.style.display = 'grid';
        addSubtaskButtonContainer.style.display = 'flex';
    } else{
        subtasksInputsContainer.style.display = 'none';
        addSubtaskButtonContainer.style.display = 'none';
    }
});

function assSubtasksLabels(subtasksInputContainer, containerId){
    let labelsContainer = document.createElement('div');
    labelsContainer.classList.add('subtaskLabels');
    labelsContainer.setAttribute('id',`subtaskLabels${containerId}`);
    subtasksInputContainer.appendChild(labelsContainer);

    let label1 = document.createElement('label')
    label1.setAttribute('for',`subtaskName${containerId}`);
    label1.classList.add('subtaskNameLabel');
    label1.textContent = `Subtask Num. ${containerId}`;
    labelsContainer.appendChild(label1);

    let label2 = document.createElement('label')
    label2.setAttribute('for',`subtaskStatus${containerId}`);
    label2.classList.add('subtaskStatusLabel');
    label2.textContent = 'Status';
    labelsContainer.appendChild(label2);
}

function addSubtasksInputs(subtasksInputContainer, containerId){
    let inputsContainer = document.createElement('div');
    inputsContainer.classList.add('subtaskInputs');
    inputsContainer.setAttribute('id',`subtaskInputs${containerId}`);
    subtasksInputContainer.appendChild(inputsContainer);

    let textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('placeholder','Type a subtask');
    textInput.setAttribute('name',`subtaskName${containerId}`);
    textInput.setAttribute('id',`subtaskName${containerId}`);
    inputsContainer.appendChild(textInput);

    let select = document.createElement('select');
    select.setAttribute('name',`subtaskStatus${containerId}`);
    select.setAttribute('id',`subtaskStatus${containerId}`);
    inputsContainer.appendChild(select);

    let option0 = document.createElement('option');
    option0.setAttribute('value','empty-selection');
    option0.textContent = '-';
    select.appendChild(option0);

    let option1 = document.createElement('option');
    option1.setAttribute('value','done');
    option1.textContent = 'Done';
    select.appendChild(option1);

    let option2 = document.createElement('option');
    option2.setAttribute('value','undone');
    option2.textContent = 'undone';
    select.appendChild(option2);
}

function addSubtask(){
    let containerId = subtasksInputsContainer.childElementCount+1;
    let subtasksInputContainer = document.createElement('div');
    subtasksInputContainer.classList.add('subtaskInputContainer');
    subtasksInputContainer.setAttribute('id',`subtaskInputContainer${containerId}`)
    subtasksInputsContainer.appendChild(subtasksInputContainer);
    assSubtasksLabels(subtasksInputContainer, containerId)
    addSubtasksInputs(subtasksInputContainer, containerId);
}

const addSubtaskButton = document.getElementById('addSubtaskButton');

addSubtaskButton.addEventListener('click', () => {addSubtask()});

function removeHTMLelement(id){
    let elementToRemove = document.getElementById(id);
    elementToRemove.remove();
}

function subtractSubtasksInputs(){
    let childs = subtasksInputsContainer.children;
    let arrayOfChilds = [...childs];
    arrayOfChilds.forEach(child => {
        let index = arrayOfChilds.indexOf(child);
        if(index === arrayOfChilds.length-1 && index != 0){
            child.remove()
        } else if(index === 0 && arrayOfChilds.length === 1){
            subtasksQuestion.value = 'no';
            subtasksInputsContainer.style.display = 'none';
            addSubtaskButtonContainer.style.display = 'none';
        }
    });
};

const subtractSubButton = document.getElementById('subtractSubtaskButton');

subtractSubButton.addEventListener('click',() => {
    subtractSubtasksInputs();
})

const emptyTask = new Task();
const taskAttributes = Object.keys(emptyTask);
const tasks = [];
const saveButton = document.getElementById('saveButton');

function getInputValue(str){return document.getElementById(str).value};

function getSelectedRadioValue(){
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radio of radios) {if (radio.checked)return radio.value};
}

saveButton.addEventListener('click', () =>{
    let tasksValues = [];
    taskAttributes.forEach(attribute =>{
        if(attribute != 'status'){
        tasksValues.push(getInputValue(attribute))
        } else if(attribute === 'status'){
            tasksValues.push(getSelectedRadioValue());
        }
    });
    console.log(tasksValues)
});