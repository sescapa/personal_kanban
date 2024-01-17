function populate_kanban_board(){
    for(let backlog_item of localData['backlog_items']) {

        const id = backlog_item["id"]
        const item_status = backlog_item['status']
        const item_name = backlog_item['name']
        const milestone_id = backlog_item['milestone']
        const kanban_item_id = "kanban_item_"+id
        const backlog_item_id = "backlog_item_"+id
        
        // Adding backlog to Kanban
        let backlog_list = document.getElementById(item_status);
        let kanban_item_div = document.createElement('div')

        kanban_item_div.setAttribute("class", "backlog_kanban_item")
        kanban_item_div.setAttribute("id", kanban_item_id)
        kanban_item_div.setAttribute("draggable", true)
        kanban_item_div.innerHTML = item_name
        
        set_drag_event(kanban_item_div) 
        backlog_list.appendChild(kanban_item_div)

        // Adding backlog item to milestones ld
        let milestone_ld = document.getElementById(milestone_id + '_ul');
        let backlog_item_div = document.createElement('div')
        backlog_item_div.setAttribute("class", "item")
        backlog_item_div.setAttribute("id", backlog_item_id)
        backlog_item_div.innerHTML = item_name
        milestone_ld.appendChild(backlog_item_div)
            
    }
}