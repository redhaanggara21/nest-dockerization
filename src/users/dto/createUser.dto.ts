export class CreateUserDto {
  email: string;
  name: string;
  username: string;
  password: string;
  isEmailConfirmed: boolean;
}

export default CreateUserDto;
