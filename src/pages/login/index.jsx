import { Input } from "../../components/input";
import logImage from "../../assets/img/loginImage.png";
import { ImageDiv, LogButton, StyledLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Button } from "../../components/Button";

const Login = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const ReqLogin = async (data) => {
    try {
      const response = await api.post("/login", data);

      window.localStorage.setItem("@USER:ID", response.data.user.id);
      window.localStorage.setItem("@USER:TOKEN", response.data.accessToken);
      Navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  function loginForm(data) {
    ReqLogin(data);
  }

  return (
    <>
      <StyledLogin>
        <ImageDiv>
          <img src={logImage} alt="" />
        </ImageDiv>
        <form action="" onSubmit={handleSubmit(loginForm)}>
          <h1>ACESSE SUA CONTA</h1>
          <div className="form-div">
            <Input
              placeholder="Email"
              id="email"
              type="email"
              error={errors.email}
              {...register("email")}
            />

            <Input
              placeholder="Senha"
              id="password"
              type="password"
              error={errors.password}
              {...register("password")}
            />
            <Button name={"LOGIN"} size={"small"} style={"brand3"} />
          </div>

          <div className="questionDiv">
            <p>AINDA NÃO POSSUI UMA CONTA?</p>

            <Link to="/register" className="hoverUnderLineAnimation" href="">
              CADASTRE-SE AQUI
            </Link>
          </div>
        </form>
      </StyledLogin>
    </>
  );
};

export default Login;
