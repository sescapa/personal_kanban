//Placeholder for the local storage

let localData = {
    "project":[
        {
        "name": "Personal Kanban Board",
        "summary": "This personal project is to create a simple Kanban board",
        "due_date": "15 February 2024",
        "id": 1,
        }],
    "milestones":[
        {
            "name": "Website Design",
            "description": "Milestone Description",
            "id": 2
        },
        {
            "name": "Interactive list of items",
            "description": "Milestone Description",
            "id": 3
        },
        {
            "name": "Create Milestone",
            "description": "Milestone Description",
            "id": 4
        },
        {
            "name": "Documentation",
            "description": "Milestone Description",
            "id": 5
        }
    ],
    "backlog_items":[
        {
            "name": "Creating canvas",
            "due_date": "Due Date",
            "milestone": "milestone_1",
            "acceptance_criteria": "Acceptance Criteria",
            "status": "status_to_do",
            "id": 6
        },
        {
            "name": "Create, update and delete story items",
            "due_date": "Due Date",
            "milestone": "milestone_2",
            "acceptance_criteria": "Acceptance Criteria",
            "status": "status_in_progress"
        },
        {
            "name": "Create JSON structure",
            "due_date": "Due Date",
            "milestone": "milestone_3",
            "acceptance_criteria": "Acceptance Criteria",
            "status": "status_blocked"
        },
        {
            "name": "Preliminary documentation",
            "due_date": "Due Date",
            "milestone": "milestone_3",
            "acceptance_criteria": "Acceptance Criteria",
            "status": "status_done"
        }
    ],
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


project_page_header(localData)
milestone_dropdown(localData)
populate_kanban_board(localData)