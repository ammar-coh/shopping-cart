const initialState = {
    details: [],
  
  };
  
  export const user_login = (state = initialState, actions) => {
    switch (actions.type) {
      case "sign_in_reducer":
       console.log("sign_in_reducer",actions.data)
  
        return {
            details:actions.data
        }
  
    
  
      default:
        return state;
    }
  };