module.exports = {
    name: 'list',
    description: 'CivRandomizer list',
    help: 'No help here(',
    execute(message, args) {
        if (!Perm.checkRoles(message, CurrState, false, false, true)) {
            message.reply("ахуел?(CivRole only)");
            return;
        }
        message.channel.send("https://docs.google.com/spreadsheets/d/19xww9IQSxxHHhcdgta2aQh0-j74S6XFQ-sODytAjWdg/edit?usp=sharing");
    },
};