function item_button(message, milestone_id, item_form_div, message){
    let backlog_items = JSON.parse(localStorage.getItem('backlog_items'))

    const item_form_ul = item_form_div + '_ul'
    function create_item(event){

        let item_id = 'id' + (new Date()).getTime()

        let milestone_name = document.getElementById('backlog_form_name').value
        let milestone_description = document.getElementById('backlog_form_description').value

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
        localStorage.setItem("milestones", JSON.stringify(backlog_items) );

        
        // Create new ticket in the kanban board
        
        // Create new ticket in the milestone
        document.getElementById("backlog_form_ul").remove()
        event.preventDefault();
    };
    
    function update_item(event){
        let item_id = document.getElementById('item_update_select').value
        let item_name = document.getElementById('item_form_name').value
        let item_description = document.getElementById('item_form_description').value

        filtered_milestones = backlog_items.filter((item) => item.item_id !== item_id)
        let updated_milestone = {
            "name": item_name,
            "due_date": "Due Date",
            "milestone_id": milestone_id,
            "acceptance_criteria": "Acceptance Criteria",
            "status": "status_to_do",
            "item_id": item_id
        }
        filtered_milestones.push(updated_milestone)

        localStorage.setItem("milestones", JSON.stringify(filtered_milestones) );

        document.getElementById(milestone_id + "_summary").innerHTML = milestone_name
        
        // Update ticket in Kanban board

        // Update ticket in the backlog

        document.getElementById("backlog_form_ul").remove()
        event.preventDefault();
    };
    
    function delete_item(event){
        

        // Delete item in the Kanban board

        // Delete item in the backlog

        
        document.getElementById(item_form_ul).remove()
        event.preventDefault();
    };

    let item_form = document.getElementById(item_form_div)
    let ul_input_list = []

    if (message === 'new'){
        if(document.getElementById(item_form_ul)){
            document.getElementById(item_form_ul).remove()
        } 

        let name_box = document.createElement('input');
        name_box.setAttribute("type","text")
        name_box.setAttribute("id", "backlog_form_name")
        name_box.setAttribute("placeholder", "Item Name")

        let description_box = document.createElement('input');
        description_box.setAttribute("type","text")
        description_box.setAttribute("id", "backlog_form_description")
        description_box.setAttribute("placeholder", "Item Description")

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Submit")
        input_submit.addEventListener("click", create_item);
        
        ul_input_list.push(name_box)
        ul_input_list.push(description_box)
        ul_input_list.push(input_submit)
    }
    
    else if (message === 'update'){
        let item_select_box = document.createElement('select');
        item_select_box.setAttribute("id", "item_update_select");
        
        let neutral_option = document.createElement('option')
        neutral_option.setAttribute('value', '')
        neutral_option.innerHTML = "--Please choose an option--"
        item_select_box.appendChild(neutral_option)

        for(let item of backlog_items.filter((it) => it.milestone_id === milestone_id)){
            let item_option = document.createElement('option')
            item_option.innerHTML = item['name']
            item_option.setAttribute("value", item['milestone_id'])
            item_select_box.appendChild(item_option)
        }

        let name_box = document.createElement('input');
        name_box.setAttribute("type","text")
        name_box.setAttribute("id", "item_form_name")
        name_box.setAttribute("placeholder", "Item Name")

        let description_box = document.createElement('input');
        description_box.setAttribute("type","text")
        description_box.setAttribute("id", "item_form_description")
        description_box.setAttribute("placeholder", "Item Description")

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Update")
        input_submit.addEventListener("click", update_item);
        
        ul_input_list.push(item_select_box)
        ul_input_list.push(name_box)
        ul_input_list.push(description_box)
        ul_input_list.push(input_submit)
    }

    else if (message === 'delete'){
        if(document.getElementById(item_form_ul)){
            document.getElementById(item_form_ul).remove()
        } 

        let milestone_input_box = document.createElement('input');
        milestone_input_box.setAttribute("name", "milestone_list");
        milestone_input_box.setAttribute("list", milestone_id+"_delete_datalist")

        let milestone_datalist_box = document.createElement('datalist');
        milestone_datalist_box.setAttribute("id", milestone_id+"_delete_datalist");
        
        for(backlog_item of backlog_items){
            if(backlog_item['milestone'] === milestone_id){
                let milestone_option = document.createElement('option')
                milestone_option.setAttribute("value", backlog_item['name'])
                milestone_datalist_box.appendChild(milestone_option)
            }
        }

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Delete")
        input_submit.addEventListener("click", delete_item);
        
        ul_input_list.push(milestone_input_box)
        ul_input_list.push(milestone_datalist_box)
        ul_input_list.push(input_submit)
    }

    let form_ul = document.createElement('ul')
    form_ul.setAttribute('id', item_form_ul)
    for(let box of ul_input_list){
        form_ul.appendChild(box);
    }
    item_form.appendChild(form_ul);
};

function milestone_button(message){
    let milestones = JSON.parse(localStorage.getItem('milestones'))
    function create_milestone(event){

        let milestone_id = 'id' + (new Date()).getTime()

        let milestone_name = document.getElementById('backlog_form_name').value
        let milestone_description = document.getElementById('backlog_form_description').value

        let new_milestone = {
            "name": milestone_name,
            "description": milestone_description,
            "milestone_id": milestone_id
        }

        milestones.push(new_milestone)
        localStorage.setItem("milestones", JSON.stringify(milestones) );

        document.getElementById("backlog_form_ul").remove()
        create_milestone_div(new_milestone)
        event.preventDefault();
    };
    
    function update_milestone(event){

        let milestone_id = document.getElementById('milestone_update_select').value
        let milestone_name = document.getElementById('milestone_form_name').value
        let milestone_description = document.getElementById('milestone_form_description').value

        filtered_milestones = milestones.filter((mile) => mile.milestone_id !== milestone_id)
        let updated_milestone = {
            "name": milestone_name,
            "description": milestone_description,
            "milestone_id": milestone_id
        }
        filtered_milestones.push(updated_milestone)

        localStorage.setItem("milestones", JSON.stringify(filtered_milestones) );

        document.getElementById(milestone_id + "_summary").innerHTML = milestone_name
        document.getElementById("backlog_form_ul").remove()
        event.preventDefault();
    };
    
    function delete_milestone(event){ 

        let milestone_id = document.getElementById('milestone_delete_select').value
        filtered_milestones = milestones.filter((mile) => mile.milestone_id !== milestone_id)

        localStorage.setItem("milestones", JSON.stringify(filtered_milestones) );
        document.getElementById(milestone_id).remove()
        document.getElementById("backlog_form_ul").remove()
        event.preventDefault();
    };

    let backlog_form = document.getElementById("backlog_form")
    let ul_input_list = []

    if (message === 'new'){

        if(document.getElementById("backlog_form_ul")){
            document.getElementById("backlog_form_ul").remove()
        } 

        let name_box = document.createElement('input');
        name_box.setAttribute("type","text")
        name_box.setAttribute("id", "backlog_form_name")
        name_box.setAttribute("placeholder", "Milestone Name")


        let description_box = document.createElement('input');
        description_box.setAttribute("type","text")
        description_box.setAttribute("id", "backlog_form_description")
        description_box.setAttribute("placeholder", "Milestone Description")

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Submit")
        input_submit.addEventListener("click", create_milestone);
        
        ul_input_list.push(name_box)
        ul_input_list.push(description_box)
        ul_input_list.push(input_submit)
    }
    
    else if (message === 'update'){
        if(document.getElementById("backlog_form_ul")){
            document.getElementById("backlog_form_ul").remove()
        }

        let milestone_select_box = document.createElement('select');
        milestone_select_box.setAttribute("id", "milestone_update_select");
        
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

        let name_box = document.createElement('input');
        name_box.setAttribute("type","text")
        name_box.setAttribute("id", "milestone_form_name")
        name_box.setAttribute("placeholder", "Milestone Name")

        let description_box = document.createElement('input');
        description_box.setAttribute("type","text")
        description_box.setAttribute("id", "milestone_form_description")
        description_box.setAttribute("placeholder", "Milestone Description")

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Update")
        input_submit.addEventListener("click", update_milestone);
        
        ul_input_list.push(milestone_select_box)
        ul_input_list.push(name_box)
        ul_input_list.push(description_box)
        ul_input_list.push(input_submit)
    }

    else if (message === 'delete'){
        if(document.getElementById("backlog_form_ul")){
            document.getElementById("backlog_form_ul").remove()
        }

        let milestone_select_box = document.createElement('select');
        milestone_select_box.setAttribute("id", "milestone_delete_select");
        
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

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Delete")
        input_submit.addEventListener("click", delete_milestone);
        
        ul_input_list.push(milestone_select_box)
        ul_input_list.push(input_submit)


    }

    let form_ul = document.createElement('ul')
    form_ul.setAttribute('id', 'backlog_form_ul')
    for(let box of ul_input_list){
        form_ul.appendChild(box);
    }
    backlog_form.appendChild(form_ul);
};

function create_milestone_div(milestone){
    const milestone_id = milestone['milestone_id']
    const milestone_name = milestone['name']
    const milestone_description = milestone['description']

    // Main Div
    const milestone_div = document.createElement('div')
    milestone_div.setAttribute("class", "milestone")
    milestone_div.setAttribute("id", milestone_id)

    // Details
    const milestone_details = document.createElement('details')
    
    // Summary text
    const milestone_summary = document.createElement('summary')
    milestone_summary.setAttribute("id", milestone_id + "_summary")
    milestone_summary.innerHTML = milestone_name


    // Milestone item list
    const milestone_item_form_div = document.createElement('form')
    milestone_item_form_div.setAttribute('id', milestone_id + '_form')

    const item_list_ul = document.createElement('ul')
    item_list_ul.setAttribute("id", milestone_id + '_ul')
    milestone_item_form_div.appendChild(item_list_ul)

    // Append everything together
    milestone_details.appendChild(milestone_summary)
    milestone_details.appendChild(item_form_div)
    milestone_details.appendChild(milestone_item_form_div)

    milestone_div.appendChild(milestone_details)
}

function backlog_list_div_create(){
    let milestones = JSON.parse(localStorage.getItem('milestones'))

    const backlog_list = document.getElementById("backlog_list");
    
    // Populating backlog list
    let func = function(e){e.preventDefault()};
    let milestone_create_button = new Button('milestone_create_button', 'Create Milestone', func)
    let milestone_update_button = new Button('milestone_update_button', 'Update Milestone', func)
    let milestone_delete_button = new Button('milestone_delete_button', 'Delete Milestone', func)
    const milestone_button_tab_div = new ButtonTab('milestone_button_tab_div', [milestone_create_button, milestone_update_button, milestone_delete_button])
    
    // Populating backlog list
    let item_create_button = new Button('item_create_button', 'Create Item', func)
    let item_update_button = new Button('item_update_button', 'Update Item', func)
    let item_delete_button = new Button('item_delete_button', 'Delete Item', func)
    const item_button_tab_div = new ButtonTab('item_button_tab_div', [item_create_button, item_update_button, item_delete_button])
    
    // Form div when clicking a button

    const backlog_form_div = document.createElement('div')
    backlog_form_div.setAttribute("id", 'backlog_form_div')

    const backlog_form = document.createElement('form')
    backlog_form.setAttribute("id", 'backlog_form')
    backlog_form.setAttribute("class", "BacklogForm")
    backlog_form_div.appendChild(backlog_form)

    backlog_list.appendChild(milestone_button_tab_div)
    backlog_list.appendChild(item_button_tab_div)
    backlog_list.appendChild(backlog_form_div)

    // Create milestone divs

    for(let milestone of milestones){
            create_milestone_div(milestone)
        }

};