function populate_kanban_board(){

var backlog_list = document.getElementById("kanban_container");

//Placeholder
var number_of_milestones = 4

//Placeholder
for(let num=1; num <= number_of_milestones; num++) {
    fetch("data/backlog_items/items_" + num + ".json")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(response => {
            Object.keys(response).forEach(
            key => {
                var backlog_item = document.createElement('div')

            }
            )
            }
        )
}

}