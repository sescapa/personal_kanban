function create_input(id, placeholder, type){
    let input_box = document.createElement('input');
    input_box.setAttribute("id", id)
    input_box.setAttribute("placeholder", placeholder)
    input_box.setAttribute("type",type)
    return input_box
}

class NewMilestoneButton extends Button{
    constructor() {
        super('milestone_create_button', 'Create Milestone');
    }
    get create_ul_list(){
        function create_milestone_functionality(event){

            let milestones = JSON.parse(localStorage.getItem('milestones'))
            let milestone_id = 'id' + (new Date()).getTime()
    
            let milestone_name = document.getElementById('backlog_form_name').value
            let milestone_description = document.getElementById('backlog_form_description').value
    
            let new_milestone = {
                "name": milestone_name,
                "description": milestone_description,
                "milestone_id": milestone_id,
                "default": false
            }
    
            milestones.unshift(new_milestone)
            localStorage.setItem("milestones", JSON.stringify(milestones) );
            document.getElementById("backlog_form_ul").remove()
            
            const milestones_div = document.getElementById("milestones_div");
            milestones_div.insertBefore(create_milestone_div(new_milestone), milestones_div.firstChild)
            event.preventDefault();
        }

        let name_box = create_input("backlog_form_name", "Milestone Name", "text")
        let description_box = create_input("backlog_form_description", "Milestone Description", "text")
        
        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Submit")
        input_submit.addEventListener("click", create_milestone_functionality);
    
        this.ul_input_list.push(name_box)
        this.ul_input_list.push(description_box)
        this.ul_input_list.push(input_submit)
    }
}

class UpdateMilestoneButton extends Button{
    constructor() {
        super('milestone_update_button', 'Update Milestone'); 
    }
    get create_ul_list(){
        function update_milestone_functionality(event){
            let milestones = JSON.parse(localStorage.getItem('milestones'))
            let milestone_id = document.getElementById('backlog_form_select').value
            let milestone_name = document.getElementById('backlog_form_name').value
            let milestone_description = document.getElementById('backlog_form_description').value

            let filtered_milestones = milestones.filter((mile) => mile.milestone_id !== milestone_id)
            let updated_milestone = {
                "name": milestone_name,
                "description": milestone_description,
                "milestone_id": milestone_id,
                "default": false
            }
            filtered_milestones.unshift(updated_milestone)
            
            localStorage.setItem("milestones", JSON.stringify(filtered_milestones) );

            document.getElementById(milestone_id + "_summary").innerHTML = milestone_name
            document.getElementById("backlog_form_ul").remove()
            event.preventDefault();
        }
        let milestones = JSON.parse(localStorage.getItem('milestones'))
        let filtered_milestones = milestones.filter((mile) => !mile.default)

        let milestone_select_box = document.createElement('select');
        milestone_select_box.setAttribute("id", "backlog_form_select");
        
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

        let name_box = create_input("backlog_form_name", "Milestone Name", "text")
        let description_box = create_input("backlog_form_description", "Milestone Description", "text")
        
        let input_submit = document.createElement('input');
        input_submit.setAttribute("type","submit")
        input_submit.setAttribute("value","Submit")
        input_submit.addEventListener("click", update_milestone_functionality);
    
        this.ul_input_list.push(milestone_select_box)
        this.ul_input_list.push(name_box)
        this.ul_input_list.push(description_box)
        this.ul_input_list.push(input_submit)
    }
}

class DeleteMilestoneButton extends Button{
    constructor() {
        super('milestone_delete_button', 'Delete Milestone'); 
    }
    get create_ul_list(){
        function delete_milestone_functionality(event){
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
        input_submit.addEventListener("click", delete_milestone_functionality);
        
        this.ul_input_list.push(milestone_select_box)
        this.ul_input_list.push(input_submit)
    }
}