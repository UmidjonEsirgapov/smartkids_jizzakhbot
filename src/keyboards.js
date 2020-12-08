const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.reg, kb.home.about],
        [kb.home.whyUs],
        [kb.home.manyQuation, kb.home.photo, kb.home.comments]
    ],
    about: [
        [kb.about.con, kb.back]
    ],
    manyQuation: [
        [kb.manyQuation.one],
        [kb.manyQuation.two],
        [kb.manyQuation.three],
        [kb.manyQuation.four],
        [kb.manyQuation.five],
        [kb.manyQuation.six],
        [kb.manyQuation.seven],
        [kb.back]
    ],
    back: [
        [kb.back]
    ],
    regBack: [
        [kb.getPhone],
        [kb.back]
    ]
}