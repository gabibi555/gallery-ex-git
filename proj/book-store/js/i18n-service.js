var gCurrLang = 'en';

var gTrans = {
    "currency": {
        en: 'USD',
        he: 'ILS'
    },
    "currency-code": {
        en: 'en-US',
        he: 'he-IL'
    },
    "page-title": {
        en: 'Welcome To The BookWorm',
        he: 'ברוך הבא לתולעת הספרים',
    },
    "create-book": {
        en: 'Create Book',
        he: "צור ספר",
    },
    "book-name": {
        en: 'Book Title',
        he: 'שם הספר',
    },
    "book-price": {
        en: 'Price',
        he: 'מחיר',
    },
    "book-photo": {
        en: 'photo',
        he: 'תמונה',
    },
    "modal-close": {
        en: 'close',
        he: 'סגור',
    },
    "books-avaliable": {
        en: 'Books Avaliable',
        he: 'ספרים זמינים',
    },
    "book-action": {
        en: 'actions',
        he: 'פעולות',
    },
    "book-id": {
        en: 'Book-ID',
        he: 'מק"ט',
    },
    "lang-filter": {
        en: 'Language',
        he: 'שפה',
    },
    "read-btn": {
        en: 'Read Book',
        he: 'קרא ספר',
    },
    "update-btn": {
        en: 'Update Book',
        he: 'עדכן ספר',
    },
    "delete-btn": {
        en: 'Delete Book',
        he: 'מחק ספר',
    },

}


function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var transKey = el.getAttribute('data-trans');
        var txt = getTrans(transKey);
        el.innerText = txt;
    }
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    if (!txt) txt = keyTrans['en'];

    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
    if (gCurrLang === 'he') {
        document.querySelector('.change-lang').classList.add('rtl')

    } else {
        document.body.classList.remove('rtl')
    }
    doTrans();
    render()
}

function getLocalPrice(price) {
    console.log('hhehe')
    if (gCurrLang === 'he') {
        price = price * 3.5
        return new Intl.NumberFormat(gTrans['currency-code'][gCurrLang], { style: 'currency', currency: gTrans.currency[gCurrLang] }).format(price);
    } if (gCurrLang === 'en'){
        return new Intl.NumberFormat(gTrans['currency-code'][gCurrLang], { style: 'currency', currency: gTrans.currency[gCurrLang] }).format(price);

    }
}

