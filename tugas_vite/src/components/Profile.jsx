import * as React from "react";
import "./Profile.css";

export default function Login() {
    return (
      <div className="background">
        <div className="form-box login">
          <form action="">
  
            <div className="h1">Singing Competition
            </div>

            <div className="frame1">
            <input type="text" placeholder="Peserta & No.Urut" required>
            </input>
          </div>
          

          <div className="frame2">
            <input type="text" placeholder="Syarat & Ketentuan" required>
            </input>
          </div>

          <div className="frame3">
            <input type="text" placeholder="Lagu Kompetisi" required>
            </input>
          </div>

          <div className="frame4">
            <input type="text" placeholder="Akun" required>
            </input>
          </div>
          
  
          </form>
        </div>
      </div>
    );
  }