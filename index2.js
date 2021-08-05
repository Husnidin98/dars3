/*   birinchi dars
alert("Wellcome to calulator app")
let son1=prompt("sonni kriting");
let amal=prompt("amalni krinting");
let son2=prompt("ikkinchi sonni kriting")
if(amal==='+'){
	alert(`${son1}${amal}${son2}=${Number(son1)+Number(son2)}`)
}
if(amal==='-'){
	alert(`${son1}${amal}${son2}=${Number(son1)-Number(son2)}`)
}
if(amal==='*'){
	alert(`${son1}${amal}${son2}=${Number(son1)*Number(son2)}`)
}
if(amal==='/'){
	alert(`${son1}${amal}${son2}=${Number(son1)/Number(son2)}`)
}*/
/*
let Uzb=prompt("Pul miqdorini kriting");
let Usd=Uzb/10654;
let Euro=Uzb/12674;
alert(`${Uzb} sum-${Usd}$-ga teng buni yaxlitlaydigon busak ${Math.round(Usd)}$ teng buladi.
${Uzb} sum-${Euro}Euro-ga teng buni yaxlitlaydigon busak ${Math.round(Euro)}Euro teng buladi.`)*/

//   2- dars
// function
// local opperation
// Ternary
// if else
/*let name=prompt("ismingiz nma");

function greeting(ism) {
	alert(`Assalomu aleykum, ${ism}` );
}

greeting(name);
greeting("Salom mehmon");*/
// locla operator
// >, <, ==, ===,
// ternary

/*let age=prompt("isni kriting");
let isAllowed=age>18;
let javob=isAllowed ? "/mumkin": "Mumkin mas"
document.write(javob);*/
let ism=prompt("Ismiz Nma");
let Sum=prompt("pulingiz qancha");
let d=Number(Sum)/9433.34;
let y=Number(Sum)/10354.03-250*9433.34/10354.03;
let ortiq=Number(Sum)/10354.03-250*9433.34/10354.03-120;
if(d>250 && y>120){
	alert(`${ism} Sizga Oq yul. Aytkandek! Sizga barcha xarajotlardan tashqari yana ortiqcha ${ortiq}yevro
 pulizbor buni yaxlit lasak ${Math.round(ortiq)}-yevro ga teng buladi ${ism} szga gapyuq! `);
}
else if(d>250 && y<120){
	alert(`${ism} sizga sayohatga borishuchun mehmonxona xizmatiga puliz yetadi ammo Muzey va kungilochar joylar uchun yana ${ortiq}yevro pul kerak sizga buni yaxlitlasak ${Math.round(ortiq)}yevro-ga teng ${ism} Afsuski siz xali sayoxatga borolmaysz`);
}
else{
	alert(`${ism} Sayohatga Borish uchun xali ancha uqishizkerak fikrni jalab darsni uqing `);
}

































