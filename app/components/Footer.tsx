import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
    return (
        <section className="flex flex-col justify-center items-center w-1/2" >
            <p className={"m-8 text-lg text-slate-500"}>Follow us on social media</p>
            <div className={"flex flex-row justify-evenly items-center w-full "}>
                <div className={"cursor-pointer flex flex-col justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-slate-200"}>
                    <img className={"mx-2 w-[35px] h-[35px]"} src={"https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"} alt={"instagram"}/>
                </div>
                <div className={"cursor-pointer flex flex-col justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-slate-200"}>
                    <img className={"mx-2 w-[35px] h-[35px]"} src={"https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"} alt={"instagram"}/>

                </div>
                <div className={"cursor-pointer flex flex-col justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-slate-200"}>
                    <img className={"mx-2 w-[35px] h-[35px]"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"} alt={"instagram"}/>

                </div>
                <div className={"cursor-pointer flex flex-col justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-slate-200"}>
                    <img className={"mx-2 w-[35px] h-[35px]"} src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} alt={"linkedIN"}/>

                </div>
                <div className={"cursor-pointer flex flex-col justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-slate-200"}>
                    <img className={"mx-2 w-[35px] h-[35px]"} src={"https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"} alt={"instagram"}/>

                </div>

            </div>

        </section>
    )
}
export default Footer