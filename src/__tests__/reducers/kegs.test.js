import reducer from '../../reducers/kegs.js'

describe("kegs", () => {
  let obj = {
    id: 3,
    name: "Mark",
    brand: "Salvo",
    price: 3.95,
    alcoholContent: 3,
    pints: 124
  }

  let obj2 = {
    id: 4,
    name: "Kramer",
    brand: "Ovals",
    price: 3.95,
    alcoholContent: 3,
    pints: 0
  }

  test("add keg", () => {
    let result = reducer(undefined, {
      type: "ADD_KEG", keg: obj
    })
    expect(Object.keys(result.kegs).length).toEqual(3);
    expect(result.kegs[3]).toEqual(obj);
  });

  test("edit keg", () => {
    let result = reducer(undefined, {
      type: "ADD_KEG", keg: obj
    })
    let edit = { ...obj };
    edit.name = "Bryan"
    let result2 = reducer(result, {
      type: "ADD_KEG", keg: edit
    })

    expect(result2.kegs[3].name).toEqual("Bryan");
  });

  test("delete keg", () => {
    let result = reducer(undefined, {
      type: "DELETE_KEG",id:1
    })
  
    expect(Object.keys(result.kegs).length).toEqual(1);
    let result2 = reducer(result, {
      type: "DELETE_KEG", id: 2
    })
    expect(Object.keys(result2.kegs).length).toEqual(0);
  });

  test("Purchase Pint", () => {
    let result = reducer(undefined, {
      type: "PURCHASE_PINT", id: 1
    })

    expect(result.kegs[1].pints).toEqual(123);
  });

  test("Purchase Pint stays at zero", () => {
    let result = reducer(undefined, {
      type: "ADD_KEG", keg: obj2
    })
   
    let result2 = reducer(result, {
      type: "PURCHASE_PINT", id: 4
    })

    expect(result2.kegs[4].pints).toEqual(0);
  });

  test("returns default if incorrect reducer", () => {
    let result = reducer(undefined, {
      type: "ADD_KEG", keg: obj
    })
    let result2 = reducer(result, { type: "DELETE_KE", id:3 });
    expect(result).toEqual(result2);
  })


});