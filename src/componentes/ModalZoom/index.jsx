import styled from "styled-components"

const Overlay = styled.div`
    background-color:  rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
   position: absolute;
   top: 294px; 
`


const ModalZoom = () => {
    return (
        <>
<<<<<<< HEAD
            <dialog open={!!foto}>
                <p>Exemplo do Mozilla</p>
                <form method="dialog">
                    <button type="submit">ok</button>
                </form>
            </dialog>
=======
            {foto && <>
                <DialogEstilizado open>
                    <Overlay />
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <button type="submit">ok</button>
                    </form>
                </DialogEstilizado>
            </>}
>>>>>>> f9668eef41ed3fdb27689b47fff48a8aa08734d4
        </>

    )
}

export default ModalZoom
