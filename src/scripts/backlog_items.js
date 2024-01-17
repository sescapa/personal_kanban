function populate_kanban_board(){

    //Placeholder
    var number_of_milestones = 4


    // Parameters
    let to_do_box = document.getElementById("status_to_do")
    let in_progress_box = document.getElementById("status_in_progress")
    let blocked_box = document.getElementById("status_blocked")
    let done_box = document.getElementById("status_done")

    // Interactive population
    for(let num=1; num <= number_of_milestones; num++) {
        var kanban_item_id = "kanban_item_"+num
        var backlog_item_id = "backlog_item_"+num
        var backlog_item_path_base = "./data/backlog_items/item_"
        
        fetch(backlog_item_path_base + num + ".json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })

            // Populating Kanban board
            .then(response => {
                    var item_status = response['status']
                    var item_name = response['name']
                    var backlog_list = document.getElementById(item_status);
                    var backlog_item = document.createElement('div')

                    backlog_item.setAttribute("class", "backlog_kanban_item")
                    backlog_item.setAttribute("id", kanban_item_id)
                    backlog_item.setAttribute("draggable", true)
                    backlog_item.innerHTML = item_name
                    
                    set_drag_event(backlog_item) 

                    backlog_list.appendChild(backlog_item)
                    return response
            })
            
            // Creating each backlog item in respective milestone

            .then(response => {
                    var item_name = response['name']
                    var milestone_id = response['milestone']
                    var backlog_item = document.getElementById(milestone_id + '_ul');

                    var backlog_item_div = document.createElement('div')
                    backlog_item_div.setAttribute("class", "item")
                    backlog_item_div.setAttribute("id", backlog_item_id)
                    backlog_item_div.innerHTML = item_name
            
                    backlog_item.appendChild(backlog_item_div)
                    return response
            
            })
            }
}