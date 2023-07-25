popup = document.getElementById("edit1")

function openpopup(a, sub) {


    popup.classList.add("edit-popup")
    console.log(a);
    document.getElementById("idx1").value = a // [{taskmname:jhgjhg,sub:{}}]
    document.getElementById("sub").value = sub // [{taskmname:jhgjhg,sub:{}}]
    console.log(arr[a][sub]);
    document.getElementById("edit-startdate1").value = arr[a][sub].startdate
    document.getElementById("edit-enddate1").value = arr[a][sub].enddate
    document.getElementById("edit-status1").value = arr[a][sub].status1
    document.getElementById("edit-taskname").value = arr[a].taskname

    // console.log(arr[a].sub.startdate);

}

function closepopup() {
    let idx = document.getElementById("idx1").value;
    let sub = document.getElementById("sub").value;
    arr[idx][sub].startdate = document.getElementById("edit-startdate1").value
    arr[idx][sub].enddate = document.getElementById("edit-enddate1").value
    arr[idx][sub].status1 = document.getElementById("edit-status1").value
    arr[idx].taskname = document.getElementById("edit-taskname").value


    // table1.innerHTML = str;
    let str = "";
    let data = arr[idx];
    console.log(data);
    for (let k in data) {
        if (k == "taskname") {
            continue;
        }
        str += `<tr>
            <td>${k}</td>
            
            <td>${data[k].startdate} </td>
            <td>${data[k].enddate}</td>
            <td>${data[k].status1}</td>
            <td>
                <button onclick = "openpopup(${idx},'${k}')" id="sub_edit" class="custom-button" >Edit</button>
                <button id="sub_delete" onclick="deleteSub(${idx},'${k}')" class="custom-button">Delete</button>
            </td>
        </tr>
            `;
        console.log(k);
    }
    let v = "sub_task" + idx;

    document.getElementById(v).innerHTML = str;
    popup.classList.remove("edit-popup")

}

function deleteSub(idx, k) {
    console.log(arr[idx][k]);
    delete arr[idx][k];

    let str = "";
    let data = arr[idx];
    console.log(data);
    for (let k in data) {
        if (k == "taskname") {
            continue;
        }
        str += `<tr>
            <td>${k}</td>
            
            <td>${data[k].startdate} </td>
            <td>${data[k].enddate}</td>
            <td>${data[k].status1}</td>
            <td>
                <button onclick = "openpopup(${idx},'${k}')" id="sub_edit" class="custom-button" >Edit</button>
                <button id="sub_delete" onclick="deleteSub(${idx},'${k}')" class="custom-button">Delete</button>
            </td>
        </tr>
            `;
        console.log(k);
    }
    let v = "sub_task" + idx;

    document.getElementById(v).innerHTML = str;

}