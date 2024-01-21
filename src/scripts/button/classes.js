class Button{
    constructor(id, button_name, func) {
        this.id = id;
        this.name = button_name;
        this.func = func;
      }

    get create_button(){
        const button_div = document.createElement('button');
        button_div.innerHTML = this.name;
        button_div.setAttribute("class", "item_button");
        button_div.setAttribute("id", this.id);
        button_div.addEventListener("click", this.func);
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
        buttons_tab_div.setAttribute("id", this.name);
        for(let button of this.button_data){
            buttons_tab_div.appendChild(button.create_button)
        };
        return buttons_tab_div
    }
}