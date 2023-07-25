
function validate() {
    let startdate = document.getElementById("startdate")
    let enddate = document.getElementById("enddate")
    let taskname = document.getElementById("taskname")
    let status = document.getElementById("status")
    let start_label = document.getElementById("startdatelabel")
    let end_label = document.getElementById("enddateLabel")
    let task_label = document.getElementById("taskLabel")
    let stat_label = document.getElementById("statusLabel")
    let dis_label = document.getElementById("disc")
    let subtaskname = document.getElementById("subtaskname")
    let subtaskLabel = document.getElementById("subtaskLabel")
    let flag = 0;

    const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');
let currentMonth = String(date.getMonth()+1).padStart(2,"0");
let currentYear = date.getFullYear()
let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;



    if(taskname.value==""){
        task_label.innerHTML="*Please enter task name"
        flag--
    }else{
    task_label.innerHTML=""
    flag++
    }
    
    if(subtaskname.value==""){
        subtaskLabel.innerHTML="*Enter subtask"
        flag--
    }else{
        subtaskLabel.innerHTML=""
        flag++
    }


    if (enddate.value == "") {
        end_label.innerHTML = "*Please end date"
        flag--
    } else {
        end_label.innerHTML = ""
        flag++
    }


    if (status.value == "none") {
        stat_label.innerHTML = "*Please enter status"
        flag--
    } else {
        stat_label
        flag++
    }


    if (startdate.value > enddate.value) {
        dis_label.innerHTML = "*Start date cannot be greater than end date"
        flag--
    } else {
        dis_label.innerHTML = ""
        flag++
    }


    if (startdate.value == "") {
        start_label.innerHTML = "*Please enter start date"
        flag--
    }
       else if(currentDate > enddate.value ){
            status.value="passed due"
            flag++
        }
    else {
        start_label.innerHTML = ""
        flag++
    }

  
    


    if (flag == 6) {
        data();
    }
}