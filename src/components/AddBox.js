// import react from "react";

function AddBox({ addChange }) {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="text" placeholder="Add Robots"
                onChange={addChange} />
        </div>
    );
}

export default AddBox;