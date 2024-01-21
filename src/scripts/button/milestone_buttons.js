function create_input(id, placeholder, type){
    let input_box = document.createElement('input');
    input_box.setAttribute("id", id)
    input_box.setAttribute("placeholder", placeholder)
    input_box.setAttribute("type",type)
    return input_box
}

class NewMilestoneButton extends Button{
    constructor() {
        super('milestone_create_button', 'Create Milestone'); // call the super class constructor and pass in the name parameter
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
                "milestone_id": milestone_id
            }
    
            milestones.push(new_milestone)
            localStorage.setItem("milestones", JSON.stringify(milestones) );
            document.getElementById("backlog_form_ul").remove()
            
            const backlog_list = document.getElementById("backlog_list");
            backlog_list.appendChild(create_milestone_div(milestone))
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