//Placeholder for the local storage

const sample_project = {
    "name": "Project Name",
    "summary": "Summary",
    "due_date": "Due Date",
    "id": "id"
}

const sample_item = {
    "name": "Task Name",
    "due_date": "Due Date",
    "milestone_id": "milestone_id",
    "acceptance_criteria": "Acceptance Criteria",
    "status": "status",
    "id": "id"
}

const sample_milestone = {
    "name": "Milestone Name",
    "description": "Milestone Description",
    "milestone_id": "id"
}

if (!localStorage.getItem("project")) {
    localStorage.clear()
    populateStorage();
  } else {
    setStyles();
  }
  
  function populateStorage() {
    localStorage.setItem("project", JSON.stringify(testObject));
    localStorage.setItem("font", );
    localStorage.setItem("image", );
  }

let localData = {
    "project":
        ,
    "milestones":,
    "backlog_items":,
    "template": {
        "backlog_item_template": {
            "name": "Task Name",
            "due_date": "Due Date",
            "milestone": "milestone",
            "acceptance_criteria": "Acceptance Criteria",
            "status": "status",
            "id": "id"
        },
        "project_template": {
            "name": "Project Name",
            "summary": "Summary",
            "due_date": "Due Date",
            "id": "id"
        },
        "milestone_template":{
            "name": "Milestone Name",
            "description": "Milestone Description",
            "id": "id"
        }
    }
}


project_page_header()
milestone_dropdown()
populate_kanban_board()