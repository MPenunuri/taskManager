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
  }

class Subtask {
      constructor(name,status){
        this.name = name;
        this.status = status;
      }
};

const tasks = [];

const examples = [
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

function subtasksToClass(array){
  let arrayOfSubtasks = [];
  array.forEach((element) => {
    let newSubtask = new Subtask(element.name, element.status);
    arrayOfSubtasks.push(newSubtask);
  });
  return arrayOfSubtasks
};

examples.forEach((example) =>{
    let obj = new Task(example.name,example.description,
      example.categorie,example.startDate,example.conclusionDate,
      example.status,example.notes,subtasksToClass(example.subtasks));
    tasks.push(obj);
});

const gridContainer = document.getElementById('gridContainer');

function appendElement(parent,type,elementClass,id,value){
    let element = document.createElement(type);
    element.classList.add(elementClass);
    element.setAttribute('id',id);
    parent.appendChild(element);
    if(value != null && id.substring(0, 6) != 'status') element.textContent = value;
    if(value != null && id.substring(0, 6) === 'status') element.textContent = presentChainText(value);
};

function appendSectionAndChildElements(parent,id,variable,label,obj){
    appendElement(parent,'section',`${variable}Section`,`${variable}SectionNum${id}`);
    let section = document.getElementById(`${variable}SectionNum${id}`);
    appendElement(section,'p',`${variable}Label`,`${variable}LabelNum${id}`,label);
    appendElement(section,'p',`${variable}Value`,`${variable}Num${id}`,eval(`obj.${variable}`));
};

function deleteTask(htmlButton){
    htmlButton.addEventListener('click',() =>{
        let id = htmlButton.id.split('Num')[1];
        tasks.splice(id,1);
        displayTasks();
    });
};

function presentChainText(str){
    let finalStr = str.replace('-',' ');
    return finalStr.charAt(0).toUpperCase() + finalStr.slice(1);
};

const taskDetailsContainer = document.getElementById('taskDetailsContainer');

const emptyTask = new Task();
const taskAttributes = Object.keys(emptyTask);

function idDetailsGenerator(){
  let ids = [];
  taskAttributes.slice(0, -1).forEach((attribute) => {
    let id = 'task' + attribute.charAt(0).toUpperCase() + attribute.slice(1);
    ids.push([attribute,id]);
  });
  return ids;
};

function findIdAttribute(idAttribute){
  let ids = idDetailsGenerator();
  let response = [];
  ids.forEach((id) => {if(id[1] === idAttribute){response = id}});
  return response
};


let subtasksDetailsContainer = document.getElementById('subtasksDetailsContainer');

function appendSubtask(num,name,status){
  let subtaskContainer = document.createElement('div');
  subtaskContainer.classList.add('subtaskContainer');
  subtasksDetailsContainer.appendChild(subtaskContainer);
  let nameContainer = document.createElement('p');
  nameContainer.classList.add('subtaskName');
  nameContainer.textContent = name;
  subtaskContainer.appendChild(nameContainer);
  let icon = document.createElement('ion-icon');
  status === 'done' ? icon.setAttribute('name','checkbox') : icon.setAttribute('name','square-outline');
  subtaskContainer.appendChild(icon);
}

const rootElement = document.documentElement;
const backgroundProtector = document.getElementById('backgroundProtector');

let currentTask = null;

function getTaskDetails(htmlButton){
  htmlButton.addEventListener('click',() =>{
      let idButton = htmlButton.id;
      let id = idButton.split('Num')[1];
      currentTask = id;
      taskDetailsContainer.style.display = 'flex';
      rootElement.style.backgroundColor = 'var(--alternate-color-focus)';
      rootElement.style.overflow = 'hidden';
      backgroundProtector.style.display = 'block';
      let attributeValues = taskDetailsContainer.querySelectorAll('p[class="attributeValue"]');
      attributeValues.forEach((attribute) => {
        attribute.textContent = eval(`tasks[id].${findIdAttribute(attribute.id)[0]}`);
      });
      let subtasks = tasks[id].subtasks;
      let taskSubtasksHeader = document.getElementById('taskSubtasks');
      subtasks.length > 0 ? taskSubtasksHeader.style.display = 'block' : taskSubtasksHeader.style.display = 'none';
      subtasks.forEach((subtask) => {
        let index = subtasks.indexOf(subtask);
        appendSubtask(index,subtask.name,subtask.status)
      });
  });
};

function setInputValue(str,data){document.getElementById(str).value = data};

function selectRadioValue(status){
  let radios = document.querySelectorAll('input[type="radio"]');
  for (let radio of radios){if (radio.value === status)return radio.checked = true};
};

function addSubtasks(arrayOfSubtasks){
  let subtasksQuestion = document.getElementById('subtasks');
  subtasksQuestion.value = 'yes';
  let count = 1;
  arrayOfSubtasks.forEach((subtask) =>{
    addSubtask();
    let inputName = document.getElementById(`subtaskName${count}`);
    inputName.value = subtask.name;
    let selectStatus = document.getElementById(`subtaskStatus${count}`);
    selectStatus.value = subtask.status;
    count++;
  });
}

const subtasksQuestion = document.getElementById('subtasks');
const subtasksInputsContainer = document.getElementById('subtasksInputsContainer');
const addSubtaskButtonContainer = document.getElementById('addSubtaskButtonContainer');

function displaySubtasksElements(){
  if(subtasksQuestion.value === 'yes'){
      subtasksInputsContainer.style.display = 'grid';
      addSubtaskButtonContainer.style.display = 'flex';
  } else{
      subtasksInputsContainer.style.display = 'none';
      addSubtaskButtonContainer.style.display = 'none';
  };
};

function editTask(){
  taskAttributes.forEach((attribute) =>{
    if(attribute != 'status' && attribute != 'subtasks'){
      setInputValue(attribute,eval(`tasks[currentTask].${attribute}`));
    } else if(attribute === 'status'){
      selectRadioValue(tasks[currentTask].status);
    } else if(attribute === 'subtasks'){
        if(tasks[currentTask].subtasks.length > 0){
          addSubtasks(tasks[currentTask].subtasks);
          displaySubtasksElements();
        };
    };
  });
}

let editActive = false;

let editButton = document.getElementById('editButton');

editButton.addEventListener(('click'), ()=> {
  editActive = true;
  editTask();
  taskDetailsContainer.style.display = 'none';
  legend.textContent = "Let's edit this task!";
  form.style.display = 'flex';
})

function deleteSubtasksDetails(){
  while(subtasksDetailsContainer.children.length  > 1){
    subtasksDetailsContainer.removeChild(subtasksDetailsContainer.lastChild);
  };
};

let closeDetailsButton = document.getElementById('closeDetailsButton');
closeDetailsButton.addEventListener('click',() => {
  editActive = false;
  taskDetailsContainer.style.display = 'none';
  rootElement.style.backgroundColor = 'rgb(167, 88, 240)';
  rootElement.style.overflow = 'auto';
  backgroundProtector.style.display = 'none';
  deleteSubtasksDetails();
});

function displayTasks(){
    while(gridContainer.firstChild){gridContainer.removeChild(gridContainer.firstChild)};
    tasks.forEach((task) =>{
        let id = tasks.indexOf(task);
        appendElement(gridContainer,'div','taskContainer',`taskContainerNum${id}`);
        let taskContainer = document.getElementById(`taskContainerNum${id}`);
        appendElement(taskContainer,'button','tackButton',`tackButtonNum${id}`);
        appendSectionAndChildElements(taskContainer,id,'name','Name:',task);
        appendSectionAndChildElements(taskContainer,id,'categorie','Categorie:',task);
        appendSectionAndChildElements(taskContainer,id,'startDate','Start date:',task);
        appendSectionAndChildElements(taskContainer,id,'conclusionDate','Conclusion date:',task);
        appendSectionAndChildElements(taskContainer,id,'status','Status:',task);
        appendElement(taskContainer,'button','detailsButton',`detailsButtonNum${id}`,'Details');
        let deleteButton = document.getElementById(`tackButtonNum${id}`);
        deleteTask(deleteButton);
        let detailsButton = document.getElementById(`detailsButtonNum${id}`);
        getTaskDetails(detailsButton);
    })
};

displayTasks();

const addTaskButton = document.getElementById("addTaskButton");
const form = document.getElementById('form');
const legend = document.getElementById('legend');

addTaskButton.addEventListener('click', () =>{
    legend.textContent = 'Add a new task!';
    rootElement.style.backgroundColor = 'var(--alternate-color-focus)';
    rootElement.style.overflow = 'hidden';
    backgroundProtector.style.display = 'block';
    form.style.display = 'flex';
});

const cancelButton =document.getElementById('cancelButton');

function hideForm(){
    rootElement.style.backgroundColor = 'rgb(167, 88, 240)';
    form.style.display = 'none';
    rootElement.style.overflow = 'auto';
    backgroundProtector.style.display = 'none';
}

cancelButton.addEventListener('click', () =>{
  hideForm();
  let subtasksInputs = subtasksInputsContainer.children;
  let arrayOfSubtasksInputs = [...subtasksInputs];
  arrayOfSubtasksInputs.forEach((subtaskInput) =>{
    subtaskInput.remove();
  });
  subtasksInputsContainer.style.display = 'none';
  addSubtaskButtonContainer.style.display = 'none';
  form.reset();
});

subtasksQuestion.addEventListener('change', ()=>{displaySubtasksElements()});

function addSubtasksLabels(subtasksInputContainer, containerId){
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
};

function addSubtasksInputs(subtasksInputContainer, containerId){
    appendElement(subtasksInputContainer,'div','subtaskInputs',`subtaskInputs${containerId}`);
    let inputsContainer = document.getElementById(`subtaskInputs${containerId}`);

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

    let options = ['undone','done'];
    options.forEach((option) => {
      let element = document.createElement('option');
      element.setAttribute('value',option);
      element.textContent = option.charAt(0).toUpperCase() + option.slice(1);
      select.appendChild(element);
    });
};

function addSubtask(){
    let containerId = subtasksInputsContainer.childElementCount+1;
    let subtasksInputContainer = document.createElement('div');
    subtasksInputContainer.classList.add('subtaskInputContainer');
    subtasksInputContainer.setAttribute('id',`subtaskInputContainer${containerId}`);
    subtasksInputsContainer.appendChild(subtasksInputContainer);
    addSubtasksLabels(subtasksInputContainer, containerId);
    addSubtasksInputs(subtasksInputContainer, containerId);
};

const addSubtaskButton = document.getElementById('addSubtaskButton');

addSubtaskButton.addEventListener('click', () => {addSubtask()});

function subtractSubtasksInputs(){
    let childs = subtasksInputsContainer.children;
    let arrayOfChilds = [...childs];
    arrayOfChilds.forEach(child => {
        let index = arrayOfChilds.indexOf(child);
        if(index != 0 && index === arrayOfChilds.length-1){
            child.remove();
        } else if(arrayOfChilds.length === 1){
            child.remove();
            subtasksQuestion.value = 'no';
            subtasksInputsContainer.style.display = 'none';
            addSubtaskButtonContainer.style.display = 'none';
        };
    });
};

const subtractSubButton = document.getElementById('subtractSubtaskButton');

subtractSubButton.addEventListener('click',() => {
    subtractSubtasksInputs();
});

const saveButton = document.getElementById('saveButton');

function getInputValue(str){return document.getElementById(str).value};

function getSelectedRadioValue(){
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radio of radios) {if (radio.checked)return radio.value};
};

function getSubtasks(){
  let arrayOfSubtasks = [];
  let particularContainers = [...subtasksInputsContainer.children];
  particularContainers.forEach((particularContainer) => {
    let id = particularContainer.id.split('InputContainer')[1];
    let name = document.getElementById(`subtaskName${id}`);
    let status = document.getElementById(`subtaskStatus${id}`);
    let newSubtask = new Subtask(name.value,status.value);
    arrayOfSubtasks.push(newSubtask);
  });
  return arrayOfSubtasks;
};

function saveData(){
    let tasksValues = [];
    taskAttributes.forEach(attribute =>{
        if(attribute != 'status' && attribute != 'subtasks'){
        tasksValues.push(getInputValue(attribute))
        } else if(attribute === 'status'){
            tasksValues.push(getSelectedRadioValue());
        } else if(attribute === 'subtasks'){
            switch(subtasksQuestion.value){
              case 'yes':
                tasksValues.push(evalSubtasks());
              case 'no':
                tasksValues.push([]);
            }
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
    );
    editActive === true ? tasks[currentTask] = newTask : tasks.push(newTask);
    form.reset();
    hideForm();
    displayTasks();
    deleteSubtasksDetails();
};

function evalSubtasks(){
  let result = false;
  if(subtasksQuestion.value === 'yes'){
    let arrayOfSubtasks = [...getSubtasks()];
    arrayOfSubtasks.forEach((subtask) => {
      subtask.name.trim() === '' ? result = false : result = arrayOfSubtasks;});
  } else if(subtasksQuestion.value === 'no'){result = true};
  return result;
};

function evalData(){
    if(getInputValue('name') === ''){
        alert('Please type a name.');
    } else if(evalSubtasks() === false){
        alert('Please type a name in every subtask.')
    } else{
      return true;
    }
};

saveButton.addEventListener('click', () =>{
    if(evalData() === true){saveData();}
});
