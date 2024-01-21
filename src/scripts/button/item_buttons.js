function create_input(id, placeholder, type){
    let input_box = document.createElement('input');
    input_box.setAttribute("id", id)
    input_box.setAttribute("placeholder", placeholder)
    input_box.setAttribute("type",type)
    return input_box
}

function update_item_functionality(event){
    let backlog_items = JSON.parse(localStorage.getItem('backlog_items'))
    let item_id = document.getElementById('backlog_item_form_select').value
    let item_name = document.getElementById('backlog_form_name').value
    let item_description = document.getElementById('backlog_form_description').value
    let item = backlog_items.filter((item) => item['item_id'] === item_id)[0]

    let filtered_backlog_items = backlog_items.filter((item) => item['item_id'] === item_id)
    const update_item = {
        "name": item_name,
        "due_date": item['due_date'],
        "milestone_id": item['milestone_id'],
        "acceptance_criteria": item['acceptance_criteria'],
        "status": item['status'],
        "item_id": item['item_id'],
        "description": item_description
    }

    filtered_backlog_items.unshift(update_item)
    
    localStorage.setItem("backlog_items", JSON.stringify(filtered_backlog_items) );

    let updated_backlog_item = new Item(update_item);
    updated_backlog_item.update_item;

    if (document.getElementById("backlog_form_ul")) {
        document.getElementById("backlog_form_ul").remove()
    }
    event.preventDefault();
}

function milestone_change_event(){
    let items = JSON.parse(localStorage.getItem('backlog_items'))
    let milestone_id = document.getElementById('backlog_milestone_form_select').value
    let filtered_items = items.filter((item) => item['milestone_id'] === milestone_id)
    let item_select_box = document.createElement('select');
    item_select_box.setAttribute("id", "backlog_item_form_select");
    
    let milestone_neutral_option = document.createElement('option')
    milestone_neutral_option.setAttribute('value', '')
    milestone_neutral_option.innerHTML = "--Please choose an option--"
    item_select_box.appendChild(milestone_neutral_option)

    for(let item of filtered_items){
        let item_option = document.createElement('option')
        item_option.innerHTML = item['name']
        item_option.setAttribute("value", item['item_id'])
        item_select_box.appendChild(item_option)
    }

    let backlog_form_item_select = document.getElementById('backlog_item_form_select')
    backlog_form_item_select.replaceWith(item_select_box)
}


class NewItemButton extends Button{
    constructor() {
        super('item_create_button', 'Create Item');
    }
    get create_ul_list(){
        function create_item_functionality(event){
            let backlog_items = JSON.parse(localStorage.getItem('backlog_items'))
            let item_id = 'id' + (new Date()).getTime()
            let milestone_name = document.getElementById('backlog_form_name').value
            let milestone_description = document.getElementById('backlog_form_description').value
            let milestone_id = document.getElementById('backlog_milestone_form_select').value
            
            let new_item = {
                "name": milestone_name,
                "due_date": "Due Date",
                "milestone_id": milestone_id,
                "acceptance_criteria": "Acceptance Criteria",
                "description":milestone_description,
                "status": "status_to_do",
                "item_id": item_id
            }

            backlog_items.push(new_item)
            localStorage.setItem("backlog_items", JSON.stringify(backlog_items) );

            // Create new ticket in Kanban and backlog list
            let new_backlog_item = new Item(new_item);
            new_backlog_item.add_item;

            document.getElementById("backlog_form_ul").remove()
            event.preventDefault();
        }

        let milestones = JSON.parse(localStorage.getItem('milestones'))
        let milestone_select_box = document.createElement('select');
        milestone_select_box.setAttribute("id", "backlog_milestone_form_select");

        let neutral_option = document.createElement('option')
        neutral_option.setAttribute('value', '')
        neutral_option.innerHTML = "--Please choose an option--"
        milestone_select_box.appendChild(neutral_option)

        for(let milestone of milestones){
            let milestone_option = document.createElement('option')
            milestone_option.innerHTML = milestone['name']
            milestone_option.setAttribute("value", milestone['milestone_id'])
            milestone_select_box.appendChild(milestone_option)
        }

        let name_box = create_input("backlog_form_name", "Item Name", "text")
        let description_box = create_input("backlog_form_description", "Item Description", "text")
        
        
        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Submit")
        input_submit.addEventListener("click", create_item_functionality);
        
        this.ul_input_list.push(milestone_select_box)
        this.ul_input_list.push(name_box)
        this.ul_input_list.push(description_box)
        this.ul_input_list.push(input_submit)
    }
}

class UpdateItemButton extends Button{
    constructor() {
        super('item_update_button', 'Update Item'); 
    }
    get create_ul_list(){
        
        let milestones = JSON.parse(localStorage.getItem('milestones'))
        let milestone_select_box = document.createElement('select');
        milestone_select_box.setAttribute("id", "backlog_milestone_form_select");
        milestone_select_box.setAttribute("onchange","milestone_change_event    ()")

        let milestone_neutral_option = document.createElement('option')
        milestone_neutral_option.setAttribute('value', '')
        milestone_neutral_option.innerHTML = "--Please choose an option--"
        milestone_select_box.appendChild(milestone_neutral_option)

        for(let milestone of milestones){
            let milestone_option = document.createElement('option')
            milestone_option.innerHTML = milestone['name']
            milestone_option.setAttribute("value", milestone['milestone_id'])
            milestone_select_box.appendChild(milestone_option)
        }

        let items = JSON.parse(localStorage.getItem('backlog_items'))

        let item_neutral_option = document.createElement('option')
        item_neutral_option.setAttribute('value', '')
        item_neutral_option.innerHTML = "--Please choose an option--"

        let item_select_box = document.createElement('select');
        item_select_box.setAttribute("id", "backlog_item_form_select");
        item_select_box.appendChild(item_neutral_option)

        for(let item of items){
            let item_option = document.createElement('option')
            item_option.innerHTML = item['name']
            item_option.setAttribute("value", item)
            item_select_box.appendChild(item_option)
        }

        let name_box = create_input("backlog_form_name", "Item Name", "text")
        let description_box = create_input("backlog_form_description", "Item Description", "text")
        
        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Submit")
        input_submit.addEventListener("click", update_item_functionality);
    
        this.ul_input_list.push(milestone_select_box)
        this.ul_input_list.push(item_select_box)
        this.ul_input_list.push(name_box)
        this.ul_input_list.push(description_box)
        this.ul_input_list.push(input_submit)
    }
}

class DeleteButtonButton extends Button{
    constructor() {
        super('item_delete_button', 'Delete Item'); 
    }
    get create_ul_list(){
        function delete_item_functionality(event){
            let milestone_id = document.getElementById('milestone_delete_select').value
            filtered_milestones = milestones.filter((mile) => mile.milestone_id !== milestone_id)
    
            localStorage.setItem("milestones", JSON.stringify(filtered_milestones) );
            document.getElementById(milestone_id).remove()
            document.getElementById("backlog_form_ul").remove()
            event.preventDefault();
    
        }
        let milestones = JSON.parse(localStorage.getItem('milestones'))
        let filtered_milestones = milestones.filter((mile) => !mile.default)

        let milestone_select_box = document.createElement('select');
        milestone_select_box.setAttribute("id", "milestone_delete_select");
        
        let neutral_option = document.createElement('option')
        neutral_option.setAttribute('value', '')
        neutral_option.innerHTML = "--Please choose an option--"
        milestone_select_box.appendChild(neutral_option)

        for(let milestone of filtered_milestones){
            let milestone_option = document.createElement('option')
            milestone_option.innerHTML = milestone['name']
            milestone_option.setAttribute("value", milestone['milestone_id'])
            milestone_select_box.appendChild(milestone_option)
        }

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Delete")
        input_submit.addEventListener("click", delete_item_functionality);
        
        this.ul_input_list.push(milestone_select_box)
        this.ul_input_list.push(input_submit)
    }
}