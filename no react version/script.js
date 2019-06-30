const employeeImagePath = './res/img/employees/employee'
const rightArrowButton = document.getElementById('right_arrow_button')
const leftArrowButton = document.getElementById('left_arrow_button')
const employeeImage = document.getElementById('employee_image')
const employeeName = document.getElementById('employee_name');
const employeeDesc = document.getElementById('employee_desc');
const employees=[{name:'Piotr Olender', desc:'Frontend Designer'},
                {name:'Petrus Olender', desc:'Frontend Excogitatoris'},
                {name:'Peter Olender', desc:'Projektuesi para Fund'},
                {name:'Pierre Olender', desc:'Designer Di Front-end'},
                {name:'Petras Olender', desc:'Frontendo Dizaineris'},
                {name:'Pedro Olender', desc:'Designer de Dront-end'},
                {name:'Pedro Olender', desc:'Suunnittelija'},
                {name:'Pyjter Olender', desc:'Frontend Designer'},
                {name:'Petru Olender', desc:'Droiectant Frontend'},
                {name:'Petrus Olender', desc:'Dyzayner Peredn\'oho Kintsya'}];

const images=[];
for(let i=0;i<6;i++){
    images.push(document.getElementById('portrait_image'+i));
}
images[0].style.borderColor='#209BD6';
let clickedPortraitIndex=0;
let firstImageShown=0;

function slideLeft(){
    if(firstImageShown>0){
        images.forEach((element,index)=>{
            element.src=employeeImagePath+(firstImageShown+index-1)+'.jpg';
        })
        firstImageShown--;
        if(firstImageShown===0){
            leftArrowButton.disabled=true;
            rightArrowButton.disabled=false;
        }
        else
            rightArrowButton.disabled=false;

        changeBorderColor(-1,'left');
        }
        
    }      
function slideRight(){
    if(firstImageShown<5){
        images.forEach((element,index)=>{
            element.src=employeeImagePath+(firstImageShown+index+1)+'.jpg';
        })
        firstImageShown++;
        if(firstImageShown===4){
            rightArrowButton.disabled=true;
            leftArrowButton.disabled=false;
        }
        else
            leftArrowButton.disabled=false;
        
        changeBorderColor(-1,'right');
    }
}
function onPortraitClicked(imageNumber){
    changeBorderColor(imageNumber);
    employeeImage.style.backgroundImage ='url('+employeeImagePath+(imageNumber+firstImageShown)+'.jpg)';
    employeeName.innerHTML=employees[imageNumber+firstImageShown].name;
    employeeDesc.innerHTML=employees[imageNumber+firstImageShown].desc;
}   
function changeBorderColor(imageNumber,side){
    let newBorderIndex =clickedPortraitIndex-firstImageShown;
    let isOldBorderOutOfRange = newBorderIndex<0 || newBorderIndex>5;
    if(side!=='left'&&side!=='right'){
        images[imageNumber].style.borderColor='#209BD6';
        if(clickedPortraitIndex!==imageNumber+firstImageShown && !(isOldBorderOutOfRange))
            images[newBorderIndex].style.borderColor='transparent'; 
        clickedPortraitIndex=imageNumber+firstImageShown;
    }
    else if(side==='left'){
        if(isOldBorderOutOfRange){
            images[5].style.borderColor='transparent';
        }
        else if(newBorderIndex===0){
            images[0].style.borderColor='#209BD6';
        }
        else{
            images[newBorderIndex].style.borderColor='#209BD6';
            images[newBorderIndex-1].style.borderColor='transparent';
        }
    }
    else{
        if(isOldBorderOutOfRange){
            images[0].style.borderColor='transparent';
        }
        else if(newBorderIndex===5){
            images[5].style.borderColor='#209BD6';
        }
        else{
        images[newBorderIndex].style.borderColor='#209BD6';
        images[newBorderIndex+1].style.borderColor='transparent';
        }
    }
}
