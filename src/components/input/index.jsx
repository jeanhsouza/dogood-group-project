import { Label, StyledInput, StyledP, Wrapper } from "./style";
import { forwardRef } from "react";

export const Input = forwardRef(
	({ type, id, name, label, error, ...rest }, ref) => {
		return (
			<>
				<Wrapper>
					<StyledInput type={type} id={id} ref={ref} {...rest} />
					{error && <StyledP>{error.name?.message}</StyledP>}
				</Wrapper>
			</>
		);
	}
);
