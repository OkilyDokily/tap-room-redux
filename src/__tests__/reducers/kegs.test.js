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


});