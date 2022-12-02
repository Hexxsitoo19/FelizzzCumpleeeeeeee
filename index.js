const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert
    ('en este dia especial quiero que la pases bien , espero aver sido el primero bueno, sabes que yo estare aqui para apoyarte en todo y sabes que me tienes ami para lo que sea  🌹 ')
});
yesBtn.addEventListener('click',function () {
    alert
    ('ERES UNA PERSONA MUY INCREIBLE ENSERIO GRACIAS ALA VIDA POR HABERME ENCONTRADO CONTIGO <3 ')
});

yesBtn.addEventListener('click',function () {
    alert
    (' y ahora preparate por que te voy a cantar')
});
yesBtn.addEventListener('click',function () {
    alert
    (' 3 ')
});
yesBtn.addEventListener('click',function () {
    alert
    (' 2 ')
});
yesBtn.addEventListener('click',function () {
    alert
    (' 1 ')
});
yesBtn.addEventListener('click',function () {
    alert
    ('YYY SOLO MIRAME CON ESOS OJITOS TAN LINDOS  ')
});
yesBtn.addEventListener('click',function () {
    alert
    ('Y CON ESO YO ESTOY BIEN EH VUELTO A NACERRRR<3')
});

yesBtn.addEventListener('click',function () {
    alert
    ('Quieres mas ?')
});
yesBtn.addEventListener('click',function () {
    alert
    ('Ya Un poco mas')
});
yesBtn.addEventListener('click',function () {
    alert
    (' esta bien')
});
yesBtn.addEventListener('click',function () {
    alert
    ('BEIBI ME CANSE DE PONER PEROS TOY COMO PARA GRITALO AL MUNDO QUE TE QUIERO<3')
});
yesBtn.addEventListener('click',function () {
    alert
    ('VIVIMOS EN VACACIONES SI NO ESTAMOS EN ENERO')
});
yesBtn.addEventListener('click',function () {
    alert
    ('LLEVAME DE VIAJE QUIERO SER TU PASAJERO')
});
yesBtn.addEventListener('click',function () {
    alert
    ('SI NO HAY TRUCOS PARA CONQUISTARTEE ME LA INVENTO')
});

yesBtn.addEventListener('click',function () {
    alert
    (' Si si lo se es muy poco verdad jajaja')
});
yesBtn.addEventListener('click',function () {
    alert
    (' Y si quieres mas me dices , yo haria todo por verte feli<3')
});

yesBtn.addEventListener('click',function () {
    alert
    (' Pero bueno se que hoy sera un gran dia ya veraz<3')
});
yesBtn.addEventListener('click',function () {
    alert
    ('y te preguntaras como hize esto aunque es sencillo no es tanto pero es lo que cuenta , pero quiero que sepas que cuando domine mas esto te hare mas <3')

});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
