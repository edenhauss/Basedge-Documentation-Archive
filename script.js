const CommandsListElem = document.getElementById("CommandsListContainer");
const CommandInfoElem = document.getElementById("CommandInfoContainer");
const CommandsPageBtnElem = document.getElementById("CommandsPageButton");
const AdminCommandsPageBtnElem = document.getElementById("AdminCommandsPageButton");
const GameCommandsPageBtnElem = document.getElementById("GameCommandsPageButton");
const TestCommandsPageBtnElem = document.getElementById("TestCommandsPageButton");
const CustomPageBtnElem = document.getElementById("CustomPageButton");
const AllPagesId = ["CmdPage", "CustomPage"];
const Pages = {
    None: 0,
    Commands: 1,
    AdminCommands: 2,
    GameCommands: 3,
    TestCommands: 4,
    CustomPage: 5
};
const PageData = {
    1: { button: CommandsPageBtnElem, id: "CmdPage", cmdTableData: CommandsList },
    2: { button: AdminCommandsPageBtnElem, id: "CmdPage", cmdTableData: AdminCommandsList },
    3: { button: GameCommandsPageBtnElem, id: "CmdPage", cmdTableData: GameCommandsList },
    4: { button: TestCommandsPageBtnElem, id: "CmdPage", cmdTableData: TestCommandsList },
    5: { button: CustomPageBtnElem, id: "CustomPage"}
}
const CmdPages = [Pages.Commands, Pages.AdminCommands, Pages.GameCommands, Pages.TestCommands];
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
TestCommandsPageBtnElem.onclick = () => {
    ShowPage(Pages.TestCommands);
}
CustomPageBtnElem.onclick = () => {
    ShowPage(Pages.CustomPage);
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
}

function ShowPage(page) {
    if (CurrentPage == page) {
        return;
    }

    if (CmdPages.includes(page)) {
        ShowTablePage(page);
    }

    CurrentPage = page;
    Array.from(document.getElementsByClassName("pageButton")).forEach((btn) => {
        btn.classList.remove("selected");
    });
    PageData[CurrentPage].button.classList.add("selected");

    AllPagesId.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    document.getElementById(PageData[CurrentPage].id).style.display = "block";
}

ShowPage(Pages.Commands);