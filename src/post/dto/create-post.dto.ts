import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreatePostDto {

    @ApiProperty({description:"Title of a article"})
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({description:"Description of a article"})
    @IsString()
    description?: string
}
