
function PostCard(props) {



    const { post: {
        title, body ,
    }, index } = props;



    return (
        <div className="post-card"
            style={{ backgroundColor: 'pink', color: 'black', width: '100%', margin: "10" }}
        >

            <strong style={{}}>
                Post number : &nbsp; {index + 1}
            </strong>

            <h2> {title} </h2>
            <p> {body} </p>
            <span>
                <button
                    onClick={() => props.edit(index)}
                >
                    Edit
                </button>

                &nbsp;&nbsp;

                <button
                    onClick={() => props.delete(index)}

                > Delete </button>
            </span>

        </div>
    )


}

export default PostCard;