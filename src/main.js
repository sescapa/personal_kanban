//Placeholder for the local storage


function populateStorage() {

    const project_id = 'id' + (new Date()).getTime()
    const milestone_id = 'id' + (new Date()).getTime()
    const item_id = 'id' + (new Date()).getTime()

    const sample_project = {
        "name": "Project Name",
        "summary": "Summary",
        "due_date": "Due Date",
        "project_id": project_id
    }

    const sample_milestone = {
        "name": "No Milestone",
        "description": "Backlog items with no milestone associated",
        "milestone_id": milestone_id,
        "default": true
    }

    const sample_item = {
        "name": "New Item",
        "due_date": "Due Date",
        "milestone_id": milestone_id,
        "acceptance_criteria": "Acceptance Criteria",
        "status": "status_to_do",
        "item_id": item_id
    }

    localStorage.setItem("project", JSON.stringify(sample_project));
    localStorage.setItem("milestones", JSON.stringify([sample_milestone]) );
    localStorage.setItem("backlog_items", JSON.stringify([sample_item]) );
}

if (!localStorage.getItem("project")) {
    localStorage.clear()
    populateStorage();
  }

// localStorage.clear()
// populateStorage();
project_page_header()
backlog_list_div_create()
populate_items()