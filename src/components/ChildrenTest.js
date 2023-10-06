function ChildrenTest (props) {

    // Codigo para testear el props.children 
    const styles = {
        color: "#222",
        fontSize: "25px",
        
    }

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default ChildrenTest;