function drag(){
    let backlog_list = document.getElementsByClassName("backlog_kanban_item")

    let to_do_box = document.getElementById("status_to_do")
    let in_progress_box = document.getElementById("status_in_progress")
    let blocked_box = document.getElementById("status_blocked")
    let done_box = document.getElementById("status_done")

    console.log(backlog_list);
    for (let backlog_item of backlog_list){
        console.log(backlog_item);
        backlog_item.addEventListener("dragstart", function (e){
            let selected = e.target;
            
            to_do_box.addEventListener("dragover", function(e){
                e.preventDefault();
                console.log(selected);
            });
            to_do_box.addEventListener("drop", function(e){
                to_do_box.appendChild(selected);
                selected = null;
            });

            in_progress_box.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            in_progress_box.addEventListener("drop", function(e){
                in_progress_box.appendChild(selected);
                selected = null;
            });

            blocked_box.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            blocked_box.addEventListener("drop", function(e){
                blocked_box.appendChild(selected);
                selected = null;
            });

            done_box.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            done_box.addEventListener("drop", function(e){
                to_do_box.appendChild(selected);
                selected = null;
            });
        })
        }
}