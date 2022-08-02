class Command {
    constructor(name, description = null, cooldown = null, syntax = null, exampleUserMsg = null, exampleBotMsg = null, twitchMsg = null) {
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
        this.syntax = syntax;
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
            td.textContent = "Команда";
            tr.append(td);
            td = document.createElement("td");
            td.textContent = this.description;
            tr.append(td);
            table.append(tr);
        }
        if (this.cooldown !== null) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = "Cooldown";
            tr.append(td);
            td = document.createElement("td");
            td.textContent = `${this.cooldown} сек.`;
            tr.append(td);
            table.append(tr);
        }
        if (this.syntax !== null) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.textContent = "Синтаксис";
            tr.append(td);
            td = document.createElement("td");
            td.innerHTML = StringFormatting(this.syntax);
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
                if (this.exampleUserMsg.isOwner) {
                    let ownerIcon = document.createElement("img");
                    ownerIcon.classList.add("userIcon");
                    ownerIcon.src = "images/broadcaster.png";
                    td.append(ownerIcon);
                }
                if (this.exampleUserMsg.isNovideo) {
                    let novideoIcon = document.createElement("img");
                    novideoIcon.classList.add("userIcon");
                    novideoIcon.src = "images/no-video.png";
                    td.append(novideoIcon);
                }
                if (this.exampleUserMsg.isGlitch) {
                    let glitchIcon = document.createElement("img");
                    glitchIcon.classList.add("userIcon");
                    glitchIcon.src = "images/glitch.png";
                    td.append(glitchIcon);
                }
                let spanUser = document.createElement("span");
                let spanUserMsg = document.createElement("span");
                spanUser.textContent = "mooncat3:";
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
                    if (this.exampleBotMsg.isOwner) {
                        let ownerIcon = document.createElement("img");
                        ownerIcon.classList.add("userIcon");
                        ownerIcon.src = "images/broadcaster.png";
                        td.append(ownerIcon);
                    }
                    if (this.exampleBotMsg.isNovideo) {
                        let novideoIcon = document.createElement("img");
                        novideoIcon.classList.add("userIcon");
                        novideoIcon.src = "images/no-video.png";
                        td.append(novideoIcon);
                    }
                    if (this.exampleBotMsg.isGlitch) {
                        let glitchIcon = document.createElement("img");
                        glitchIcon.classList.add("userIcon");
                        glitchIcon.src = "images/glitch.png";
                        td.append(glitchIcon);
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
    new Command("!color", "Цвет никнейма", 3, "!color", { msg: ["!color"], isOwner: true, isGlitch: true }, { msg: ["&mooncat3, твой цвет Апельсиновый"], isMod: true, isNovideo: true }),
    new Command("!forecast", "Прогноз погоды на 3 дня", 30, "!forecast $region", { msg: ["!forecast Москва"], isOwner: true, isGlitch: true }, { msg: ["mooncat3, прогноз для Москва, Россия. Вторник: +28°C 🌤 Облачно с прояснениями. Среда: +30°C ☁ Пасмурно. Четверг: +29°C 🌧 Небольшой дождь."], isMod: true, isNovideo: true }),
    new Command("!math", "Решение примера", 5, "!math $problem",{ msg: ["!math 2*2"], isOwner: true, isGlitch: true }, { msg: ["mooncat3, 2*2 = 4"], isMod: true, isNovideo: true }),
    new Command("!weather", "Прогноз погоды на текущий момент", 30, "!weather $region",  { msg: ["!weather Москва"], isOwner: true, isGlitch: true }, { msg: ["mooncat3, погода в Москва, Россия. 🕑 Местное время - 18:15 🌡 +27°C (ощущается как +26°C) 🌤 Облачно с прояснениями 💧 Влажность - 41% 💨 1.6м/с 🌆 Закат в 20:35"], isMod: true, isNovideo: true }),
];

const AdminCommandsList = [
    new Command("!add", "Добавить кастомную команду", 0, "!add $command $cooldown $message", { msg: ["!add !вк 10 vk.com/me"], isOwner: true, isGlitch: true}, { msg: ["mooncat3, команда !вк удалена."], isMod: true, isNovideo: true }),
    new Command("!ban", "Блокировка пользователя", 0, "!ban $user $reason",  { msg: ["!ban @morange51 п-ворд"], isOwner: true, isGlitch: true }, null, "basedgebot banned morange51. Reason: п-ворд."),
    new Command("!del", "Удалить кастомную команду", 0, "!del $command", { msg: ["!del !вк"], isOwner: true, isGlitch: true }, { msg: ["mooncat3, команда !вк удалена."], isMod: true, isNovideo: true }),
    new Command("!mute", "Таймаут пользователя", 0, "!mute $user $seconds $reason", { msg: ["!mute @morange51 60 спам"], isOwner: true, isGlitch: true }, null, "basedgebot timed out morange51 for 60 seconds. Reason: спам."),
    new Command("!spam", "Спам фразой", 3, "!spam $amount $message",{ msg: ["!spam 3 Hello World"], isOwner: true, isGlitch: true }, { msg: ["Hello World", "Hello World", "Hello World"], isMod: true, isNovideo: true }),
    new Command("!unban", "Разжалование пользователя", 0, "!unban $user", { msg: ["!unban @morange51"], isOwner: true, isGlitch: true }, null, "basedgebot removed ban on morange51."),

];

const GameCommandsList = [
    new Command("!casino", "Виртуальное казино", 3, "!casino $bet $amount", { msg: ["!mute @morange51 60 спам"], isOwner: true, isGlitch: true }, null, "basedgebot timed out morange51 for 60 seconds. Reason: спам."),
    new Command("!roulette", "Русская рулетка", 5, "!roulette",{ msg: ["!spam 3 Hello World"], isOwner: true, isGlitch: true }, { msg: ["Hello World", "Hello World", "Hello World"], isMod: true, isNovideo: true }),
    new Command("!slots", "Слоты", 3, "!slots $amount",  { msg: ["!ban @morange51 п-ворд"], isOwner: true, isGlitch: true }, null, "basedgebot banned morange51. Reason: п-ворд."),
    new Command("!trade", "Акции", 3, "!trade $bet $amount", { msg: ["!unban @morange51"], isOwner: true, isGlitch: true }, null, "basedgebot removed ban on morange51."),
];

const TestCommandsList = [
    new Command("test page")
];