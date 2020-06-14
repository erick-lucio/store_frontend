const INITIAL_STATE_ITENS = [   
        {
    
        }
    ]


export default function itenReducer(state = INITIAL_STATE_ITENS,action = {}){
    switch(action.type){
        case "ADD_ITEN_":
        return [
            ...state,{
            iten_id:1,            
            name:"refri",//action.name
            category_name:5,//action.category_name
            description:"esse item e bom"
            }
        ]
    
        case "LOGOF_":
        return {
            ...state,
            logged:'false',
            key_auth:'none',
            name:'none',
            
        }
        case "SIGNIN_":
            return{
                ...state,
                sucessfull_signin:action.sucessfull_signin
            }
        default:
            return state;
    }
}