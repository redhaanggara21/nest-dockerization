export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  isEmailConfirmed: boolean;
}

export default CreateUserDto;
