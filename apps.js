const district = {
    congressionalDistrict: '5',
    taxes: 'Lower',
    jobs: 'more',
    infrastructure: 'high class',
    healthCare: 'cheaper insurance',
    crime: 'more police training'
}

function changeJobs (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeJobs(district, 'jobs', "less");
console.log(district);

const url = {
    giveMeMoney: 'www.ineedpaper.com'
}

function changeThis (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeThis(url, 'giveMeMoney', "www.cash.com");
console.log(url);

const calender = {
    Parade: 'May 5th',
    Speech: 'May 11th',
    Election: 'May 20th'    
}
function changeCal (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeCal(calender, 'Speech', "May 12th");
console.log(calender);

const volunteer = {
    Name: 'Joe Black',
    Address: '101 Expressway Ln',
    Email: 'emailme@email.com',
    Phone: '9292929292',
    Avaliability: 'Sometimes',
    Activities: 'Leaving',
}
function changeVol (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeVol(volunteer, 'Phone', "9374374833");
console.log(volunteer);

const bio = {
    Age: '33',
    BirthPlace: 'TN',
    Children: 'Cant',
    Promises: 'Empty'
}
function changeBio (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeBio(bio, 'Age', "I lied");
console.log(bio);

const img = {
    Headshot: 'head.jpg',
    Family: 'family.jpg',
    Constituents: 'constituents.jpg'
}
function changeImg (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeImg(img, 'Family', "meandyou.jpg");
console.log(img);

const mission = {
    One: 'I will make your life better, and you will like me.'
}
function changeMission (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeMission(mission, 'One', "I might make your life better");
console.log(mission);

const vote = {
    Website: 'www.voteformehere.com'
}
function changeVote (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue
}
changeVote(vote, 'Website', "www.votehere.com");
console.log(vote);

let jack = document.createElement('article');
jack.setAttribute('id', 'District5'); 
document.body.append(jack)

let scott = document.createTextNode(district.congressionalDistrict)
document.body.appendChild(jack)
console.log(scott)

let mike = document.createTextNode(district.taxes)
document.body.appendChild(jack)
console.log(mike)

let jim = document.createTextNode(district.jobs)
document.body.appendChild(jack)
console.log(jim)

let milton = document.createTextNode(district.infrastructure)
document.body.appendChild(jack)
console.log(milton)

let bob = document.createTextNode(district.healthCare)
document.body.appendChild(jack)
console.log(bob)

let crab = document.createTextNode(district.crime)
document.body.appendChild(jack)
console.log(crab)