let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let users = ['me hablo tu doppelganger de los paises bajos', 
              'espero no volver a encontrarte en ninguna reencarnacion mas',
              '*manda porno por sms*',
              'comamos completos -  NO',
              'Era todo mentira finalmente. Yo me uni a tu alma cuando tiramos, pero tu alma no se unió a la mia. Solo me usó.',
              'Todo lo queris hacer a tu modo, a tu forma. Escuchai menos que Piñera y su Luna en Aries.',
              'Sé que te importa una mierda, pero estoy en esta. Tuve que ir al médico por un dolor de útero horrible y es posible que esté abortando.',
              'Te funaron por penca más de cuarenta personas, estás solo, triste y obsesionado conmigo, porque eso te pasa: estás obsesionado conmigo.',
              'No estás deprimido, Eres un brujo poderoso y no te das ni cuenta.[…]. No seas como mi abuela canceriana, Avanza y hazte cargo de tu vida.',
               'Cuando estabas en mi casa y nos acostamos juntos y llegó mi gata, senti una energía tremendamente poderosa: el llamado a hacer familia. Contigo.',
                'ayer me tiré dos gringos en tu nombre',
                'Mi mamá me leyó el tarot y me dijo que estas celoso',
                '¿Hasta cuando vai a seguir metido en la falopa',
                'Y para que tengas un ataque de celos fundado',
                'mi gato Nahuel tiene Venus en Leo, igual que tu',


            ];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});

