import reducer from '../../reducers/interface';

describe("interface",()=>{
  let obj = {
    id: 3,
    name: "Mark",
    brand: "Salvo",
    price: 3.95,
    alcoholContent: 3,
    pints: 124
  }

  test("change view",()=>{
    let result = reducer(undefined,{type:"CHANGE_VIEW",view:"Form"});
    expect(result.currentView).toEqual("Form");
  })

  test("change details", () => {
    let result = reducer(undefined, { type: "CHANGE_DETAILS", obj});
    expect(result.details.id).toEqual(3);
  })

  test("change modal", () => {
    let result = reducer(undefined, { type: "CHANGE_MODAL", bool:true });
    expect(result.isOpen).toEqual(true);
  })
})