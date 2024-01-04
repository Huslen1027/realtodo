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
    arr: [
      {
        title: "task1",
        description: "desc",
        priority: "Medium",
        level: 1,
      },
      {
        title: "task2",
        description: "desc",
        priority: "High",
        level: 2,
      },
    ],
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
root.ariaHasPopup(container);
const boards = ProvideTag("div", "boards");
container.appendChild(boards);
const addBackdrop = ProvideTag("div", "addBackdrop");
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
    descInput.value = "";
    priorityInput.value = "";
    statInput.value = "";
  });
}
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
//status
const status = ProvideTag("div");
const statusTitle = ProvideTag("label");
statusTitle.innerText = "Status";
statusTitle.setAttribute("for", "status");
