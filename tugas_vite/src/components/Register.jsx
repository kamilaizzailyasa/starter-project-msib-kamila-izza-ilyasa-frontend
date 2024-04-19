import * as React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="background">
      <div className="form-box login">
        <form action="">

        <div style={{textAlign: 'center', color: 'black', fontSize: 80, fontFamily: 'Irish Grover', fontWeight: '400', wordWrap: 'break-word'}}>Form Registrasi</div>
       
        <div style={{color: '#050505', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Nama Lengkap</div>
   
    <div className="input-box">
            <input type="text" placeholder="Nama Lengkap" required> 

            </input>
          </div>

          <div style={{color: '#050505', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Username</div>

    <div className="input-box">
            <input type="text" placeholder="Username" required> 

            </input>
          </div>
          <div style={{color: '#050505', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>E-mail</div>

    <div className="input-box">
            <input type="text" placeholder="E-mail" required> 

            </input>
          </div>

          <div style={{color: '#050505', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Password</div>

    <div className="input-box">
            <input type="text" placeholder="Password" required> 

            </input>
          </div>

        
          <div style={{color: '#050505', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Konfirmasi Password</div>

    <div className="input-box">
            <input type="text" placeholder="Konfirmasi Password" required> 

            </input>
          </div>

          <button class="submit">Daftar</button>

          <div className="label">
      <p className="sudah-punya-akun">
        <span className="text-wrapper">Sudah punya akun? </span>
        <span className="span">Login sekarang</span>
      </p>
    </div>

        </form>
      </div>
    </div>
  );
}