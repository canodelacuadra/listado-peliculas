import Usuario from "../usuario/usuario";
export default function ListaUsuarios() {
    return (
        <>
            <Usuario
                id="1"
            nombre="Leonardo"
            email="leonardo@gmail.com"
            avatar = 'morrocoy'
            />
            <Usuario
                id="2"
                nombre="Jose María"
                email="josemaria@gmail.com"
                avatar='ayaguasca'
            />
            <Usuario
                id="3"
                nombre="jesus"
                email="jesus@gmail.com"
                avatar='sapo bufo'
            />

        </>
        
    );
}