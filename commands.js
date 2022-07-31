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
            tr.appendChild(td);
            td = document.createElement("td");
            td.textContent = this.description;
            tr.appendChild(td);
            table.appendChild(tr);
        }
        if (this.cooldown !== null) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = "Кд";
            tr.appendChild(td);
            td = document.createElement("td");
            td.textContent = `${this.cooldown}с`;
            tr.appendChild(td);
            table.appendChild(tr);
        }
        if ([this.exampleUserMsg, this.exampleBotMsg, this.twitchMsg].some((param) => param !== null)) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = "Пример использования";
            tr.appendChild(td);
            td = document.createElement("td");

            if (this.exampleUserMsg !== null) {
                let spanUser = document.createElement("span");
                let spanUserMsg = document.createElement("span");
                spanUser.textContent = "Username:";
                spanUser.classList.add("exampleUsername");
                spanUserMsg.textContent = this.exampleUserMsg;
                spanUserMsg.classList.add("exampleNicknameMsg");
                td.append(spanUser, spanUserMsg);
            }
            if (this.exampleBotMsg !== null) {
                let spanBot = document.createElement("span");
                let spanBotMsg = document.createElement("span");
                spanBot.textContent = "BasedgeBot:";
                spanBot.classList.add("exampleBot");
                spanBotMsg.textContent = this.exampleBotMsg;
                spanBotMsg.classList.add("exampleBotMsg");
                td.append(document.createElement("br"), spanBot, spanBotMsg);
            }
            if (this.twitchMsg !== null) {
                let spanTwitchMsg = document.createElement("span");
                spanTwitchMsg.textContent = this.twitchMsg;
                spanTwitchMsg.classList.add("exampleTwitchMsg");
                td.append(document.createElement("br"), spanTwitchMsg);
            }

            tr.appendChild(td);
            table.appendChild(tr);
        }
        return table;
    }
}

const CommandsList = [
    new Command("!цвет", "Выводит цвет твоего ника в чат"),
    new Command("!погода", "Выводит значения погоды для выбранного региона", null, "!погода калининград",
        "Username, погода в Калининград, Россия. 🕑 Местное время - 23:23 🌡 +16°C (ощущается как +14°C) ☀ Ясно 💧 Влажность - 88% 💨 2м/с 🌆 Закат в 20:44"),
    new Command("!math", "Введите пример, бот выведет решение")
];

const AdminCommandsList = [
    new Command("!мут", "Мутит выбранного пользователя", 0, "!мут morange51 20 рофл", null, "morange51 has been timed out for 20s."),
    new Command("!спам", "Спамит сообщением")
];

const GameCommandsList = [

];
