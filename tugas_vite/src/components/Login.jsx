import * as React from "react-router-dom";
import "./Login.css";


export default function Login() {
  return (
    <div className="background">
      <div className="form-box login">
        <form action="">

        <div style={{textAlign: 'center', color: 'black', fontSize: 80, fontFamily: 'Irish Grover', fontWeight: '400', wordWrap: 'break-word'}}>Form Login</div>

          <div style={{color: '#050505', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Masukkan E-mail </div>

          <div className="input-box1">
            <input type="text" placeholder="Masukkan E-mail" required> 
            </input>
          </div>

          <div style={{color: '#050505', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Masukkan Password</div>

          <div className="input-box1">
            <input type="text" placeholder="Masukkan Password" required>
            </input>
          </div>
          
          <div style={{color: '#00C2FF', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Lupa Password?</div>

    <button class="submit">Login</button>

    <div className="label">
      <p className="belum-punya-akun">
        <span className="text-wrapper">Belum punya akun? </span>
        <span className="span">Daftar sekarang</span>
      </p>
    </div>

        </form>
      </div>
    </div>
  );
}