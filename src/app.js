function handleForm(event){
    console.log('HERE');
    event.preventDefault();
}

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
                input_box.setAttribute("name", json[x])
                input_box.setAttribute("placeholder", json[x])
                form.appendChild(input_box);

            }
            
            var input_submit = document.createElement('input');

            input_submit.setAttribute("type","submit")
            input_submit.setAttribute("value","Submit")
            input_submit.setAttribute("onclick", "handleForm(event);");
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