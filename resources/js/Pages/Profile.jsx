import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Profile({ props }) {
    return (
        <GuestLayout title="Profile">
            <Head>
                <title>Profile</title>
            </Head>
           
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src="https://image.web.id/images/2022/06/04/202ef54689c95ae61a5a44fbda7b27b1.png"
                            alt="Foto Profil Penerbit"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>Tentang Kami</h2>
                        <p>
                            Penerbit Terbaik adalah penerbit buku yang
                            berkomitmen untuk memberikan kualitas terbaik kepada
                            pembaca kami. Kami telah menerbitkan berbagai jenis
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet illum, suscipit tempora non perspiciatis repudiandae nisi exercitationem nemo quod quisquam pariatur recusandae quidem officiis cum accusamus aliquam expedita. Sit, saepe!
                            At provident, quo delectus id fugit facere illum aspernatur quas, beatae laudantium blanditiis. Facere iste dicta fuga ea id. Inventore assumenda natus optio! Consequatur excepturi voluptates quasi impedit. Quae, necessitatibus.
                            Dolorum voluptatum accusamus officiis atque optio cupiditate nulla et aut iure laudantium, maiores quae quis suscipit at. Labore sit eius rem soluta? Eos neque nobis consectetur debitis sed placeat. Ad?
                            Fugiat minus eligendi, animi, saepe aut cum dolorum obcaecati accusamus, quisquam provident quidem repellendus quos. Quod facilis, reprehenderit dolore eum perferendis earum repellendus laborum nemo deserunt numquam, quaerat eaque pariatur?
                            buku, mulai dari fiksi hingga non-fiksi.
                        </p>
                        <div className="col-6 col-md-4">
                            <ul style={{ 
                                padding : 0,
                                margin : 0,
                                listStyle : 'none',
                                display:'flex',
                                alignItems:'center',
                                justifyContent : 'space-between'
                             }}>
                                <li><a className="buton_medsos" href=""><i className="fa fa-facebook"></i></a></li>
                                <li><a className="buton_medsos" href=""><i className="fa fa-instagram"></i></a></li>
                                <li><a className="buton_medsos" href=""><i className="fa fa-youtube"></i></a></li>
                                <li><a className="buton_medsos" href=""><i className="fa fa-whatsapp"></i></a></li>
                                <li><a className="buton_medsos" href=""><i className="fa fa-map"></i></a></li>
                            </ul>
                        </div>
                        <div className="maps">
                        <iframe
                        className="mt-4 rounded shadow-sm border"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.575730678374!2d107.75177775!3d-6.933091599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c34f45a4c021%3A0xbd7cbd9053c00fa4!2sVilla%20BANDUNG%20INDAH%20Cileunyi!5e0!3m2!1sid!2sid!4v1694072685728!5m2!1sid!2sid"
                        width={'100%'}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        />

                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
