import { useSelector } from "react-redux"
import { getAllUsers } from "../../store/features/posts/usersSlice"

type PostAuthorProps = {
    userID: number | undefined
    author: string | undefined
}


const PostAuthor = ({ userID, author } : PostAuthorProps) => {
    const users = useSelector(getAllUsers)
    let postAuthor
    
    if(author){
        postAuthor = author
    }
    else{
        let foundAuthor = users.find((user) => user.id === userID)
        postAuthor = foundAuthor?.name
    }
    
    return (
        <span>author: {postAuthor ? postAuthor : "Unknow"}</span>
    )
}

export default PostAuthor