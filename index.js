 let table = document.getElementById("table")
let inpname = document.getElementById("inpname")
let age = document.getElementById("inpage")
let course = document.getElementById("course")
// let gender = document.getElementById("inpgender" )
let gender = document.getElementsByName("Gender");
let email = document.getElementById("inpemail")


function additem(){
    // let x = document.createElement("<i class='fa-solid fa-x' style='color: #ff0000;'></i>")
    let listrow = document.createElement("tr");
    let listname = document.createElement("td");
    let listage = document.createElement("td");
    let listcourse = document.createElement("td");
    let listgender = document.createElement("td");
    
    let listemail = document.createElement("td");
    let listaction = document.createElement("td");

    listname.textContent=inpname.value
    listage.textContent=age.value
    listcourse.textContent=course.value
    // listgender.textContent=gender.value
    for (i = 0; i < gender.length; i++) {
            if (gender[i].checked)
            {
                listgender.textContent="Female";
            }
            else{
                listgender.textContent="Male";
            }   
        }


    listemail.textContent=email.value
    listaction.innerHTML="<button onclick='deleteitem(event)' style='color:red;font-weight:bold;border:none;background-color:white; font-size:20px;cursor:pointer'>X</button>"
    // listaction.innerHTML="<i class='fa-solid fa-x' style='color: #ff0000;' onclick='deleteitem(event)'></i>"

    table.append(listrow)
    listrow.append(listname)
    listrow.append(listage)
    listrow.append(listcourse)
    listrow.append(listgender)
    listrow.append(listemail)
    listrow.append(listaction)
}

function deleteitem(event)
{
    event.target.parentElement.parentElement.remove()
}