class Button{
    constructor(id, button_name) {
        this.id = id;
        this.name = button_name;
        this.ul_input_list = [];
      }

    get create_ul_list(){
    }

    get populate_form(){

        this.create_ul_list;
        let backlog_form = document.getElementById("backlog_form")

        if(document.getElementById("backlog_form_ul")){
            document.getElementById("backlog_form_ul").remove()
        } 
    
        let form_ul = document.createElement('ul')
        form_ul.setAttribute('id', 'backlog_form_ul')
        for(let box of this.ul_input_list){
            form_ul.appendChild(box);
        }
        backlog_form.appendChild(form_ul);
    }

    get create_button(){
        const button_div = document.createElement('button');
        button_div.innerHTML = this.name;
        button_div.setAttribute("class", "item_button");
        button_div.setAttribute("id", this.id);
        button_div.addEventListener("onclick", this.populate_form);
        return button_div
    }

}

class ButtonTab{
    constructor(id, button_data) {
        this.id = id;
        this.button_data = button_data;
      }

    get create_div(){
        const buttons_tab_div = document.createElement('div');
        buttons_tab_div.setAttribute("id", this.id);
        for(let button of this.button_data){
            buttons_tab_div.appendChild(button.create_button)
        };
        return buttons_tab_div
    }
}