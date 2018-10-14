var gProjs = [
    {
        id: makeId(),
        name: 'book-store',
        title: 'Administration Tool for books store or other items.',
        desc: `In this Tool the administor (book owner) can manage his book inventory with some
     features like:"add book","update book","remove book" and also get quick view on that book`,
        url: 'ex-gallery-master\proj\day20-bookstore',
        publishedAt: moment(1538382701000).format('MMMM YYYY,'),
        client: 'book owner',
        img: 'img/portfolio/book-store-worm.jpg',
        labels: ["update items", "delete items"],
    },

    {
        id: makeId(),
        name: 'todo-list',
        title: 'Todo Tool that allow you to follow your daily tasks.',
        desc: `in this project user is able to create his own task getting their preiorty (by lvls 1-3)
     he can mark them as "DONE" or delete them permanently`,
        url: 'projs/sokoban',
        publishedAt: moment(1538352701000).format('MMMM YYYY,'),
        client: 'Messy Person',
        img: 'img/portfolio/todo-list.jpg',
        labels: ["Manage your task", ""],
    },
    {
        id: makeId(),
        name: 'akinator-game',
        title: 'Akinator Game is a self learning Guessing game.',
        desc: `This game game is unique with a questions of Yes or No the Akinator can know on who 
     yo are thinking either its a someone important or not, and if he is wrong you can teach him.
     then he wont mistake in the next time ;)`,
        url: 'projs/sokoban',
        publishedAt: moment(1538352701000).format('MMMM YYYY,'),
        client: 'world',
        img: 'img/portfolio/akinator.jpg',
        labels: ["Guess who", "Self Learning"],
    },
]

function getProj(projId) {
    var currProj = gProjs.find(function (proj) {
        return (proj.id === projId)
    })
    return currProj
}

function getProgsForDisplay() {
    return gProjs;
}