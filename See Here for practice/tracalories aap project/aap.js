// Storage Controller
const StorageCtrl = (function(){
    
  //public function ge here
  return{
    storeItem: function(item){
      let items;

      //Check if any item in local storge
      if (localStorage.getItem('items') === null) {
        items = [];

        // Push item to items
        items.push(item)

        //set items to local storage 
        localStorage.setItem('items', JSON.stringify(items))
      } else {
        //get what's already in the local storage
        items = JSON.parse(localStorage.getItem('items'))

        //push the new item
        items.push(item)

        //reset local storage
        localStorage.setItem('items', JSON.stringify(items))
      }
    },
    getItemsFromStorage: function(){
        let items;

        if (localStorage.getItem('items')=== null) {
            items = [];
        } else {
          items = JSON.parse(localStorage.getItem('items'))
        }
        return items;
    },
    updateItemStorage:function(updatedItem){
      let items = JSON.parse(localStorage.getItem('items'))

      items.forEach(function(index,item){
        if(updatedItem.id === item.id){
          items.splice(index,1,updatedItem)  
        }
      });
      localStorage.setItem('items', JSON.stringify(items))
    }
  }
})();

// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id, name, calories){
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  
    // Data Structure / State
    const data = {
      // items: [
      //   // {id: 0, name: 'Steak Dinner', calories: 1200},
      //   // {id: 1, name: 'Laxhek', calories: 700},
      //   // {id: 2, name: 'SanaBachi', calories: 750 }
      // ],
      items: StorageCtrl.getItemsFromStorage(),
      currentItem: null,
      totalCalories: 0
    }
  
    // Public methods
    return {
      getItems: function(){
        return data.items;
      },
      addItem: function(name, calories){
        //Create ID

        if (data.items.length>0) {
          iD = data.items[data.items.length-1].id + 1
        } else {
          iD = 0;
        }

        //Parse Calories into number

      calories = parseInt(calories)

      //create new Item
        newItem = new Item(iD,name, calories)

        data.items.push(newItem)

        return newItem;
      },
      getItemById: function(id){
       let found = null;

       data.items.forEach(item=>{
         if (item.id === id) {
           found = item;
         }
       });
       return found
      },
      updateItem: function(name, calories){
        //Calories to number
        calories = parseInt(calories)

        let found = null;

        data.items.forEach(function(item){
          if (item.id === data.currentItem.id) {
            item.name = name;
            item.calories = calories;
            found = item;
          }
        })
        return found;
      },
      deleteItem: function(id){
        // Get id
        const ids = data.items.map(function(item){
          return item.id
        })

        //Get index
        const index = ids.indexOf(id);

        // Remove item
        data.items.splice(index,1)
      },
      clearAllItems: function(){
        data.items = [];
        },
      setCurrentItem: function(item){
        data.currentItem = item;
      },
      getCurrentItem: function(){
        return data.currentItem
      },
      getTotalCalories: function(){
        let total = 0;

        data.items.forEach(function(item){
          total+=item.calories;
          // total = total+ item.calories
        });
      //set total calories in data structure
      data.totalCalories = total;

      return data.totalCalories
      },
      logData: function(){
        return data;
      }
    }
  })();
  
  
  
  // UI Controller
  const UICtrl = (function(){
    const UISelectors = {
      itemList: '.collection',
      listItems: '#item-list li',
      addBtn : '.add-btn',
      updateBtn : '.update-btn',
      deleteBtn : '.delete-btn',
      backBtn: '.back-btn',
      clearBtn: '.clear-btn',
      itemNameInput: '#item-name',
      itemCaloriesInput: '#item-calories',
      totalCalories: '.total-calories'
    }
    
    // Public methods
    return {
      populateItemList: function(items){
        let html = '';
  
        items.forEach(function(item){
          html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i>Edit</i>
          </a>
        </li>`;
        });
  
        // Insert list items
        document.querySelector(UISelectors.itemList).innerHTML = html;
      },
      getItemInput: function(){
        return {
          name:document.querySelector(UISelectors.itemNameInput).value,
          calories:document.querySelector(UISelectors.itemCaloriesInput).value
        }
      },
      addListItem: function(item){
        //show the list
        document.querySelector(UISelectors.itemList).style.display = 'block;'

        //Create li Emement
        const li = document.createElement('li');
        //Add class
        li.classList.add('collection-item');
        //Add ID
        li.id = `item-${item.id}`;
        // Add HTML
        li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item">Edit</i>
        </a>`;
        //insert item
        document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend',li)
      },
      updateListItem: function(item){
        let listItems = document.querySelectorAll(UISelectors.listItems);

        //Turn Nodelist into array
        listItems = Array.from(listItems);

        listItems.forEach(function(listItem){
          const itemID = listItem.getAttribute('id')

          if (itemID === `item-${item.id}`) {
              document.querySelector(`#${itemID}`).innerHTML =  `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item">Edit</i>
              </a>`;
          }
        })
      },
      deleteItem: function(id){
        // const itemID = `item-${id}`;
        document.querySelector(`#item-${id}`).remove();
      },
      clearInput: function(){
        document.querySelector(UISelectors.itemNameInput).value = '';
        document.querySelector(UISelectors.itemCaloriesInput).value = '';
      },
      addItemToForm: function(){
        document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
        document.querySelector(UISelectors.itemCaloriesInput).value =  ItemCtrl.getCurrentItem().calories;
        UICtrl.showEditState();
      },
      removeItem: function(){
        let listItems = document.querySelectorAll(UISelectors.listItems);
        listItems = Array.from(listItems);

        listItems.forEach(item=>{
          item.remove()
        })
      },
      hideList : function(){
        // document.querySelector(UISelectors.itemList).style.display = 'none';
      },
      showTotalCalories: function(totalCalories){
        document.querySelector(UISelectors.totalCalories).textContent = totalCalories
      },
      clearEditState: function(){
        // UICtrl.clearInput();
        document.querySelector(UISelectors.updateBtn).style.display = 'none';
        document.querySelector(UISelectors.deleteBtn).style.display = 'none';
        document.querySelector(UISelectors.backBtn).style.display = 'none';
        document.querySelector(UISelectors.addBtn).style.display = 'inline';
      },
      showEditState: function(){
        // UICtrl.clearInput();
        document.querySelector(UISelectors.updateBtn).style.display = 'inline';
        document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
        document.querySelector(UISelectors.backBtn).style.display = 'inline';
        document.querySelector(UISelectors.addBtn).style.display = 'none';
      }, 
      getSelectors: function(){
        return UISelectors
      }
    }
  })();
  
  
  
  // App Controller
  const App = (function(ItemCtrl,StorageCtrl, UICtrl){
    // LoadEventListeners
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();

        //Add Item Event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        document.addEventListener('keypress', (e)=>{
          if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault()
            return false
          }
        })

        //Edit icon click
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        //Item Update Submit
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateClick)

          //Back Button Submit
          document.querySelector(UISelectors.backBtn).addEventListener('click', itemBackClick)

           //Back Button Submit
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteClick)

         //Item ClearBtn Submit
         document.querySelector(UISelectors.clearBtn).addEventListener('click', itemClearClick)

    }
    //Add Item
    const itemAddSubmit = function(e){
       //Getting input
       const input =UICtrl.getItemInput();

       //Check for name and calorie input

       if (input.name !== '' && input.calories !=='') {
        //Add item
        const newItem = ItemCtrl.addItem(input.name, input.calories);

        //Add Item to the UI
        UICtrl.addListItem(newItem);

        const totalCalories = ItemCtrl.getTotalCalories()
        //Add total calories toUI
        UICtrl.showTotalCalories(totalCalories);

        StorageCtrl.storeItem(newItem);

        //Clear inputs
        UICtrl.clearInput();
       
       }
      e.preventDefault();

    }

    const itemEditClick = function(e){
     if (e.target.classList.contains('edit-item')) {
        // Get List Item ID(itm-0 item-1)

        const listId = e.target.parentNode.parentNode.id;

        //Break into an array (item-0 item-1 type into array)
        const listIdArr = listId.split('-')
        
        //Get actual id
        const id = parseInt(listIdArr[1])

        //Get item
        const itemToEdit = ItemCtrl.getItemById(id);

        //Set Current Item
        ItemCtrl.setCurrentItem(itemToEdit);
      }
         UICtrl.addItemToForm();
          e.preventDefault()
    }

    const itemUpdateClick = function(e){
       //Get item input
       const input = UICtrl.getItemInput();

       //Update item
       const updatedItem= ItemCtrl.updateItem(input.name, input.calories); 

       //Update UI
       UICtrl.updateListItem(updatedItem);

       const totalCalories = ItemCtrl.getTotalCalories()
        //Add total calories toUI
        UICtrl.showTotalCalories(totalCalories);

        //Adjusting Updates in the local storage
        StorageCtrl.updateItemStorage(updatedItem)

        UICtrl.clearEditState();

        UICtrl.clearInput();

      e.preventDefault()
    }

    //BackButton Click

    const itemBackClick = function(e){
        // for clearing buttons and going back
        UICtrl.clearEditState();

        //for clearing the input 
        UICtrl.clearInput();
      e.preventDefault()
    }

    // Deleting Item
    const itemDeleteClick = function(e) {
      // Getting Curent Item
      const currentItem = ItemCtrl.getCurrentItem();

      //Deleting Current item from internal Data
      ItemCtrl.deleteItem(currentItem.id);

      //Delete From UI
      UICtrl.deleteItem(currentItem.id);

      const totalCalories = ItemCtrl.getTotalCalories()

      //Add total calories toUI
      UICtrl.showTotalCalories(totalCalories);

      UICtrl.clearEditState();

      //clearing input
      UICtrl.clearInput();
      e.preventDefault();
      }
      //Clicking clear Button
      const itemClearClick = function(e){
        //Clearing everything from data structure
        ItemCtrl.clearAllItems();

        //Removing items form the UI
        UICtrl.removeItem();

        //Clearing UI 

      e.preventDefault()
    }
    // Public methods
    return {
      init: function(){
        //clear input feild
        UICtrl.clearEditState();
        // Fetch items from data structure
        const items = ItemCtrl.getItems();

        //Check if any Items
        if (items.length===0) {
          UICtrl.hideList();
        } else {
          UICtrl.populateItemList(items);
        }
  
        // Populate list with items
        UICtrl.populateItemList(items);
        
        //Load Event Listener
        loadEventListeners();
      }
    }
    
  })(ItemCtrl,StorageCtrl, UICtrl);
  
  // Initialize App
  App.init();