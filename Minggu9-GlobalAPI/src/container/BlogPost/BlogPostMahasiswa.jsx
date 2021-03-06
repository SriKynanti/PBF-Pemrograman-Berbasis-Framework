import React, {Component} from 'react';
import './BlogPostMahasiswa.css';
import PostMahasiswa from '../../component/PostMahasiswa';
import API from '../../servicesMhs';

class BlogPostMahasiswa extends Component{
    state = {                           //komponen untuk mengecek ketika component telah di mounting maka panggil API
        listMahasiswa:[],
        insertMahasiswa: {
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }                  // variabel array yang digunakan untuk menyimpan data API
    }

    ambilDataDariServerAPI = () => {
        API.getMhsBlog().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    }
    

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        API.deleteMhsBlog(data).then((response) => {
            this.ambilDataDariSeverAPI();
        });
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timeStamp = new Date().getTime();
        formInsertMahasiswa['id'] = timeStamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        API.postMhsBlog(this.state.insertMahasiswa)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render() {
        return(
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="Nama" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="nim" id="nim" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nama" name="nama" cols="30" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" cols="30" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">No. HP</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="hp" name="hp" cols="30" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Tahun Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="angkatan" name="angkatan" cols="30" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="status" name="status" cols="30" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa=> {
                        return <PostMahasiswa 
                        key={mahasiswa.id} 
                        nim={mahasiswa.nim} 
                        nama={mahasiswa.nama}
                        alamat={mahasiswa.alamat}
                        hp={mahasiswa.hp}
                        angkatan={mahasiswa.angkatan}
                        status={mahasiswa.status}    
                        idMahasiswa={mahasiswa.id} 
                        hapusMahasiswa={this.handleHapusMahasiswa}/>
                    })
                }
            </div>
        )
    }

}
export default BlogPostMahasiswa;