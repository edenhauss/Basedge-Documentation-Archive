const CommandsListElem = document.getElementById("CommandsListContainer");
const CommandInfoElem = document.getElementById("CommandInfoContainer");
const CommandsPageBtnElem = document.getElementById("CommandsPageButton");
const AdminCommandsPageBtnElem = document.getElementById("AdminCommandsPageButton");
const GameCommandsPageBtnElem = document.getElementById("GameCommandsPageButton");
const Pages = {
    None: 0,
    Commands: 1,
    AdminCommands: 2,
    GameCommands: 3
};
const PageButtons = {
    1: CommandsPageBtnElem,
    2: AdminCommandsPageBtnElem,
    3: GameCommandsPageBtnElem
}
let CurrentPage = Pages.None;

CommandsPageBtnElem.onclick = function () {
    ShowPage(Pages.Commands);
}
AdminCommandsPageBtnElem.onclick = function () {
    ShowPage(Pages.AdminCommands);
}
GameCommandsPageBtnElem.onclick = function () {
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
    LogoElem.style.backgroundImage = "url('logo_sleep.png')";
    OpenEyes = setTimeout(function () {
        LogoElem.style.backgroundImage = "url('logo.png')";
    }, 250);
}

function ShowPage(page) {
    if (CurrentPage == page) {
        return;
    }

    const data = (() => {
        switch (page) {
            case Pages.Commands: return CommandsList;
            case Pages.AdminCommands: return AdminCommandsList;
            case Pages.GameCommands: return GameCommandsList;
        }
    })()
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

    CurrentPage = page;
    Array.from(document.getElementsByClassName("pageButton")).forEach((btn) => {
        btn.classList.remove("selected");
    });
    PageButtons[CurrentPage].classList.add("selected");
    if (data.length > 0) ShowCommand(data[0], document.getElementsByClassName("commandButton")[0]);
}

function ShowCommand(cmd, button) {
    CommandInfoElem.innerHTML = "";
    CommandInfoElem.appendChild(cmd.getInfoTable());
    Array.from(document.getElementsByClassName("commandButton")).forEach((btn) => {
        btn.classList.remove("selected");
    });
    button.classList.add("selected");
}

ShowPage(Pages.Commands);