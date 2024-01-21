function update_status_item_entry(item, status){
    let backlog_items = JSON.parse(localStorage.getItem('backlog_items'))
    let current_item = backlog_items.filter((mile) => mile.item_id === item.getAttribute('value'))[0]
    let filtered_backlog_items = backlog_items.filter((mile) => mile.item_id !== item.getAttribute('value'))
    
    const update_item = {
        "name": current_item['name'],
        "due_date": current_item['due_date'],
        "milestone_id": current_item['milestone_id'],
        "acceptance_criteria": current_item['acceptance_criteria'],
        "status": status,
        "item_id": current_item['item_id'],
        "description": current_item['description']
    }
    
    filtered_backlog_items.push(update_item)
    localStorage.setItem("backlog_items", JSON.stringify(filtered_backlog_items) );

}

function set_drag_event_kanban(backlog_item){
    let to_do_box = document.getElementById("status_to_do")
    let in_progress_box = document.getElementById("status_in_progress")
    let blocked_box = document.getElementById("status_blocked")
    let done_box = document.getElementById("status_done")

    backlog_item.addEventListener("dragstart", function (e){
        let selected = e.target;
        
        to_do_box.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        to_do_box.addEventListener("drop", function(e){
            to_do_box.appendChild(selected);
            update_status_item_entry(backlog_item, "status_to_do")
            selected = null;
        });

        in_progress_box.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        in_progress_box.addEventListener("drop", function(e){
            in_progress_box.appendChild(selected);
            update_status_item_entry(backlog_item, "status_in_progress")
            selected = null;
        });

        blocked_box.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        blocked_box.addEventListener("drop", function(e){
            blocked_box.appendChild(selected);
            update_status_item_entry(backlog_item, "status_blocked")
            selected = null;
        });

        done_box.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        done_box.addEventListener("drop", function(e){
            done_box.appendChild(selected);
            update_status_item_entry(backlog_item, "status_done")
            selected = null;
        });
    })
}