class Item{
    constructor(item) {
        this.item_id = item['item_id'];
        this.item_status = item['status'];
        this.item_name = item['name'];
        this.milestone_id = item['milestone_id'];
        this.kanban_item_id = "kanban_item_"+this.item_id
        this.backlog_item_id = "backlog_item_"+this.item_id
    }

    get create_kanban_entry(){
        // Adding backlog to Kanban
        let backlog_list = document.getElementById(this.item_status);
        let kanban_item_div = document.createElement('div')

        kanban_item_div.setAttribute("class", "backlog_kanban_item")
        kanban_item_div.setAttribute("id", this.kanban_item_id)
        kanban_item_div.setAttribute("value", this.item_id)
        kanban_item_div.setAttribute("draggable", true)
        kanban_item_div.innerHTML = this.item_name
        set_drag_event_kanban(kanban_item_div) 
        backlog_list.appendChild(kanban_item_div)
    }

    get create_backlog_entry(){
        let milestone_ld = document.getElementById(this.milestone_id + '_ul');
        let backlog_item_div = document.createElement('div')
        backlog_item_div.setAttribute("class", "item")
        backlog_item_div.setAttribute("id", this.backlog_item_id)
        backlog_item_div.setAttribute("value", this.item_id)
        backlog_item_div.innerHTML = this.item_name
        set_drag_event_backlog(backlog_item_div)
        milestone_ld.appendChild(backlog_item_div)
    }

    get update_kanban_entry(){
        let kanban_item = document.getElementById("kanban_item_"+this.item_id);
        kanban_item.innerHTML = this.item_name
    }

    get update_backlog_entry(){
        let backlog_item = document.getElementById("backlog_item_"+this.item_id);
        backlog_item.innerHTML = this.item_name
    }

    get delete_kanban_entry(){
        document.getElementById("kanban_item_"+this.item_id).remove();
    }

    get delete_backlog_entry(){
        document.getElementById("backlog_item_"+this.item_id).remove();
    }

    get add_item(){
        this.create_backlog_entry;
        this.create_kanban_entry
    }

    get update_item(){
        this.update_kanban_entry;
        this.update_backlog_entry;
    }

    get delete_item(){
        this.delete_kanban_entry;
        this.delete_backlog_entry;
    }
}

function populate_items(){
    let backlog_items = JSON.parse(localStorage.getItem('backlog_items'))
    for(let backlog_item of backlog_items) {
        let new_backlog_item = new Item(backlog_item);
        new_backlog_item.add_item;
            
    }
}