let nextCardId = 1;
export const addCard = (data) => ({
    type: 'ADD_CARD',
    id:nextCardId++,
    data
  })


  export const removeCard = (id) => ({
    type: 'REMOVE_CARD',
    id
  })

  export const freezeCard = (id) => ({
    type: 'FREEZE_CARD',
    id
  })

  export const unFreezeCard = (id) => ({
    type: 'UN_FREEZE_CARD',
    id
  })