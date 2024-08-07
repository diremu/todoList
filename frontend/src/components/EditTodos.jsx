import

const editTodo = (todo) => {

    return(
        
    )
}

const Modal = ({isVisible, onClose, children}) => {

    if (!isVisible) return null;

    return (
        <div className=" fixed top-0 left-0 right-0 bottom-0 opacity-50 flex items-center justify-center">
            <div className="bg-white p-20 rounded-md relative w-[80%] max-w-[500px]">
                <span className="absolute top-4 right-4 text-xl cursor-pointer" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export {editTodo};