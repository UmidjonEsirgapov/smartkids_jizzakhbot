const fs = require('fs');
const path = require('path');

module.exports = {
    logStart() {
        console.log('Bot ishga tushdi!!!')
    },

    getChatId(msg) {
        return msg.chat.id;
    },
    returnAllMedia() {
       return fs.readdir(path.resolve(__dirname, 'photos', 'group', '1'), (err, files) => {
            if(err) {
                console.error(err)
            }
        
            // console.log(files)
            const data =  files.map(item =>  ({
                    type: 'photo',
                    media: `${path.resolve(__dirname, 'photos', 'group', '1', item)}`
            }));
            // console.log(data);
            return data;
        })
    },

    photoGroup1() {
        let files = [];
        for (let i = 0; i < 10; i++){
            files[i] = (i+1) + '.jpg';
        }

        return files.map(item => ({
            type: 'photo',
            media: `${path.resolve(__dirname, 'photos', 'group', '1', item)}`
        }))
    },
    photoGroup2() {
        let files = [];
        for (let i = 0; i < 10; i++){
            files[i] = (i+1) + '.jpg';
        }

        return files.map(item => ({
            type: 'photo',
            media: `${path.resolve(__dirname, 'photos', 'group', '2', item)}`
        }))
    },
    photoGroup3() {
        let files = [];
        for (let i = 0; i < 10; i++){
            files[i] = (i+1) + '.jpg';
        }

        return files.map(item => ({
            type: 'photo',
            media: `${path.resolve(__dirname, 'photos', 'group', '3', item)}`
        }))
    },
    userName(msg){
        if(msg.chat.username){
            return `📱 Telegram - @${msg.chat.username}\n`;
        }
    },
    sendContact(msg,toContact){
        let username;
        if(msg.chat.username){
            this.userName = `📱 Telegram - @${msg.chat.username}\n`
        }else{
            this.userName = ''
        }
        return bot.sendMessage(toContact, `Hoziroq telefon qiling 👇\n\n👤Ism - ${msg.chat.first_name}\n${this.userName}📞 Telefon raqam - ${msg.contact.phone_number}`)
    }
}