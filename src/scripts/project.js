function project_page_header(){

    let project = JSON.parse(localStorage.getItem('project'))

    let header = document.getElementById("project_header");
    let header_name = document.createElement('div');
    let header_summary = document.createElement('div');

    header_name.setAttribute("class","project_name")
    
    header_name.setAttribute("align", "center")
    header_name.innerHTML = project["name"]

    header_summary.setAttribute("class","project_summary")
    header_summary.setAttribute("align", "center")
    header_summary.innerHTML = project["summary"]

    header.appendChild(header_name)
    header.appendChild(header_summary)

};