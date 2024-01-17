function create_json(event){
    
    var compile_json = {};
    fetch("data/template/milestone.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(response => {
            Object.keys(response).forEach(
            key => {
                compile_json[key] = document.getElementById("milestone_" + key).value
                }
            )
            const data = JSON.stringify(compile_json);

            const dir = './data/milestones';
            fs.readdir(dir, (err, files) => {
                var file_name = 'milestone_' + files.length + '.json';
            });

            fs.writeFile("./data/milestones/" + file_name, data, (error) => {
                if (error) {
                  console.error(error);
              
                  throw error;
                }
                console.log("Milestone JSON file has been created written correctly");
              });
            
        }
    )
    event.preventDefault();
};

function milestone_button(message){

    if (message === 'new'){
        fetch("data/template/milestone.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {

            if (document.contains(document.getElementById("backlog_form"))){
                document.getElementById("backlog_form").remove()
            }            

            var form = document.createElement('form');
            form.setAttribute("id", "backlog_form")
            
            for (let x in json) {
                var input_box = document.createElement('input');
                input_box.setAttribute("type","text")
                input_box.setAttribute("id", "milestone_" + x)
                input_box.setAttribute("name", json[x])
                input_box.setAttribute("placeholder", json[x])
                form.appendChild(input_box);

            }
            
            var input_submit = document.createElement('input');

            input_submit.setAttribute("type","submit")
            input_submit.setAttribute("value","Submit")
            input_submit.addEventListener("click", create_json);
            form.appendChild(input_submit);

            document.getElementById('backlog_list').appendChild(form);

            // var dictstring = JSON.stringify(dict);
            // var fs = require('fs');
            // fs.writeFile("thing.json", dictstring);
        })   
    }

    else if (message === 'update'){

    }

    else if (message === 'delete'){

    }
};

function milestone_dropdown(localData){

    const backlog_list = document.getElementById("backlog_list");

    for(let milestone of localData["milestones"]) {
        const milestone_id = "milestone_" + milestone['id']
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

        const milestone_buttons_new = document.createElement('button')
        milestone_buttons_new.innerHTML = "New Item"
        milestone_buttons_new.setAttribute("class", "item_button")
        milestone_buttons_new.setAttribute("id", milestone_id + "_button_new")

        const milestone_buttons_update = document.createElement('button')
        milestone_buttons_update.innerHTML = "Update Item"
        milestone_buttons_update.setAttribute("class", "item_button")
        milestone_buttons_update.setAttribute("id", milestone_id + "_button_update")

        const milestone_buttons_delete = document.createElement('button')
        milestone_buttons_delete.innerHTML = "Delete Item"
        milestone_buttons_delete.setAttribute("class", "item_button")
        milestone_buttons_delete.setAttribute("id", milestone_id + "_button_delete")


        milestone_buttons_div.appendChild(milestone_buttons_new)
        milestone_buttons_div.appendChild(milestone_buttons_update)
        milestone_buttons_div.appendChild(milestone_buttons_delete)

        // Milestone item list
        const milestone_item_list = document.createElement('ul')
        milestone_item_list.setAttribute("id", milestone_id + '_ul')

        // Append everything together
        milestone_details.appendChild(milestone_summary)
        milestone_details.appendChild(milestone_buttons_div)
        milestone_details.appendChild(milestone_item_list)

        milestone_div.appendChild(milestone_details)
        backlog_list.appendChild(milestone_div)
}
};