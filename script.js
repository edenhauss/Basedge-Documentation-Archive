const CommandsListElem = document.getElementById("CommandsListContainer");
const CommandInfoElem = document.getElementById("CommandInfoContainer");
const CommandsPageBtnElem = document.getElementById("CommandsPageButton");
const AdminCommandsPageBtnElem = document.getElementById("AdminCommandsPageButton");
const GameCommandsPageBtnElem = document.getElementById("GameCommandsPageButton");
const Pages = {
    None: 0,
    Commands: 1,
    AdminCommands: 2,
    GameCommands: 3,
};
const PageData = {
    1: { button: CommandsPageBtnElem, id: "CmdPage", cmdTableData: CommandsList },
    2: { button: AdminCommandsPageBtnElem, id: "CmdPage", cmdTableData: AdminCommandsList },
    3: { button: GameCommandsPageBtnElem, id: "CmdPage", cmdTableData: GameCommandsList }
}
let CurrentPage = Pages.None;

CommandsPageBtnElem.onclick = () => {
    ShowPage(Pages.Commands);
}
AdminCommandsPageBtnElem.onclick = () => {
    ShowPage(Pages.AdminCommands);
}
GameCommandsPageBtnElem.onclick = () => {
    ShowPage(Pages.GameCommands);
}


const LogoElem = document.getElementById("LogoImage");
let OpenEyes = null;
let Blinking = null;
document.body.onclick = function () {
    clearTimeout(OpenEyes);
    clearInterval(Blinking);
    Blink();
    Blinking = setInterval(function () {
        Blink();
    }, 4000);
};
setTimeout(() => {
    Blinking = setInterval(function () {
        Blink();
    }, 4000);
}, 2000);
function Blink() {
    LogoElem.style.backgroundImage = "url('images/logo_sleep.png')";
    OpenEyes = setTimeout(function () {
        LogoElem.style.backgroundImage = "url('images/logo.png')";
    }, 250);
}

function ShowTablePage(page) {
    const data = PageData[page].cmdTableData;
    CommandsListElem.innerHTML = "";
    CommandInfoElem.innerHTML = "";
    data.forEach(cmd => {
        let cmdButton = document.createElement('div');
        cmdButton.classList.add("commandButton", "unselectable");
        cmdButton.textContent = cmd.name;
        cmdButton.onclick = function () {
            ShowCommand(cmd, cmdButton);
        }
        CommandsListElem.appendChild(cmdButton);
    });
    if (data.length > 0) ShowCommand(data[0], document.getElementsByClassName("commandButton")[0]);
}

function ShowCommand(cmd, button) {
    CommandInfoElem.innerHTML = "";
    CommandInfoElem.appendChild(cmd.getInfoTable());
    Array.from(document.getElementsByClassName("commandButton")).forEach((btn) => {
        btn.classList.remove("selected");
    });
    button.classList.add("selected");

    Array.from(document.getElementsByClassName("coloredWord")).forEach((elem) => {
        if (elem.hasAttribute('data-replace-text')) {
            const content = elem.textContent;
            elem.onmouseover = function () {
                elem.textContent = elem.dataset.replaceText;
            };
            elem.onmouseout = function () {
                elem.textContent = content;
            };
        }
    });
}

function ShowPage(page) {
    if (CurrentPage == page) {
        return;
    }

    if (PageData[page].id == "CmdPage") {
        ShowTablePage(page);
    }

    CurrentPage = page;
    Array.from(document.getElementsByClassName("pageButton")).forEach((btn) => {
        btn.classList.remove("selected");
    });
    if (PageData[CurrentPage].button) {
        PageData[CurrentPage].button.classList.add("selected");
    }

    for (const [_, value] of Object.entries(PageData)) {
        document.getElementById(value.id).style.display = "none";
    }
    document.getElementById(PageData[CurrentPage].id).style.display = "block";
}

function GetFormattedStringSpan(input) {
    const coloredTextPattern = /\&.+/g;
    input = input.replace(coloredTextPattern, m => {
        return `<span class="coloredText">${m.substring(1)}</span>`;
    });
    const coloredWordPattern = /\$[A-zА-я0-9]+/g;
    return input.replace(coloredWordPattern, m => {
        return `<span class="coloredWord">$${m.substring(1)}</span>`;
    });
}
ShowPage(Pages.Commands);