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