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

function create_milestone_button(event, func){
    
    if(document.getElementById("backlog_form_ul")){
        document.getElementById("backlog_form_ul").remove()
    } 

    let name_box = create_input("backlog_form_name", "Milestone Name", "text")
    let description_box = create_input("backlog_form_description", "Milestone Description", "text")
    
    let input_submit = document.createElement('input');
    input_submit.setAttribute("type","submit")
    input_submit.setAttribute("value","Submit")
    input_submit.addEventListener("click", create_milestone_functionality);
    
    ul_input_list.push(name_box)
    ul_input_list.push(description_box)
    ul_input_list.push(input_submit)

    let form_ul = document.createElement('ul')
    form_ul.setAttribute('id', 'backlog_form_ul')
    for(let box of ul_input_list){
        form_ul.appendChild(box);
    }
    backlog_form.appendChild(form_ul);
};