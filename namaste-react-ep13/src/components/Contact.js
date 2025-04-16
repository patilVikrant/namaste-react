

const Contact = () => {
    return (
        <div className="m-4">
            <h1 className="font-bold text-xl">Contact Us</h1>
            <form className="flex gap-4">
                <input placeholder="name" className="border border-black p-2 rounded-sm" type="text" />
                <input placeholder="message" className="border border-black p-2 rounded-sm" type="text" />
                <button className="border border-black p-2 rounded-sm cursor-pointer">Submit</button>
            </form>
            
        </div>
    )
}

export default Contact;