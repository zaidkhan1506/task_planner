var arr = []


function data() {

    let startdate = document.getElementById("startdate")
    let enddate = document.getElementById("enddate")
    let status1 = document.getElementById("status")
    let taskname = document.getElementById("taskname")
    let subtaskname = document.getElementById("subtaskname")
    let table = document.getElementById("table1")




    let data = {}
    let sub = {}

    let t = true;
    let v = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].taskname == taskname.value) {
            t = false;
            break;
        }
        v++;
    }

    if (t) {
        data.taskname = taskname.value
        sub.startdate = startdate.value
        sub.enddate = enddate.value
        sub.status1 = status1.value
        data[subtaskname.value] = sub;
        arr.push(data);
    } else {
        sub.startdate = startdate.value
        sub.enddate = enddate.value
        sub.status1 = status1.value
        arr[v][subtaskname.value] = sub;
    }

    show_data();
    // let str = ""
    // for (let i = 0; i < arr.length; i++) {
    //     str += `<tr>
    //     <td>${arr[i].taskname}</td>
    //     <td>
    //         <table id="sub_task">
    //             <tr>
    //                 <th>Start Date </th>
    //                 <th>End Date</th>
    //                 <th>Status</th>
    //                 <th>Actions</th>
    //             </tr>
    //         </table>
    //     </td>
    //     <td><button id="Delete Parent"class="custom-button">Delete</button></td>
    // </tr>`



    // }
    // table.innerHTML = str;
}



function show_data() {
    let table_datas = document.getElementById("table1").innerHTML = "";
    table_datas.innerHTML = ""

    arr.forEach((data, index) => {
        document.getElementById("table1").innerHTML +=
            `
        <tr>
        <td>${data.taskname}</td>
        <td>
            <table id="sub_task${index}">
                <tr>

                    <th>Subtask</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </table>
    </td>
    <td><button onclick = "deleteEmp(${index})" id="Delete Parent" class="custom-button">Delete</button></td>
</tr>
                `;

        subtable(index, data);

    })
}

function subtable(id, data) {
    let str = "";
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
                <button onclick = "openpopup(${id},'${k}')" id="sub_edit" class="custom-button" >Edit</button>
                <button id="sub_delete" onclick="deleteSub(${id},'${k}')" class="custom-button">Delete</button>
            </td>
        </tr>
            `;
        console.log(k);
    }
    let v = "sub_task" + id;
    document.getElementById(v).insertAdjacentHTML("beforeend", str);

}