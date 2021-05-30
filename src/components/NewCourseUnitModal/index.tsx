import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import { Container, Error } from './style';
import { FiX } from 'react-icons/fi';

interface NewCourseUnitModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

interface NewCourseUnitData{
    name: string;
    description: string;

}


export function NewCourseUnitModal({isOpen, onRequestClose}:NewCourseUnitModalProps){

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container>
                <h2>Cadastrar Unidade Curricular</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <input type="text"
                           placeholder="Nome"
                           {...register("name", {required:true})}        
                    />
                    {errors.courseunit && <Error>O preechimento do campo é obrigatório</Error>}
                    <input type="text"  
                           placeholder="Descrição"
                           {...register("description", {required:true})} 
                    />
                    {errors.courseunit && <Error>O preechimento do campo é obrigatório</Error>}
                </form>

            </Container>




            
        </Modal>
    )
}
