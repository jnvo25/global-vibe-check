function Stars() {
    function generateRandomStars() {
        var dimensions = Math.floor(Math.random() * 10 + 1);
        return {
            position: "fixed",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            left: String(Math.floor(Math.random() * 100 + 1)) + "%",
            top: String(Math.floor(Math.random() * 100 + 1)) + "%",
            height: dimensions,
            width: dimensions,
            boxShadow: "0px 0px 10px yellow",
        }
    }

    const numStars = 40;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<span className="star" style={generateRandomStars()}></span>);
    }
    return (
        <div>{stars}</div>
    );
}

export default Stars;