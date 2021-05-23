function SearchBox(props) {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search" placeholder="搜索机器人..."
                onChange={props.searchChange} />
        </div>
    );
}

export default SearchBox;