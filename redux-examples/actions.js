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
