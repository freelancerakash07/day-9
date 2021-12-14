
const salari = [
    
    {
       id       :  12565,
       name     : 'akash',
       roll     :  6,
       salari   :  60000,
       location :  'manikgonj'
       
    },

    {
        id       :  65847,
        name     : 'achem',
        roll     :  8,
        salari   :  70000,
        location :  'mirpur'
        
     },

     {
        id       :  54875,
        name     : 'abu said',
        roll     :  10,
        salari   :  40000,
        location :  'kholna'
        
     },

     {
        id       :  25487,
        name     : 'nur amin',
        roll     :  18,
        salari   :  80000,
        location :  'shelet'
        
     },

     {
        id       :  45875,
        name     : 'ratol',
        roll     :  30,
        salari   :  90000,
        location :  'dhaka'
        
     },

     {
        id       :  52415,
        name     : 'rohim',
        roll     :  31,
        salari   :  90000,
        location :  'manikgonj'
        
     },

     {
        id       :  45748,
        name     : 'korim',
        roll     :  32,
        salari   :  90000,
        location :  'shelet'
        
     },

     {
        id       :  54784,
        name     : 'jodu',
        roll     :  33,
        salari   :  90000,
        location :  'manikgonj'
        
     },

     {
        id       :  45784,
        name     : 'modu',
        roll     :  34,
        salari   :  90000,
        location :  'manikgonj'
        
     },

     {
        id       :  02145,
        name     : 'shohid',
        roll     :  35,
        salari   :  90000,
        location :  'dhaka'
        
     },

     {
        id       :  45874,
        name     : 'milon',
        roll     :  36,
        salari   :  90000,
        location :  'dhaka'
        
     },

     {
        id       :  54874,
        name     : 'adom',
        roll     :  37,
        salari   :  90000,
        location :  'dhaka'
        
     },

     {
        id       :  54874,
        name     : 'firoj',
        roll     :  30,
        salari   :  90000,
        location :  'dhaka'
        
     },

     {
        id       :  21458,
        name     : 'jovai',
        roll     :  30,
        salari   :  90000,
        location :  'dhaka'
        
     },

     {
        id       :  45215,
        name     : 'shomon',
        roll     :  30,
        salari   :  90000,
        location :  'dhaka'
        
     },

     {
        id       :  45854,
        name     : 'shemon',
        roll     :  30,
        salari   :  90000,
        location :  'dhaka'
        
     },
     {
        id       :  54847,
        name     : 'sajjad',
        roll     :  30,
        salari   :  90000,
        location :  'dhaka'
        
     },
]


const rugalt = [

    {
        name        : 'akash',
        reg         : 15487554,
        roll        : 6,
        location    : 'manikgonj',


        bn          : 50,
        en          : 70,
        math        : 80,
        s           : 60,
        ss          : 40,
        rel         : 90,

    },

    {
        name        : 'rakib',
        reg         : 15527554,
        roll        : 60,
        location    : 'dhaka',


        bn          : 50,
        en          : 60,
        math        : 90,
        s           : 60,
        ss          : 40,
        rel         : 90,

    },

    {
        name        : 'abu said',
        reg         : 15448554,
        roll        : 6,
        location    : 'mirpur',


        bn          : 40,
        en          : 70,
        math        : 70,
        s           : 60,
        ss          : 80,
        rel         : 90,

    },

    {
        name        : 'abu sufial',
        reg         : 15445554,
        roll        : 6,
        location    : 'shelat',


        bn          : 50,
        en          : 70,
        math        : 80,
        s           : 60,
        ss          : 40,
        rel         : 90,

    },

    {
        name        : 'nur amin',
        reg         : 15486854,
        roll        : 6,
        location    : 'uttora',


        bn          : 50,
        en          : 60,
        math        : 80,
        s           : 90,
        ss          : 49,
        rel         : 90,

    },

    {
        name        : 'achem',
        reg         : 15478958,
        roll        : 2,
        location    : 'mirpur',


        bn          : 60,
        en          : 70,
        math        : 90,
        s           : 50,
        ss          : 60,
        rel         : 80,
    }
]

const famaly = [

    {
        name        : 'akash',
        relation    : 'me',
        phoneNumber : '01819522713',
        location    : 'manikgonj',

    },

    {
        name        : 'tajel',
        relation    : 'father',
        phoneNumber : '01819522695',
        location    : 'manikgonj',

    },

    {
        name        : 'poly',
        relation    : 'sister',
        phoneNumber : '01819522548',
        location    : 'manikgonj',

    },

    {
        name        : 'rabeka',
        relation    : 'mother',
        phoneNumber : '01819522758',
        location    : 'manikgonj',

    },

    {
        name        : 'ridom',
        relation    : 'brother',
        phoneNumber : '01819522658',
        location    : 'Dhaka',

    },

    {
        name        : 'ahasa',
        relation    : 'sister',
        phoneNumber : '01819522758',
        location    : 'Dhaka',

    },

    {
        name        : 'roksana',
        relation    : 'anti',
        phoneNumber : '01819522756',
        location    : 'Dhaka',

    },

    {
        name        : 'anis',
        relation    : 'me',
        phoneNumber : '01819522713',
        location    : 'Dhaka',

    },

    {
        name        : 'shelem',
        relation    : 'vai',
        phoneNumber : '01819522725',
        location    : 'gjzipur',

    },

    {
        name        : 'Achem',
        relation    : 'brother',
        phoneNumber : '01845759586',
        location    : 'mirpur',

    },
]



// salari localstorage input..

let set  = JSON.stringify(salari);

localStorage.setItem('developers', set);

// rugalt lacalstorage input..

let  data  = JSON.stringify(rugalt);

localStorage.setItem('student',data);

// famali localstorage input..

let  rel  = JSON.stringify(famaly);

localStorage.setItem('famaly', rel);



let fata = JSON.parse(localStorage.getItem('developers'))
let totalTaka = 0;
fata.map( (akash)  => {
    console.log(`
    Name        :   ${akash.name}
    Selary      :   ${akash.salari} Taka
    Location    :   ${akash.location}
------------------------------------------------    
    
    `);
    totalTaka = totalTaka + akash.salari;
})
console.log(`Total Taka ${totalTaka} Taka`);