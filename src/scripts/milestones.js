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
    const milestone_form_div = document.createElement('form')
    milestone_form_div.setAttribute('id', milestone_id + '_form')

    const item_list_ul = document.createElement('ul')
    item_list_ul.setAttribute("id", milestone_id + '_ul')
    milestone_form_div.appendChild(item_list_ul)

    // Append everything together
    milestone_details.appendChild(milestone_summary)
    milestone_details.appendChild(milestone_form_div)

    milestone_div.appendChild(milestone_details)

    return milestone_div;
}

function backlog_list_div_create(){
    let milestones = JSON.parse(localStorage.getItem('milestones'))

    // Populating backlog list
    let func = function(e){e.preventDefault()};
    let milestone_create_button = new Button('milestone_create_button', 'Create Milestone', func)
    let milestone_update_button = new Button('milestone_update_button', 'Update Milestone', func)
    let milestone_delete_button = new Button('milestone_delete_button', 'Delete Milestone', func)
    const milestone_button_tab_div = new ButtonTab('milestone_button_tab_div', [milestone_create_button, milestone_update_button, milestone_delete_button]).create_div
    
    // Populating backlog list
    let item_create_button = new Button('item_create_button', 'Create Item', func)
    let item_update_button = new Button('item_update_button', 'Update Item', func)
    let item_delete_button = new Button('item_delete_button', 'Delete Item', func)
    const item_button_tab_div = new ButtonTab('item_button_tab_div', [item_create_button, item_update_button, item_delete_button]).create_div
    
    // Form div when clicking a button

    const backlog_form_div = document.createElement('div')
    backlog_form_div.setAttribute("id", 'backlog_form_div')

    const backlog_form = document.createElement('form')
    backlog_form.setAttribute("id", 'backlog_form')
    backlog_form.setAttribute("class", "BacklogForm")
    backlog_form_div.appendChild(backlog_form)

    const backlog_list = document.getElementById("backlog_list");
    backlog_list.appendChild(milestone_button_tab_div)
    backlog_list.appendChild(item_button_tab_div)
    backlog_list.appendChild(backlog_form_div)

    // Create milestone divs
    for(let milestone of milestones){
        backlog_list.appendChild(create_milestone_div(milestone))
    }

};