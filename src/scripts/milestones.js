function item_button(message, milestone_id, item_form_div, message){
    let backlog_items = JSON.parse(localStorage.getItem('backlog_items'))

    const item_form_ul = item_form_div + '_ul'
    function create_item(event){
    
        document.getElementById(item_form_ul).remove()
        event.preventDefault();
    };
    
    function update_item(event){
        
        document.getElementById(item_form_ul).remove()
        event.preventDefault();
    };
    
    function delete_item(event){
        
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
        if(document.getElementById(item_form_ul)){
            document.getElementById(item_form_ul).remove()
        } 

        let milestone_input_box = document.createElement('input');
        milestone_input_box.setAttribute("name", milestone_id+"_list");
        milestone_input_box.setAttribute("list", milestone_id+"_update_datalist")

        let milestone_datalist_box = document.createElement('datalist');
        milestone_datalist_box.setAttribute("id", milestone_id+"_update_datalist");
        
        for(backlog_item of backlog_items){
            if(backlog_item['milestone'] === milestone_id){
                let milestone_option = document.createElement('option')
                milestone_option.setAttribute("value", backlog_item['name'])
                milestone_datalist_box.appendChild(milestone_option)
            }
        }

        let description_box = document.createElement('input');
        description_box.setAttribute("type","text")
        description_box.setAttribute("id", milestone_id+ "_backlog_form_description")
        description_box.setAttribute("placeholder", "Item Description")

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Update")
        input_submit.addEventListener("click", update_item);
        
        ul_input_list.push(milestone_input_box)
        ul_input_list.push(milestone_datalist_box)
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
    
        document.getElementById("backlog_form_ul").remove()
        event.preventDefault();
    };
    
    function update_milestone(event){
        document.getElementById("backlog_form_ul").remove()
        event.preventDefault();
    };
    
    function delete_milestone(event){    
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
        input_submit.setAttribute("value","Update")
        input_submit.addEventListener("click", update_milestone);
        
        ul_input_list.push(name_box)
        ul_input_list.push(description_box)
        ul_input_list.push(input_submit)
    }

    else if (message === 'delete'){
        if(document.getElementById("backlog_form_ul")){
            document.getElementById("backlog_form_ul").remove()
        }

        let milestone_input_box = document.createElement('input');
        milestone_input_box.setAttribute("name", "milestone_list");
        milestone_input_box.setAttribute("list", "milestone_delete_datalist")

        let milestone_datalist_box = document.createElement('datalist');
        milestone_datalist_box.setAttribute("id", "milestone_delete_datalist");
        
        for(milestone of milestones){
            let milestone_option = document.createElement('option')
            milestone_option.setAttribute("value", milestone['name'])
            milestone_datalist_box.appendChild(milestone_option)
        }

        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Delete")
        input_submit.addEventListener("click", delete_milestone);
        
        ul_input_list.push(milestone_input_box)
        ul_input_list.push(milestone_datalist_box)
        ul_input_list.push(input_submit)
    }

    let form_ul = document.createElement('ul')
    form_ul.setAttribute('id', 'backlog_form_ul')
    for(let box of ul_input_list){
        form_ul.appendChild(box);
    }
    backlog_form.appendChild(form_ul);
};

function milestone_dropdown(){
    let milestones = JSON.parse(localStorage.getItem('milestones'))

    const backlog_list = document.getElementById("backlog_list");

    for(let milestone of milestones) {
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

        // Milestone modification buttons
        const milestone_buttons_div = document.createElement('div')
        milestone_buttons_div.setAttribute("id", milestone_id + "_button_div")

        const item_button_new = document.createElement('button')
        item_button_new.innerHTML = "New Item"
        item_button_new.setAttribute("class", "item_button")
        item_button_new.setAttribute("id", milestone_id + "_button_new")
        item_button_new.addEventListener("click", function(e) {
            item_button(e, milestone_id, milestone_id + '_div_item_form_div', 'new');
        });

        const item_button_update = document.createElement('button')
        item_button_update.innerHTML = "Update Item"
        item_button_update.setAttribute("class", "item_button")
        item_button_update.setAttribute("id", milestone_id + "_button_update")
        item_button_update.addEventListener("click", function(e) {
            item_button(e, milestone_id, milestone_id + '_div_item_form_div', 'update');
        });
        const item_button_delete = document.createElement('button')
        item_button_delete.innerHTML = "Delete Item"
        item_button_delete.setAttribute("class", "item_button")
        item_button_delete.setAttribute("id", milestone_id + "_button_delete")
        item_button_delete.addEventListener("click", function(e) {
            item_button(e, milestone_id, milestone_id + '_div_item_form_div', 'delete');
        });


        milestone_buttons_div.appendChild(item_button_new)
        milestone_buttons_div.appendChild(item_button_update)
        milestone_buttons_div.appendChild(item_button_delete)

        // Form for Create, Update and Delete

        const item_form_div = document.createElement('div')
        item_form_div.setAttribute("class", "milestone_button_div")
        item_form_div.setAttribute("id", milestone_id + "_div_item_form_div")

        const form_item_list = document.createElement('ul')
        form_item_list.setAttribute("id", milestone_id + '_div_item_form_div_ul')
        item_form_div.appendChild(form_item_list)

        // Milestone item list
        const milestone_item_form_div = document.createElement('div')
        milestone_item_form_div.setAttribute('id', milestone_id + '_div_milestone_item_form')

        const item_list_ul = document.createElement('ul')
        item_list_ul.setAttribute("id", milestone_id + '_div_milestone_item_form_ul')
        milestone_item_form_div.appendChild(item_list_ul)

        // Append everything together
        milestone_details.appendChild(milestone_summary)
        milestone_details.appendChild(milestone_buttons_div)
        milestone_details.appendChild(item_form_div)
        milestone_details.appendChild(milestone_item_form_div)

        milestone_div.appendChild(milestone_details)
        backlog_list.appendChild(milestone_div)
    }
};