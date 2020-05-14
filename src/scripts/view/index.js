'use strict'

const views = {
    timeout: 300,
    current: false, 
    list: [],

    set_current: function(current) {
        this.current = current; 
    },

    get_view_element: function(name) {
        return document.querySelector(`main > section > div[data-view-name="${element.dataset.viewTarget}"]`);
    },

    get_views: function() {
        let views =  [...document.querySelectorAll('*[data-view-target]')];
        return views.reduce((current, trigger) => {            
            let view = document.querySelector(`main > section > div[data-view-name="${trigger.dataset.viewTarget}"]`);
            if(view)
                current = [...current, {
                    name: view.dataset.viewName, 
                    element: view,
                    trigger: trigger
                }]; 
            
                return current;
        }, []);
    },

    get_view: function(name) {
        return this.list.filter(item => (item.name == name)); 
    },

    set_change: function(view) {
        let current = this.current.element;
        let next = view.element; 

        current.classList.remove('in'); 
        current.classList.add('out'); 
        current.classList.remove('active'); 
                
        setTimeout(function(){
            current.classList.remove('out'); 
            next.classList.add('in'); 
            next.classList.add('active'); 

        },this.timeout);
        
        this.set_current(view); 
    },

    set_first: function(view)
    {
        let next = view.element; 
        next.classList.add('in'); 
        next.classList.add('active'); 
        this.set_current(view); 
    },

    set_listeners: function(view){
        let _this = this;        
        view.trigger.addEventListener('click', function(e){
            e.preventDefault();
            views.set_change(view);
        }); 
    },

    set: function(){
        let _this = this;
        this.list = this.get_views();    
    
        let [first, ...rest] = this.list; 
        
        
        this.set_first(first);
        this.list.forEach(function(view){
            _this.set_listeners(view);
        }); 

    }
}

export default views;