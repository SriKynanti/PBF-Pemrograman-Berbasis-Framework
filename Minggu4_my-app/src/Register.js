import React from "react";
import './Register.css';

const Login = () =>{
    return (
        <div class="kotak_register">
            <center><h2>Form Login</h2></center>
            <center> <h1 class="tulisan_register">Tugas Pertemuan Ketiga</h1></center>

            <form>
                <div class="form-inline">
                    <label>Name</label>
                    <input type="text" name="username" class="form_register" placeholder="Masukkan nama"/>
                </div>
                <div class="form-inline">
                    <label>Username</label>
                    <input type="text" name="username" class="form_register" placeholder="Masukkan username"/>
                </div>
                <div class="form-inline">
                    <label>Email</label>
                    <input type="text" name="username" class="form_register" placeholder="Masukkan email"/>
                </div>
                <div class="form-inline">
                    <label>No.Hp</label>
                    <input type="text" name="username" class="form_register" placeholder="Masukkan no.hp"/>
                </div>
                <div class="form-inline">
                    <label>Password</label>
                    <input type="password" name="password" class="form_register" placeholder="Masukkan password"/>
                </div>
                <input type="submit" class="tombol_register" value="REGISTER"/>

               <center> <p><input type='checkbox' name='remember_me' value='Remember Me' />Remember Me</p></center>
                <center><input type="submit" class="tombol_cancel" value="Cancel"/></center>
                <br/>
                <br/>
            </form>
        </div>
    );
}

export default Login;