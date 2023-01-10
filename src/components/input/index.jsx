import { Label, StyledInput, StyledP, Wrapper } from "./style";
import { forwardRef } from "react";

export const Input = forwardRef(({ name, error, ...rest }, ref) => {
	return (
		<>
			<Wrapper>
				<StyledInput name={name} ref={ref} {...rest} />
				{error && <StyledP>{error[name]?.message}</StyledP>}
			</Wrapper>
		</>
	);
});
