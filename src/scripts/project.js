function project_page_header(){

    fetch("data/project.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            var header = document.getElementsByClassName("header");
            var header_name = document.createElement('div');
            var header_summary = document.createElement('div');

            header_name.setAttribute("class","project_name")
            header_name.setAttribute("align", "center")
            header_name.innerHTML = json["name"]

            header_summary.setAttribute("class","project_summary")
            header_summary.setAttribute("align", "center")
            header_summary.innerHTML = json["description"]

            header.appendChild(header_name)
            header.appendChild(header_summary)

        })   
    }


};