import { useState } from "react";
import styles from "./ClerkAddPoPage.module.scss";
export default function ClerkAddPoPage({ closePOFormModal }: any) {
  const [itemList, setItemList] = useState([{ item: "" }]);
  const handleItemChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const list: any = [...itemList];
    list[index][name] = value;
    setItemList(list);
  };
  function onHandleClick() {
    closePOFormModal(false);
  }
  const handleItemRemove = (index: any) => {
    const list = [...itemList];
    list.splice(index, 1);
    setItemList(list);
  };
  const handleItemAdd = () => {
    setItemList([...itemList, { item: "" }]);
  };
  return (
    <div id="addpo" className={styles.addPOModel}>
      <div>
        <h2>Add PO</h2>
        <select
          name="customer"
          id="customer-name"
          className={styles.customerSelect}
        >
          <option value="">Select Customer</option>
          <option value="Customer 1">Customer 1</option>
          <option value="Customer 2">Customer 2</option>
          <option value="Customer 3">Customer 3</option>
          <option value="Customer 4">Customer 4</option>
        </select>
        <form className={styles.addPOForm}>
          {itemList.map((singleItem: any, index: any) => (
            <div key={index}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Item name"
                onChange={(e) => handleItemChange(e, index)}
              />
              <input
                type="number"
                name="lengths"
                placeholder="Enter Length"
                onChange={(e) => handleItemChange(e, index)}
              />
              <input
                type="number"
                name="bredth"
                placeholder="Enter Bredth"
                onChange={(e) => handleItemChange(e, index)}
              />
              <input
                type="number"
                name="height"
                placeholder="Enter Height"
                onChange={(e) => handleItemChange(e, index)}
              />
              <input
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
                onChange={(e) => handleItemChange(e, index)}
              />
              <select name="material" className={styles.selectMaterial}>
                <option value="">Select Material</option>
                <option value="Material 1">Material 1</option>
                <option value="Material 2">Material 2</option>
                <option value="Material 3">Material 3</option>
                <option value="Material 4">Material 4</option>
              </select>
              {itemList.length !== 1 && (
                <button
                  className={styles.removePOButton}
                  onClick={handleItemRemove}
                >
                  Remove
                </button>
              )}
              {itemList.length - 1 === index && (
                <div>
                  <button
                    type="button"
                    className={styles.addNewPOButton}
                    onClick={handleItemAdd}
                  >
                    Add Item
                  </button>
                </div>
              )}
            </div>
          ))}
          <div className={styles.button_group}>
            <button type="submit" className={styles.submitPOBtn}>
              Submit
            </button>
            <button
              type="button"
              onClick={onHandleClick}
              className={styles.closePOBtn}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
