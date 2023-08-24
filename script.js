const tasks = [
    {
     "name": "Finish project report",
     "description": "Write and format the final project report.",
     "categorie": "Work",
     "startDate": "2023-08-25",
     "conclusionDate": "2023-09-02",
     "status": "in-progress",
     "notes": "Remember to include the financial projections.",
     "subtasks": [
       { "name": "Research data", "status": "done" },
       { "name": "Review conclusions", "status": "undone" }
     ]
   },
   {
     "name": "Gym workout",
     "description": "Hit the gym and do a full-body workout.",
     "categorie": "Health",
     "startDate": "2023-08-26",
     "conclusionDate": "2023-08-26",
     "status": "not-started",
     "notes": "",
     "subtasks": []
   },
   {
     "name": "Study for exam",
     "description": "Review lecture notes and practice problems.",
     "categorie": "Education",
     "startDate": "2023-08-28",
     "conclusionDate": "2023-09-05",
     "status": "not-started",
     "notes": "Focus on chapters 5-10.",
     "subtasks": [
       { "name": "Read chapter 5", "status": "undone" },
       { "name": "Solve practice problems", "status": "undone" }
     ]
   },
   {
     "name": "Family picnic",
     "description": "Organize a picnic at the local park.",
     "categorie": "Family and Home",
     "startDate": "2023-08-30",
     "conclusionDate": "2023-08-30",
     "status": "completed",
     "notes": "Bring snacks and games.",
     "subtasks": []
   },
   {
     "name": "Budget planning",
     "description": "Review monthly expenses and create a budget.",
     "categorie": "Finances",
     "startDate": "2023-09-01",
     "conclusionDate": "2023-09-03",
     "status": "not-started",
     "notes": "Allocate more funds for savings.",
     "subtasks": [
       { "name": "Gather bills and receipts", "status": "done" },
       { "name": "Categorize expenses", "status": "undone" }
     ]
   },
   {
     "name": "Painting project",
     "description": "Start painting the living room walls.",
     "categorie": "Home Improvement",
     "startDate": "2023-09-02",
     "conclusionDate": "2023-09-10",
     "status": "in-progress",
     "notes": "Buy paint and brushes.",
     "subtasks": [
       { "name": "Choose paint colors", "status": "done" },
       { "name": "Move furniture", "status": "undone" }
     ]
   },
   {
     "name": "Read a new book",
     "description": "Pick a novel and enjoy some reading time.",
     "categorie": "Leisure and Recreation",
     "startDate": "2023-09-05",
     "conclusionDate": "2023-09-15",
     "status": "not-started",
     "notes": "Visit the bookstore.",
     "subtasks": []
   },
   {
     "name": "Meet friends",
     "description": "Hang out with friends at the cafe.",
     "categorie": "Social",
     "startDate": "2023-09-07",
     "conclusionDate": "2023-09-07",
     "status": "completed",
     "notes": "Catch up on recent events.",
     "subtasks": []
   },
   {
     "name": "Personal website update",
     "description": "Add new projects and blog posts to the website.",
     "categorie": "Personal Projects",
     "startDate": "2023-09-10",
     "conclusionDate": "2023-09-20",
     "status": "not-started",
     "notes": "Prepare high-quality images.",
     "subtasks": [
       { "name": "Write new blog post", "status": "undone" },
       { "name": "Update portfolio page", "status": "undone" }
     ]
   },
   {
     "name": "Learn a new language",
     "description": "Start learning the basics of Spanish.",
     "categorie": "Learning",
     "startDate": "2023-09-15",
     "conclusionDate": "2023-10-15",
     "status": "in-progress",
     "notes": "Use online language learning platforms.",
     "subtasks": [
       { "name": "Practice greetings", "status": "done" },
       { "name": "Learn common phrases", "status": "undone" }
     ]
   },
   {
     "name": "Create digital artwork",
     "description": "Use graphic design software to create a new piece of art.",
     "categorie": "Art and Creativity",
     "startDate": "2023-09-20",
     "conclusionDate": "2023-09-25",
     "status": "not-started",
     "notes": "Experiment with color palettes.",
     "subtasks": []
   }
];


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

function hideForm(){
    rootElement.style.backgroundColor = 'rgb(167, 88, 240)';
    formContainer.style.height = '0vh'
    form.style.display = 'none';
}

cancelButton.addEventListener('click', () =>{hideForm()});

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

function subtractSubtasksInputs(){
    let childs = subtasksInputsContainer.children;
    let arrayOfChilds = [...childs];
    arrayOfChilds.forEach(child => {
        let index = arrayOfChilds.indexOf(child);
        if(index != 0){
            child.remove()
        } else if(arrayOfChilds.length === 1){
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

const saveButton = document.getElementById('saveButton');

function getInputValue(str){return document.getElementById(str).value};

function getSelectedRadioValue(){
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radio of radios) {if (radio.checked)return radio.value};
}

function saveData(){
    let tasksValues = [];
    taskAttributes.forEach(attribute =>{
        if(attribute != 'status'){
        tasksValues.push(getInputValue(attribute))
        } else if(attribute === 'status'){
            tasksValues.push(getSelectedRadioValue());
        }
    });
    let newTask = new Task(
        tasksValues[0],
        tasksValues[1],
        tasksValues[2],
        tasksValues[3],
        tasksValues[4],
        tasksValues[5],
        tasksValues[6],
        tasksValues[7]
    )
    tasks.push(newTask);
    form.reset();
    hideForm();
}

function evalData(){
    if(getInputValue('name') === ''){
        alert('Please type a name.');
    } else if(getInputValue('name') != ''){
        return true;
    }
}

// PENDIENTE CONFIGURAR FUNCIÓN PARA QUE TOME LOS VALORES DE LAS SUBTAREAS
//ASÍ MISMO ES NECESARIO CREAR EN EL CODIGO UNA NUEVA CLASE DENOMINADA SUBTASK
//Y CONFIGURAR LO CORRESPONDIENTE EN LA CLASE TASK

saveButton.addEventListener('click', () =>{
    if(evalData() === true){saveData();}
    console.log(tasks)
});
