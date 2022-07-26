import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({description:"Email of user"})
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string


    @ApiProperty({description:"Password of user"})
    @IsString()
    @IsNotEmpty()
    password: string

}
