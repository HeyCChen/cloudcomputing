function AddBox(props) {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search" placeholder="Add Robots"
                value={props.value}
                onChange={props.addChange} />
        </div>
    );
}

export default AddBox;