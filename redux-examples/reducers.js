//Reducers (Departments)
const Redux = require('Redux');

console.clear();

//People dropping off a form(action creators)

const createPolicy = (name, amount) => {
    return { //Action - create policy
        type: "CREATE_POLICY",
        payload: {
            name: name,
            amount: amount
        }
    };
}

const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload: {
            name: name,
        }
    }
}

const createClaim = (name, amount) => {
    return {
        type: "CREATE_CLAIM",
        payload: {
            name,
            amountOfMoneyToCollect: amount
        }
    };
}


const claimHistory = (oldListOfClaims = [], action) => {

    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload];
    }

    //Ignore other action
    return oldListOfClaims;
}

const accounting = (bagOfMoney = 0, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    }

    if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {

    if (action.type === 'CREATE_POLICY') {
       return [...listOfPolicies, action.payload.name];
    }

    if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
}

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
   accounting: accounting,
   claimHistory: claimHistory,
   policies: policies
});

const store = createStore(ourDepartments);
const action = createPolicy('Alex', 20);
store.dispatch(action);
store.dispatch(createPolicy('Jim', 30));
console.log(store.getState());


