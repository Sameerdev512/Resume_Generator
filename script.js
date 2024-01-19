function addskill(){
    let skill = document.getElementById("skills");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.setAttribute("placeholder","Enter skill name")

    let skillbtn = document.getElementById("addSkillBtn");
    skill.insertBefore(newNode,skillbtn)
}

function addEduDetails(){
    let EduDetails = document.getElementById("Education");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.setAttribute("placeholder","University-name ,Degree-name ,Percentage ,Year")

    let EduDetailsbtn = document.getElementById("addEduDetailsBtn");
    EduDetails.insertBefore(newNode,EduDetailsbtn)
}

function addExpDetails(){
    let ExpDetails = document.getElementById("Experience");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.setAttribute("placeholder","Company Name")

    let newNode2= document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("my-2");
    newNode2.setAttribute("placeholder","Experience Details")
    newNode.setAttribute("id","Exp_Field")

    let ExpDetailsbtn = document.getElementById("addExpDetailsBtn");
    ExpDetails.insertBefore(newNode,ExpDetailsbtn)
    ExpDetails.insertBefore(newNode2,ExpDetailsbtn)
}

function addLang(){
    let lang = document.getElementById("Languages");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.setAttribute("placeholder","Enter language name")

    let langbtn = document.getElementById("addLangBtn");
    lang.insertBefore(newNode,langbtn)
}

function addcrtfDetails(){
    let crtfDetails = document.getElementById("Certification");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.setAttribute("placeholder","Organisation Name")

    let newNode2= document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("my-2");
    newNode2.setAttribute("placeholder","Certifiaction Details")
    newNode.setAttribute("id","crtf_Details")

    let crtfDetailsbtn = document.getElementById("addcrtfDetailsBtn");
    crtfDetails.insertBefore(newNode,crtfDetailsbtn)
    crtfDetails.insertBefore(newNode2,crtfDetailsbtn)
}

function addHobby(){
    let Hobby = document.getElementById("Hobbies");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.setAttribute("placeholder","Enter Your Hobby")

    let Hobbybtn = document.getElementById("addHobbyBtn");
    Hobby.insertBefore(newNode,Hobbybtn)
}

function addref(){
    let refrence = document.getElementById("refrence");

    let newNode= document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("my-2");
    newNode.setAttribute("placeholder","Enter Refrence")

    let refbtn = document.getElementById("addrefBtn");
    refrence.insertBefore(newNode,refbtn)
}