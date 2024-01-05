function ProvideTag(tagName, tagClass, tagId) {
  const tag = document.createElement(`${tagName}`);
  if (tagClass != "" && tagClass != undefined) {
    tag.setAttribute("class", `${tagClass}`);
  }
  if (tagId != "" && tagId != undefined) {
    tag.setAttribute("id", `${tagId}`);
  }
  return tag;
}
let BoardName = [
  {
    title: "Todo",
    arr: [],
  },
  {
    title: "Inprocess",
    arr: [],
  },
  {
    title: "Stuck",
    arr: [],
  },
  {
    title: "Done",
    arr: [],
  },
];
let priority = ["Low", "Medium", "High"];
const root = document.getElementById("root");
//new container
const container = ProvideTag("div", "container");
root.appendChild(container);
const boards = ProvideTag("div", "boards");
container.appendChild(boards);
const addBackdrop = ProvideTag("div");
root.appendChild(addBackdrop);

function addForm() {
  const backdrop = ProvideTag("div", "backdrop");
  addBackdrop.appendChild(backdrop);
  const away = ProvideTag("div", "away");
  const modal = ProvideTag("div", "modal");
  backdrop.appendChild(away);
  backdrop.appendChild(modal);
  away.addEventListener("click", () => {
    addBackdrop.innerHTML = "";
    titleInput.value = "";
    descpInput.value = "";
    prioInput.value = "";
    StatusInput.value = "";
  });

  //new form
  const form = ProvideTag("form");
  //new form head
  const formHead = ProvideTag("h1");

  form.appendChild(formHead);
  //title input
  const formTitlediv = ProvideTag("div");
  const titleLabel = ProvideTag("label");
  titleLabel.innerText = "Title";
  titleLabel.setAttribute("for", "title");
  const titleInput = ProvideTag("input", "title", "title");
  formTitlediv.appendChild(titleInput);
  formTitlediv.appendChild(titleLabel);
  //title description
  const descDiv = ProvideTag("div");
  const descLabel = ProvideTag("label");
  descLabel.innerText = "Description";
  descLabel.setAttribute("for", "description");
  const descpInput = ProvideTag("textarea", "description", "description");
  descDiv.appendChild(descLabel);
  descDiv.appendChild(descpInput);
  //status
  const Status = ProvideTag("div");
  const statusTitle = ProvideTag("label");
  statusTitle.innerText = "Status";
  statusTitle.setAttribute("for", "status");
  Status.appendChild(statusTitle);
  const StatusInput = ProvideTag("select", "description", "description");
  StatusInput.value = "";
  let count = 0;
  for (let i = 0; i < boardName.length; i++) {
    const statusOption = ProvideTag("option");
    statusOption.setAttribute("value", i);
    statusOption.innerText = boardName[i].title;
    count++;
    StatusInput.appendChild(statusOption);
  }
  Status.appendChild(StatusInput);
  //priority
  const Prio = ProvideTag("div");

  const priotitle = ProvideTag("label");
  priotitle.innerText = "Priority";
  priotitle.setAttribute("for", "Priority");
  Prio.appendChild(priotitle);
  const prioInput = ProvideTag("select", "description", "description");
  prioInput.value = "";
  for (let j = 0; j < priority.length; j++) {
    const prioOption = ProvideTag("option");
    prioOption.setAttribute("value", j);
    prioOption.innerText = priority[j];
    prioInput.appendChild(prioOption);
  }
  Prio.appendChild(prioInput);
  form.appendChild(formTitlediv);
  form.appendChild(descDiv);
  form.appendChild(Status);
  form.appendChild(Prio);

  const addTaskBtn = ProvideTag("div", "addTaskBtn");
  addTaskBtn.setAttribute("type", "submit");
  addTaskBtn.innerText = "Add task";
  form.appendChild(addTaskBtn);

  //add task event

  addTaskBtn.addEventListener("click", (a) => {
    a.preventDefault();
    let object = {};
    titleInput.addEventListener("keyup", () => {
      if (titleInput.value == "") {
        titleInput.style.border = "2px solid red";
      } else {
        titleInput.style.border = "1px solid black";
      }
    });
    descpInput.addEventListener("click", () => {
      if (descpInput.value == "") {
        descpInput.style.border = "2px solid red";
      } else {
        descpInput.style.border = "1px solid black";
      }
    });
    prioInput.addEventListener("click", () => {
      prioInput.style.border = "1px solid black";
    });
    StatusInput.addEventListener("click", () => {
      StatusInput.style.border = "1px solid black";
    });
    if (titleInput.value == "") {
      titleInput.style.border = "1px solid red";
      titleInput.setAttribute("placeholder", "utga oruulna uu!");
    }
    if ((descpInput.value = "")) {
      descpInput.style.border = "1px solid red";
      descpInput.setAttribute("placeholder", "utga oruulchha bro");
    }
    if (StatusInput.value == "") {
      StatusInput.style.border = "2px solid red";
    }
    if (prioInput.value == "") {
      prioInput.style.border = "2px solid red";
    }
    if (
      titleInput.value != "" &&
      descpInput.value != "" &&
      prioInput.value != "" &&
      StatusInput.value != ""
    ) {
      titleInput.style.border = "1px solid";
      titleInput.setAttribute("placeholder", "");
      const addIndex = StatusInput.value;
      descpInput.style.border = "1px solid";
      descpInput.setAttribute("placeholder", "");
      obj.title = titleInput.value;
      titleInput.value = "";
      obj.description = descInput.value;
      descpInput.value = "";
      obj.level = prioInput.value;
      console.log("level=", obj.level);
      obj.priority = priority[prioInput.value];
      boardName[addIndex].arr.push(obj);
      addSection.innerHTML = "";
      prioInput.value = "";
      StatusInput.value = "";
      refresh();
    }
  });
}
function editform(number1, number2) {
  const backdrop = ProvideTag("div", "backdrop");
  addBackdrop.appendChild(backdrop);
  const away = ProvideTag("div", "away");
  backdrop.appendChild(away);
  const modal = ProvideTag("div", "modal");
  backdrop.appendChild(modal);
  away.addEventListener("click", () => {
    addBackdrop.innerHTML = "";
    titleInput.value = "";
    descpInput.value = "";
    prioInput.value = "";
    StatusInput.value = "";
  });
  ///new form
  const form = ProvideTag("form");
  //new form  head
  const formHead = ProvideTag("h1");

  form.appendChild(formHead);
  //title input
  const formTitleDiv = ProvideTag("div");
  const titleLabel = ProvideTag("label");
  titleLabel.innerText = "Title";
  titleLabel.setAttribute("for", "title");
  const titleInput = ProvideTag("input", "title", "title");
  (titleInput.value = boardName[number1].arr[number2]).title;
  formTitleDiv.appendChild(titleLabel);
  formTitleDiv.appendChild(titleInput);
  //title description
  const descDiv = ProvideTag("div");
  const descLabel = ProvideTag("label");
  descLabel.innerText = "Description";
  descLabel.setAttribute("for", "description");
  const descpInput = ProvideTag("textarea", "description", "description");
  descpInput.value = boardName[number1].arr[number2].description;
  descDiv.appendChild(descLabel);
  descDiv.appendChild(descpInput);
  //status

  const Status = ProvideTag("div");

  const statusTitle = ProvideTag("label");
  statusTitle.innerText = "Status";
  statusTitle.setAttribute("for", "status");
  Status.appendChild(statusTitle);
  const StatusInput = ProvideTag("select", "description", "description");
  StatusInput.value - boardName[number1].title;
  count = 0;
  for (let i = 0; i.boardName.length; i++) {
    const statOption = ProvideTag("option");
    statOption.setAttribute("value", i);
    statOption.innerText = boardName[i].title;
    count++;
    StatusInput.appendChild(statOption);
  }
  Status.appendChild(StatusInput);
  //priority
  const Prio = ProvideTag("div");

  const prioTitle = ProvideTag("label");
  prioTitle.innerText = "Priority";
  prioTitle.setAttribute("for", "priority");
  Prio.appendChild(prioTitle);
  const prioInput = ProvideTag("select", "description", "description");
}
sdfd;
