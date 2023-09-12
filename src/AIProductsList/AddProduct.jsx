import React from "react";
import { useState } from "react";
import "./AddProduct.css";
import "./ProductsList.css";
const AddAProduct = (props) => {
    const [addButtonId, setAddButtonId] = useState("addcard");
    const [newProductName, setNewProductName] = useState("");
    const [tagsText, setTagsText] = useState("");

    const handleInput = (event) => {
        setNewProductName(event.target.value)
    }
    const handleNewTask = () => {
        props.AddProduct(newProductName, "", [])
        setAddButtonId("addcard");
        setNewProductName("");
        document.getElementById("addtasktext").style.display = "block";
        document.getElementById("addtaskinput").style.display = "none";
    }
    return (
        <div className="card" id={addButtonId} onClick={() => {
            document.getElementById("addproducttext").style.display = "none";
            document.getElementById("addproductinput").style.display = "block";
            setAddButtonId("addcardinput");
        }}>
            <div id="addproducttext">+ Add</div>
            <div id="uploadimage"><svg id="uploadicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 25" x="0px" y="0px"><g data-name="Upload Image"><path d="M16.67,5.8289v5.24a.5.5,0,0,1-1,0v-5.24a1.5016,1.5016,0,0,0-1.5-1.5H5.83a1.5016,1.5016,0,0,0-1.5,1.5v8.08L9.7764,9.5266a2.5,2.5,0,0,1,3.1279.001l.5478.438a.5.5,0,1,1-.625.7812l-.55-.44a1.4774,1.4774,0,0,0-1.873-.0015l-5.8256,4.687a1.4989,1.4989,0,0,0,1.2514.6763h5.43a.5.5,0,0,1,0,1H5.83A2.4976,2.4976,0,0,1,3.4984,15.05a.4907.4907,0,0,1-.0334-.1074,2.4689,2.4689,0,0,1-.1349-.7735v-8.34a2.5026,2.5026,0,0,1,2.5-2.5h8.34A2.5026,2.5026,0,0,1,16.67,5.8289ZM15.36,12.3694a1.3862,1.3862,0,0,0-.896-.4692.4843.4843,0,0,0-.4034,0,1.3864,1.3864,0,0,0-.8969.4692l-1.1934,1.4272a.5.5,0,0,0,.7676.6416l1.0244-1.2251v2.958a.5.5,0,0,0,1,0V13.2142l1.0234,1.224a.5.5,0,0,0,.7676-.6416ZM7.3418,5.9221A1.6092,1.6092,0,1,1,5.7324,7.5315,1.6112,1.6112,0,0,1,7.3418,5.9221Zm0,1a.6092.6092,0,1,0,.6094.6094A.61.61,0,0,0,7.3418,6.9221Z"/></g></svg></div>
            <input id="addproductinput"
                type="text"
                placeholder="Proudct name..."
                value={newProductName}
                onKeyDown={(event) => {
                    event.key == 'Enter' && newProductName != "" ? handleNewTask() : undefined
                }}
                onChange={handleInput}
            />
            <textarea id="tagsinput" value={tagsText} onChange={() => { }} />
            {/* add add cancel buttons */}
        </div>
    );
}

export default AddAProduct;