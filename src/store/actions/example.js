

export const ActionTypes = {
    add: 'Add',
    edit: 'EDIT',
    remove: 'REMOVE',
}

export const Actions = {
    Add
}

const Add = (data) => {
    return {
        action: ActionTypes.add,
        payload: data
    }
}