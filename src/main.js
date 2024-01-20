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
        "name": "Milestone Name",
        "description": "Milestone Description",
        "milestone_id": milestone_id
    }

    const sample_item = {
        "name": "Task Name",
        "due_date": "Due Date",
        "milestone_id": milestone_id,
        "acceptance_criteria": "Acceptance Criteria",
        "status": "status",
        "id": item_id
    }

    localStorage.setItem("project", JSON.stringify(sample_project));
    localStorage.setItem("milestones", JSON.stringify([sample_milestone]) );
    localStorage.setItem("backlog_items", JSON.stringify([sample_item]) );
}

if (!localStorage.getItem("project")) {
    localStorage.clear()
    populateStorage();
  }

project_page_header()
milestone_dropdown()
populate_kanban_board()