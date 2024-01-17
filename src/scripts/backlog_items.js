function populate_kanban_board(){

    //Placeholder
    var number_of_milestones = 4

    //Interactive population
    for(let num=1; num <= number_of_milestones; num++) {
        fetch("data/backlog_items/item_" + num + ".json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(response => {
                    var item_status = response['status']
                    var item_name = response['name']
                    var backlog_list = document.getElementById(item_status);

                    var backlog_item = document.createElement('div')
                    backlog_item.setAttribute("class", "backlog_kanban_item")
                    backlog_item.setAttribute("draggable", true)
                    backlog_item.innerHTML = item_name

                    backlog_list.appendChild(backlog_item)
                }
                )
            }
}