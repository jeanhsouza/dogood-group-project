import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../../../../components/input";
import { StyledButton } from "../../../../../styles/buttons";
import { newPostSchema } from "./newPostSchema";
import { StyledDashNewPostForm } from "./style";


const DashNewPostForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(newPostSchema),
    });

    function submit(data) {
        console.log(data);
    }

    return (
        <StyledDashNewPostForm>
            <form noValidate>

                <div>
                    <Input
                        placeholder="Título"
                        id="title"
                        type="text"
                        error={errors.title}
                        {...register("title")}
                    />
                    <Input
                        placeholder="Link da imagem"
                        id="image"
                        type="text"
                        error={errors.image}
                        {...register("image")}
                    />
                </div>
                <Input
                    placeholder="Conteúdo do post"
                    id="description"
                    type="text"
                    error={errors.description}
                    {...register("description")} />

                <StyledButton buttonSize="medium" buttonStyle="dashSubmit">
                    POSTAR
                </StyledButton>
            </form>
        </StyledDashNewPostForm>
    );
};

export default DashNewPostForm;