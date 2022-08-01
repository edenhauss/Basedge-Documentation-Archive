class Command {
    constructor(name, description = null, cooldown = null, exampleUserMsg = null, exampleBotMsg = null, twitchMsg = null) {
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
        this.exampleUserMsg = exampleUserMsg;
        this.exampleBotMsg = exampleBotMsg;
        this.twitchMsg = twitchMsg;
    }

    getInfoTable() {
        let table = document.createElement("table");
        table.classList.add("infoTable");

        if (this.description !== null) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = "Описание";
            tr.append(td);
            td = document.createElement("td");
            td.textContent = this.description;
            tr.append(td);
            table.append(tr);
        }
        if (this.cooldown !== null) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = "Кд";
            tr.append(td);
            td = document.createElement("td");
            td.textContent = `${this.cooldown}с`;
            tr.append(td);
            table.append(tr);
        }
        if ([this.exampleUserMsg, this.exampleBotMsg, this.twitchMsg].some((param) => param !== null)) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = "Пример использования";
            tr.append(td);
            td = document.createElement("td");

            if (this.exampleUserMsg !== null) {
                if (this.exampleUserMsg.isMod) {
                    let modIcon = document.createElement("img");
                    modIcon.classList.add("userIcon");
                    modIcon.src = "images/mod.png";
                    td.append(modIcon);
                }
                if (this.exampleUserMsg.isVip) {
                    let vipIcon = document.createElement("img");
                    vipIcon.classList.add("userIcon");
                    vipIcon.src = "images/vip.png";
                    td.append(vipIcon);
                }
                let spanUser = document.createElement("span");
                let spanUserMsg = document.createElement("span");
                spanUser.textContent = "Username:";
                spanUser.classList.add("exampleUsername");
                spanUserMsg.textContent = this.exampleUserMsg.msg;
                spanUserMsg.classList.add("exampleNicknameMsg");
                td.append(spanUser, spanUserMsg, document.createElement("br"));
            }
            if (this.exampleBotMsg !== null) {
                console.log(this.exampleBotMsg.msg);
                this.exampleBotMsg.msg.forEach(m => {
                    if (this.exampleBotMsg.isMod) {
                        let modIcon = document.createElement("img");
                        modIcon.classList.add("userIcon");
                        modIcon.src = "images/mod.png";
                        td.append(modIcon);
                    }
                    if (this.exampleBotMsg.isVip) {
                        let vipIcon = document.createElement("img");
                        vipIcon.classList.add("userIcon");
                        vipIcon.src = "images/vip.png";
                        td.append(vipIcon);
                    }
                    let spanBot = document.createElement("span");
                    let spanBotMsg = document.createElement("span");
                    spanBot.textContent = "BasedgeBot:";
                    spanBot.classList.add("exampleBot");
                    spanBotMsg.textContent = m;
                    spanBotMsg.classList.add("exampleBotMsg");
                    td.append(spanBot, spanBotMsg, document.createElement("br"));
                });
            }
            if (this.twitchMsg !== null) {
                let spanTwitchMsg = document.createElement("span");
                spanTwitchMsg.textContent = this.twitchMsg;
                spanTwitchMsg.classList.add("exampleTwitchMsg");
                td.append(spanTwitchMsg);
            }

            tr.append(td);
            table.append(tr);
        }
        return table;
    }
}

const CommandsList = [
    new Command("!тест", "qweqwe", null, { msg: "message", isMod: true, isVip: true }, { msg: ["answer"], isMod: true }),
    new Command("!тест2", "asdasd", null, { msg: "message" }),
    new Command("!тест3", "asdasd", 5, null, { msg: ["qweqwe"], isVip: true }, "1123231232"),
    new Command("!цвет", "Выводит цвет твоего ника в чат"),
    new Command("!погода", "Выводит значения погоды для выбранного региона", null, { msg: "!погода калининград" },
        { msg: ["Username, погода в Калининград, Россия. 🕑 Местное время - 23:23 🌡 +16°C (ощущается как +14°C) ☀ Ясно 💧 Влажность - 88% 💨 2м/с 🌆 Закат в 20:44"], isMod: true }),
    new Command("!math", "Введите пример, бот выведет решение")
];

const AdminCommandsList = [
    new Command("!мут", "Мутит выбранного пользователя", 0, { msg: "!мут morange51 20 рофл", isMod: true }, null,
        "morange51 has been timed out for 20s."),
    new Command("!спам", "Спамит сообщением", null, { msg: ["!spam 3 Hello World"], isMod: true }, { msg: ["Hello World", "Hello World", "Hello World"], isMod: true }),
];

const GameCommandsList = [

];

const TestCommandsList = [
    new Command("!qwerty")
];
