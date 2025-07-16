import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed sequi suscipit, error aut commodi est accusantium enim! Quia, deleniti quam. Explicabo corporis eligendi voluptatum deleniti neque laudantium, atque eveniet.
                </p>
                <p>
                    &copy; Evogym All Rights Reserved
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <a className="block my-5" href="https://www.instagram.com/" target="_blank">Instagram</a>
                <a className="block my-5" href="https://www.facebook.com/" target="_blank">Facebook</a>
                <a className="block my-5" href="https://www.youtube.com/" target="_blank">Youtube</a>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                <p>(333)425-6825</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer