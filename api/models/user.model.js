import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAygMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIEAwUGB//EACsQAQACAQIEBgIBBQAAAAAAAAABAgMEERIhMUETIjJRYXFSkQUjM3KBkv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/cQAAAAABEzt1cb5p6U/YOtrRWOcuds34w4zMz1nc69QWnJaeW6szM9ZQICd9uiAFovaO7pXNMernDiA1VyVt0ldjXpltHq51UaRWsxMcp3WAAAAAAAAAAARM7Rulmy5N+UAZL2tO3ZzShAAABFrVrG9piPsEjlOow77eLX9r0yUv6LRP1ILCQEAAtS019LTS0WjkyLUtwTGwNYiJ3iJSoAAAAAAAA5Z77V2jrLOveeK2/ZQABABl1+acePw6+q3f2gFdVrOGeDFO895Yb2tad7Tv9oFQmTv1mJ+ABqway9PLknir7+z0azE1iazvEvE/wBtf8fl4Mnh29NunxKK9AABKAHXBfaeGe/RoY46w1Y54qxKiwAAAAACmW21ftdx1E9IBw7gIAADytXabai0+3J6zxs+/jX3/KVFABAAA3mJiY7cwB7dZ4qxb3gU08TGDHE9eGF0UAAd9PPWHBfFO14BqAUAAAAGfPPniPhoZs/9yP8AEHMBAAAebr8fDmm3a3N6TlqcHjY9ulo51B5Ites0tNbRtKqoAALUpN71rHeVXoaHTzjjxL8rz0j4BrjlG0dhKEUAAWr6o+1Vq+qPuAawFAAAABnzx5o+mhyzxygGcBAAAOWwdAcs+npmjad4t2mGLJos1Z8sRaPh6M3r+UftHiU/Ov7UeVOHJvt4dt/pamly3n0zWPez0/Ep+df2eJT86/sHHT6OmKeK3nt9coaEReva0ftMTE9AAEAABakb3hV0wRvf6BpEQlQAAAAVvXirMLAMaHTNXhtv2lzASMutzzjpwV9Vu/tCBqNXXH5ccxafjsw5M+XLzvfl7Oc8xQAAAAWpkvjnelphUBu0+tnfhz/9Q2xMTG8Tyl4jXodTNbeHed6z0n2B6AlCA0YK7V393GkcVtv21RG0bKJAAAAAAABXJWL12ll2mJ2nq2OWXHvG9eoM/LrPZ42S85Mlrz3erqpmunybdYh5AAAgAAAAAAfHQAetpcniYa279HaGP+NnfHePaXoYse+0z0FXw02jeerqAAAAAAAAAAAM2twTmwWrTbimHg2palpresxaOz6dx1Gmxaiu2SOfaY6wD50bNT/H5cUzOPz0946/pj+J33EAAAAAADbns0afR5s8+Wu1e9p5Q9TS6DHp/NPnv+U9voVy/jNLfHSbZY24p5Q9CEgAAAAAAAAAAAAAADlm02HNH9THE/PcAebrtFiwU48fF9TPJ50c77ACZr8yi3KYAGrRaemotteZiPh6uDR6fFzrjjf3nmANOwAAAAAAAAAP/9k="
    },
},{timestamps:true});

const User = mongoose.model('user',userSchema)

export default User;