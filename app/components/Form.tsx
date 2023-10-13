const Form = () =>{
    return(
        <section className={"flex flex-col pb-16 justify-center items-center bg-blue-500 w-full bg-gradient-to-r from-blue-800 to-blue-500 "}>
            <h2 className={" m-8 text-3xl font-bold text-white"}>Subscribe to our newsletter!</h2>

            <div className="form-control w-full max-w-md">
                <label className=" label">
                    <span className="text-white text-md label-text">Email</span>
                </label>
                <input type="text"  className="input input-bordered w-full " />

            </div>
            <div className="form-control w-full max-w-md">
                <label className="label">
                    <span className="text-white text-md label-text">First Name</span>
                </label>
                <input type="text" className="input input-bordered w-full " />

            </div>
            <div className="form-control w-full max-w-md">
                <label className="label">

                    <span className="text-white text-md label-text">Last Name</span>
                </label>
                <input type="text"  className="input input-bordered w-full max-w" />

            </div>
            <div className="form-control  my-4 w-full max-w-md">
                <label className="label flex flex-row cursor-pointer">
                    <input type="checkbox"  className="checkbox bg-white " />
                    <p className="text-white ">Check if related to A2SV as a student, mentor or other</p>

                </label>
            </div>
            <div className="form-control  my-4 w-full max-w-md">
                <button className="btn bg-yellow-500 text-white border-none hover:bg-yellow-500 ">Subscribe Now</button>
            </div>


        </section>
    )
}
export default Form