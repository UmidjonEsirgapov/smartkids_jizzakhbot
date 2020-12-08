const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const config = require('./config');
const helper = require('./helper');
const keyboard = require('./keyboards');
const kb = require('./keyboard-buttons');
const path = require('path');
const text = require('./texts');

helper.logStart()

const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

bot.onText(/\/start/, msg => {
    const firstText = `Assalomu alaykum, ${msg.chat.first_name}\nBuyruqlardan birini tanlang 👇`;
    console.log(msg);
    bot.sendMessage(helper.getChatId(msg), firstText, {
        reply_markup: {
            keyboard: keyboard.home,
            resize_keyboard: true
        }
    })

    if (msg.chat.username === 'SmartkidsContact') {
        mahfuzaOpa = msg.chat.id;
    }
})

bot.on('message', (msg) => {

    const chatId = helper.getChatId(msg);

    switch (msg.text) {
        case kb.home.reg:
            bot.sendMessage(chatId, `${msg.chat.first_name} menga telefon raqamingizni yuboring 👇`, {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: [
                        [{ text: kb.getPhone, request_contact: true }],
                        [kb.back]
                    ]
                }
            })
            break
        case kb.home.about:
            bot.sendMessage(chatId, `Bo'limlarning birini tanlang 👇`, {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard.about
                }
            })
            bot.sendPhoto(chatId, 'https://telegra.ph/file/d615335e0139cc9381a4c.png', {
                caption: text.about
            })
            break
        case kb.home.whyUs:
            break
        case kb.home.manyQuation:
            bot.sendMessage(chatId, "Ko'p beriladigan savollar 👇", {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard.manyQuation
                }
            })
            break
        case kb.home.photo:
            bot.sendMediaGroup(chatId,
                helper.photoGroup1()
            )
            bot.sendMediaGroup(chatId,
                helper.photoGroup2()
            )
            bot.sendMediaGroup(chatId,
                helper.photoGroup3()
            )
            break
        case kb.home.comments:
            break
        case kb.back:
            bot.sendMessage(chatId, `🏘 Bosh sahifa`, {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard.home
                }
            })
            break
        case kb.about.con:
            bot.sendPhoto(chatId, 'https://telegra.ph/file/6d354442de6c9335ed47b.jpg', {
                parse_mode: 'Markdown',
                caption: text.con
            })
            break
        case kb.manyQuation.one:
            bot.sendMessage(chatId, text.one, {
                parse_mode: 'Markdown'
            })
            break
        case kb.manyQuation.two:
            bot.sendMessage(chatId, text.two, {
                parse_mode: 'Markdown'
            })
            break
        case kb.manyQuation.three:
            bot.sendMessage(chatId, text.manyQuation)
            break
        case kb.manyQuation.four:
            bot.sendMessage(chatId, text.four, {
                parse_mode: 'Markdown'
            })
            break
        case kb.manyQuation.five:
            bot.sendMessage(chatId, text.five, {
                parse_mode: 'Markdown'
            })
            break
        case kb.manyQuation.six:
            bot.sendMessage(chatId, text.six, {
                parse_mode: 'Markdown'
            })
            break
        case kb.manyQuation.seven:
            bot.sendPhoto(chatId, path.resolve(__dirname, 'photos', 'group', '2', '7.jpg'), {
                parse_mode: 'Markdown',
                caption: text.seven
            })
            break
    }
    function sendContact(msg,toContact){
        let username;
        if(msg.chat.username){
            this.userName = `📱 Telegram - @${msg.chat.username}\n`
        }else{
            this.userName = ''
        }
        return bot.sendMessage(toContact, `Hoziroq telefon qiling 👇\n\n👤Ism - ${msg.chat.first_name}\n${this.userName}📞 Telefon raqam - ${msg.contact.phone_number}`)
    }

    if (msg.contact) {
        sendContact(msg, config.chatFarrux);
        sendContact(msg, config.chatUmidjon);
        sendContact(msg, config.mahfuzaOpa);
        bot.sendMessage(chatId, "Bosh sahifa", {
            reply_markup: {
                resize_keyboard: true,
                keyboard: keyboard.home
            }
        })
    }
})

bot.on("polling_error", (err) => console.log(err));
